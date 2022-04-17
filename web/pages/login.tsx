import {
  Button,
  Card,
  Center,
  Container,
  createStyles,
  Input,
  InputWrapper,
  Text,
  Title,
} from "@mantine/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useButtonStyles } from "../styles/button";
import { useAuthenticateUserWithPasswordMutation } from "./../src/generated/graphql";

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

interface IForm {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const { classes } = useStyles();
  const { pmbClass } = useButtonStyles();
  const router = useRouter();

  const [authResult, auth] = useAuthenticateUserWithPasswordMutation();

  async function loginUser(email: string, password: string) {
    try {
      const res = await auth({
        email,
        password,
      });

      // @ts-expect-error
      if (res.data?.authenticateUserWithPassword.message) {
        // @ts-expect-error
        setMesg(res.data?.authenticateUserWithPassword.message);
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(authResult.error?.message);
      console.log("fail");
    }
  }

  const { handleSubmit, register } = useForm<IForm>();

  return (
    <Container className={classes.center} size="sm">
      <Center>
        <form
          onSubmit={handleSubmit(async ({ email, password }) => {
            loginUser(email, password);
          })}
        >
          <Card className={classes.card}>
            <Title align="center" className={classes.heading}>
              Portfolio Stacker
            </Title>
            <Text
              align="center"
              className={classes.subHeading}
              weight="lighter"
            >
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
              <Input {...register("email")} />
            </InputWrapper>
            <InputWrapper
              classNames={{
                label: classes.label,
              }}
              label="Password:"
              required
              error=""
            >
              <Input {...register("password")} type="password" />
            </InputWrapper>
            <Center mt="lg">
              <Button type="submit" className={`${pmbClass} ${classes.button}`}>
                Login
              </Button>
            </Center>
          </Card>
        </form>
      </Center>
    </Container>
  );
};

export default Login;