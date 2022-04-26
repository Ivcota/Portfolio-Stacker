import {
  Center,
  Container,
  createStyles,
  Input,
  Stack,
  Title,
} from "@mantine/core";
import { NextPage } from "next";
import React from "react";
import BottomAppBar from "../../components/BottomAppBar";
import Logo from "../../components/Logo";
import UserItem from "../../components/UserItem";
import { useUsersQuery } from "../../src/generated/graphql";

/* 
This page will display all the users with pagination and search.
*/

const Index: NextPage = () => {
  const { classes } = myStyles();
  const { data, loading } = useUsersQuery({ variables: { where: {} } });

  return (
    <>
      <Container>
        <Logo />
        <Center>
          <Stack>
            <Title align="center" className={classes.heading} mt="sm" order={2}>
              Search Users
            </Title>
            <Input placeholder="Search Username" />
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
}));

export default Index;
