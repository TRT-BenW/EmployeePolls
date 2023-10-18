import { useSelector } from "react-redux";
import { Table, Title, Space } from "@mantine/core";
import AvatarProfile from "../atoms/AvatarProfile";

const Leaderboard = () => {
  const users = useSelector((state) => 
    Object.values(state.users.value)
      .map(user => ({
        ...user,
        totalScore: Object.keys(user.answers).length + user.questions.length,
      }))
      .sort((a, b) => b.totalScore - a.totalScore)
  );

  return (
    <div>
      <Title order={1}>Leaderboard</Title>
      <Space h="lg" />
      <Table highlightOnHover verticalSpacing="md">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Questions Asked</th>
            <th>Questions Answered</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, questions, answers, totalScore }) => (
            <tr key={id}>
              <td><AvatarProfile name={id} /></td>
              <td>{name}</td>
              <td>{questions.length}</td>
              <td>{Object.keys(answers).length}</td>
              <td>{totalScore}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Leaderboard;
