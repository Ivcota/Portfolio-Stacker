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
  Center,
} from "@mantine/core";
import { NextPage } from "next";
import React from "react";
import { useButtonStyles } from "../styles/button";

const useStyles = createStyles((theme) => ({
  card: {
    width: "20rem",
    boxShadow: theme.shadows.md,
  },
  heading: {},
  subHeading: {
    fontSize: "24px",
  },
  label: {
    fontSize: theme.fontSizes.md,
  },
  button: {
    width: "100%",
  },
  center: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Login: NextPage = () => {
  const { classes } = useStyles();
  const { pmbClass } = useButtonStyles();

  return (
    <Container className={classes.center} size="sm">
      <Center>
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
          <Center mt="lg">
            <Button className={`${pmbClass} ${classes.button}`}>Login</Button>
          </Center>
        </Card>
      </Center>
    </Container>
  );
};

export default Login;
