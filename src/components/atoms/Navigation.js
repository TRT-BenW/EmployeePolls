import { ActionIcon, Grid } from "@mantine/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IconStairs, IconHome, IconPlus, IconLogout } from "@tabler/icons";

const Navigation = ({ handleLogout }) => {
  const authUser = useSelector((state) => state.authUser.value);

  if (!authUser) return null;

  const icons = [
    {
      testId: 'homeIcon',
      color: 'blue',
      link: '/',
      icon: <IconHome size={36} />,
    },
    {
      testId: 'leaderboardIcon',
      color: 'violet',
      link: '/leaderboard',
      icon: <IconStairs size={36} />,
    },
    {
      testId: 'newPollIcon',
      color: 'green',
      link: '/add',
      icon: <IconPlus size={36} />,
    },
    {
      testId: 'logoutIcon',
      color: 'red',
      onClick: handleLogout,
      icon: <IconLogout size={36} />,
    },
  ];

  return (
    <Grid>
      {icons.map(({ testId, color, link, icon, onClick }) => (
        <Grid.Col span="auto" key={testId}>
          <ActionIcon
            color={color}
            data-testid={testId}
            component={onClick ? undefined : Link}
            to={link}
            size="xl"
            onClick={onClick}
          >
            {icon}
          </ActionIcon>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Navigation;
