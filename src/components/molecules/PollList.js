import PollDetailCard from "../atoms/PollCard";
import { Text } from "@mantine/core";

const PollList = ({ polls, isAnswered }) => {
  return polls.length ? (
    polls.map((poll) => (
      <PollDetailCard
        key={poll.id}
        {...poll}
        isAnswered={isAnswered}
      />
    ))
  ) : (
    <Text
      component="span"
      align="center"
      variant="gradient"
      gradient={{ from: "indigo", to: "cyan", deg: 45 }}
      size="xl"
      weight={700}
      style={{ fontFamily: "Greycliff CF, sans-serif" }}
    >
      There are no polls to display
    </Text>
  );
};

export default PollList;
