import { Alert, Text } from "@mantine/core";
import { IconUserCheck } from "@tabler/icons";

const VoteResult = ({ option, optionVotes, altOptionVotes, color, icon, userVotedForOption }) => (
  <Alert icon={icon} title={option} color={color}>
    <Text>{`${optionVotes} votes for this option! ${(optionVotes / (optionVotes + altOptionVotes) * 100).toFixed(2)}% of the votes!`}</Text>
    {userVotedForOption && <Text><IconUserCheck /> You voted for this option!</Text>}
  </Alert>
);

export default VoteResult;
