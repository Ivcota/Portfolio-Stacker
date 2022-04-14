import {
  Card,
  createStyles,
  Title,
  Text,
  Container,
  Stack,
  InputWrapper,
  Input,
  Button,
} from "@mantine/core";
import { NextPage } from "next";
import React from "react";

const useStyles = createStyles((theme) => ({
  card: {
    width: "20rem",
  },
  heading: {},
  subHeading: {
    fontSize: "24px",
  },
  label: {
    fontSize: theme.fontSizes.md,
  },
}));

const Login: NextPage = () => {
  const { classes } = useStyles();

  return (
    <Container size="sm">
      <Card className={classes.card}>
        <Title align="center" className={classes.heading}>
          Portfolio Stacker
        </Title>
        <Text align="center" className={classes.subHeading} weight="lighter">
          Login
        </Text>
        <InputWrapper
          classNames={{
            label: classes.label,
          }}
          label="Email:"
          required
          error=""
        >
          <Input />
        </InputWrapper>
        <InputWrapper
          classNames={{
            label: classes.label,
          }}
          label="Password:"
          required
          error=""
        >
          <Input type="password" />
        </InputWrapper>
        <Button>Login</Button>
      </Card>
    </Container>
  );
};

export default Login;
