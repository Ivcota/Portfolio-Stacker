import {
  Center,
  Container,
  createStyles,
  Input,
  Stack,
  Title,
} from "@mantine/core";
import { GetServerSideProps, NextPage } from "next";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BottomAppBar from "../../components/BottomAppBar";
import Logo from "../../components/Logo";
import UserItem from "../../components/UserItem";
import { useUsersQuery } from "../../src/generated/graphql";

/* 
This page will display all the users with pagination and search.
*/

interface IForm {
  username: string;
}

const Index: NextPage = () => {
  const [username, setUsername] = useState("");

  const { classes } = myStyles();
  const { data, loading } = useUsersQuery({
    variables: {
      where: {
        username: {
          contains: `${username}`,
        },
      },
    },
  });

  return (
    <>
      <Container>
        <Logo />
        <Center>
          <Stack>
            <Title align="center" className={classes.heading} mt="sm" order={2}>
              Search Users
            </Title>
            <Input
              className={classes.input}
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
              placeholder="Search Username"
            />
          </Stack>
        </Center>
        <Stack mt="xl" align="center">
          {data?.users?.map((user) => {
            // @ts-ignore
            return <UserItem key={user.id} user={user} />;
          })}
        </Stack>
      </Container>
      <BottomAppBar />
    </>
  );
};

const myStyles = createStyles((theme) => ({
  heading: {
    fontWeight: "normal",
  },
  userHolder: {
    display: "flex",
  },
  input: {
    width: "14rem",
  },
}));

export default Index;
