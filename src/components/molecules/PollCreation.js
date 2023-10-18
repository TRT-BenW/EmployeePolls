import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "@mantine/form";
import {
  Group, Button, TextInput, Box, Title, Space, Stack, Text
} from "@mantine/core";
import { createNewPoll } from "../../redux/reducers/pollReducer";
import { fetchUsers } from "../../redux/reducers/userReducer";

const PollCreation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser.value);
  const { onSubmit, getInputProps } = useForm({
    initialValues: { optionOne: "", optionTwo: "" }
  });

  const handleSubmit = (values) => {
    dispatch(createNewPoll({
      optionOneText: values.optionOne,
      optionTwoText: values.optionTwo,
      author: authUser,
    }));
    dispatch(fetchUsers());
    navigate("/");
  };

  return (
    <Box>
      <Title order={1}>New Poll</Title>
      <Space h="lg" />
      <Stack align="center">
        <Title order={2}>Would You Rather</Title>
        <Text size="sm" color="dimmed">Create two options for people to vote on!</Text>
        <form onSubmit={onSubmit(handleSubmit)}>
          <TextInput withAsterisk label="Option One" placeholder="Option 1" {...getInputProps("optionOne")} />
          <Space h="md" />
          <TextInput withAsterisk label="Option Two" placeholder="Option 2" {...getInputProps("optionTwo")} />
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Stack>
    </Box>
  );
};

export default PollCreation;
