import AuthUser from "./AuthUser";

const calculateVotes = (votes) => 
  Object.values(votes).reduce((acc, vote) => {
    acc[vote] = (acc[vote] || 0) + 1;
    acc.total = (acc.total || 0) + 1;
    return acc;
  }, {});

export default function CalculateVotes(poll, authUser) {
  const optionOneVotes = calculateVotes(poll.optionOne.votes);
  const optionTwoVotes = calculateVotes(poll.optionTwo.votes);

  const authUserVote = AuthUser(authUser, optionOneVotes, optionTwoVotes);

  return { optionOneVotes, optionTwoVotes, authUserVote };
}
