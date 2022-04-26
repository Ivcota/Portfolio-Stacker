import {
  Button,
  Card,
  Center,
  Container,
  createStyles,
  Input,
  InputWrapper,
  Title,
  Text,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import Logo from "../components/Logo";
import {
  namedOperations,
  useAuthenticateUserWithPasswordMutation,
  useCreateUserMutation,
} from "../src/generated/graphql";
import { useButtonStyles } from "../styles/button";

const useStyles = createStyles((theme) => ({
  card: { width: "20rem", boxShadow: theme.shadows.md },
  bottomText: { cursor: "pointer" },
  heading: { fontWeight: "lighter", fontSize: "24px" },
}));

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Register = () => {
  const router = useRouter();
  const { classes } = useStyles();
  const { pmbClass } = useButtonStyles();

  const [createUserMutation, {}] = useCreateUserMutation();
  const [authenticateUserMutation, {}] =
    useAuthenticateUserWithPasswordMutation({
      refetchQueries: [namedOperations.Query.User],
    });

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<IForm>();

  return (
    <Container>
      <form
        onSubmit={handleSubmit(
          async ({ firstName, lastName, email, password }) => {
            try {
              const res = await createUserMutation({
                variables: {
                  data: {
                    email,
                    firstName,
                    lastName,
                    password,
                  },
                },
              });

              await authenticateUserMutation({
                variables: {
                  email,
                  password,
                },
              });

              alert(
                `Success. User with id ${res.data?.createUser?.id} has been created.`
              );

              router.push("/profile-image-upload");
            } catch (error) {
              console.error(error);
            }
          }
        )}
      >
        <Center>
          <Card className={classes.card} mt="lg">
            <Center mt="lg">
              <Logo />
            </Center>
            <Title className={classes.heading} align="center">
              Register
            </Title>
            <InputWrapper error={errors.firstName?.message} label="First Name">
              <Input
                {...register("firstName", {
                  required: "First Name is required",
                })}
              />
            </InputWrapper>
            <InputWrapper error={errors.lastName?.message} label="Last Name">
              <Input
                {...register("lastName", { required: "Last Name is required" })}
              />
            </InputWrapper>
            <InputWrapper error={errors.email?.message} label="Email">
              <Input
                {...register("email", { required: "Email is required" })}
                type="email"
              />
            </InputWrapper>
            <InputWrapper error={errors.password?.message} label="Password">
              <Input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
                type="password"
              />
            </InputWrapper>
            <Center mt="md">
              <Button type="submit" className={pmbClass}>
                Register
              </Button>
            </Center>

            <Center mt="sm">
              <Link href="/login">
                <Text className={classes.bottomText}>
                  I already have an account
                </Text>
              </Link>
            </Center>
          </Card>
        </Center>
      </form>
    </Container>
  );
};

export default Register;
