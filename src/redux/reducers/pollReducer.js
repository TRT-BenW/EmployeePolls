import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../../data/_DATA";

// Async Thunks
export const fetchPolls = createAsyncThunk('polls/fetchPolls', _getQuestions);

export const createNewPoll = createAsyncThunk('polls/createNewPoll', async (formValues) => {
  await _saveQuestion(formValues);
  return _getQuestions();
});

// Slice
export const pollsSlice = createSlice({
  name: 'polls',
  initialState: { value: {} },
  reducers: {
    recordPollAnswer: (state, { payload: { authedUser, qid, answer } }) => {
      state.value[qid][answer].votes.push(authedUser);
      _saveQuestionAnswer({ authedUser, qid, answer });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPolls.fulfilled, (state, { payload }) => { state.value = payload; })
      .addCase(createNewPoll.fulfilled, (state, { payload }) => { state.value = payload; });
  },
});

export const { recordPollAnswer } = pollsSlice.actions;
export default pollsSlice.reducer;
