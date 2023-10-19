import { Container, Title, Space } from "@mantine/core";
import { IconAdjustmentsHorizontal, IconAdjustmentsAlt } from "@tabler/icons";
import VoteResult from "../atoms/VoteResult";
import { Fragment } from 'react';  // Corrected import

const AnsweredPollView = ({
  poll,
  authUser,
  authUserVote,
  optionOneVotes,
  optionTwoVotes,
}) => {
  const options = [
    {
      text: poll?.optionOne.text,
      votes: optionOneVotes,
      altVotes: optionTwoVotes,
      color: 'green',
      icon: <IconAdjustmentsHorizontal />,
      isVoted: authUserVote?.vote === 'optionOne',
    },
    {
      text: poll?.optionTwo.text,
      votes: optionTwoVotes,
      altVotes: optionOneVotes,
      color: 'blue',
      icon: <IconAdjustmentsAlt />,
      isVoted: authUserVote?.vote === 'optionTwo',
    },
  ];

  return (
    <Container>
      <Title className="magic-text1" order={1}>
        The People Have Spoken {authUser}!
      </Title>
      <Space h="md" />
      {options.map(({ text, votes, altVotes, color, icon, isVoted }, index) => (
        <Fragment key={index}> 

          <VoteResult
            option={text}
            optionVotes={votes}
            altOptionVotes={altVotes}
            color={color}
            icon={icon}
            userVotedForOption={isVoted}
          />
          {index === 0 && <Space h="md" />}
        </Fragment>
      ))}
    </Container>
  );
};

export default AnsweredPollView;