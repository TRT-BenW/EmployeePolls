import { Button, Card, Group, Badge, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import AvatarProfile from "./AvatarProfile";

const PollCard = ({ id, author, isAnswered, preview, timestamp }) => (
  <Card shadow="sm" p="lg" radius="md" withBorder width={250} style={{ margin: '20px 0' }}>
    <Card.Section><AvatarProfile name={author} size="lg" alt="it's me" /></Card.Section>
    <Group position="apart" mt="md" mb="xs">
      <Text weight={500}>{author}</Text>
      <Text weight={500}>{new Date(timestamp).toLocaleDateString()}</Text>
      <Badge color={isAnswered ? "green" : "pink"} variant="light">{isAnswered ? "Answered" : "Unanswered"}</Badge>
    </Group>
    <Text size="sm" color="dimmed">{preview}</Text>
    <Button variant="light" color="blue" fullWidth mt="md" radius="md" component={Link} to={`/questions/${id}`}>Show</Button>
  </Card>
);

export default PollCard;
