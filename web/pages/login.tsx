import "@fontsource/satisfy";
import {
  Button,
  Card,
  Center,
  Container,
  createStyles,
  Input,
  InputWrapper,
  Text,
} from "@mantine/core";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "../components/Logo";
import { useButtonStyles } from "../styles/button";
import {
  namedOperations,
  useAuthenticateUserWithPasswordMutation,
} from "./../src/generated/graphql";

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
    // width: "100%",
  },
  center: {
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomText: {
    marginTop: theme.spacing.md,
    cursor: "pointer",
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

  const [isError, setIsError] = useState(false);

  const [authenticateUserMutation, { client, loading, data, error }] =
    useAuthenticateUserWithPasswordMutation({
      refetchQueries: [namedOperations.Query.User],
    });

  async function loginUser(email: string, password: string) {
    try {
      const res = await authenticateUserMutation({
        variables: {
          email,
          password,
        },
      });

      // @ts-expect-error
      if (res.data?.authenticateUserWithPassword.message) {
        // @ts-expect-error
        setMesg(res.data?.authenticateUserWithPassword.message);
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      console.log("fail");
      setIsError(true);
    }
  }

  const { handleSubmit, register } = useForm<IForm>();

  return (
    <Container className={classes.center} size="sm">
      <Center mb={50}>
        <form
          onSubmit={handleSubmit(async ({ email, password }) => {
            loginUser(email, password);
          })}
        >
          <Card className={classes.card}>
            <Logo />
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

            {isError && (
              <Text mt="sm" color="red">
                {" "}
                Incorrect email or password{" "}
              </Text>
            )}

            <Link href="/register">
              <Text className={classes.bottomText}>
                I don&#39;t have an account yet
              </Text>
            </Link>
          </Card>
        </form>
      </Center>
    </Container>
  );
};

export default Login;
