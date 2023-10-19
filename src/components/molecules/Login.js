import { Button, Select, TextInput, Stack, Grid } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Removed useLocation
import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../../redux/reducers/AuthReducer";
import "../../css/App.css";

export default function Login() {
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);

  const options = Object.keys(users).map((user) => ({
    label: users[user].name,
    value: users[user].id,
  }));

  const handlePasswordValidation = () => {
    if (users && users[selectValue] && passwordValue === users[selectValue].password) {
      dispatch(loginUser(selectValue));
      navigate('/');  // Always navigate to home page
    } else {
      alert("Wrong password");
    }
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  return (
    <>
      <Grid justify="center">
      <Grid.Col>Employee Polls
          <img src="/pollImage.png" alt="Employee Polls"/>
        </Grid.Col>
      </Grid>

      <Stack
        spacing="xl"
        justify="space-between"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        })}
      >
        <Select
          label="Username"
          value={selectValue}
          onChange={setSelectValue}
          data={options}
        />
        <TextInput
          placeholder="Your password"
          disabled={selectValue === null}
          onChange={handlePasswordChange}
          label="Password"
          withAsterisk
        />
        <Button
          variant="gradient"
          onClick={handlePasswordValidation}
          padding="xl"
          width={150}
          gradient={{ from: "indigo", to: "cyan" }}
        >
          Login
        </Button>
      </Stack>
    </>
  );
}