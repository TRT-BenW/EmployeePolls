import { Button, Title, Center } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconPlanet, IconUfo } from "@tabler/icons";
import "../../css/App.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Center>
      <IconUfo className="Alien-logo" size={24} />
      <Title
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        style={{ fontFamily: "Greycliff CF, sans-serif", margin: '20px 0' }}
        order={2}>
          UHOH! Looks like this page doesn't exist yet!
      </Title>
      <Button
        className="magic-text1"
        variant="outline"
        rightIcon={<IconPlanet />}
        onClick={() => navigate("/")}>
          Head Back To Reality
      </Button>
    </Center>
  );
};

export default NotFound;