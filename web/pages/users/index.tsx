import { Center, Container, createStyles, Title } from "@mantine/core";
import { NextPage } from "next";
import React from "react";
import BottomAppBar from "../../components/BottomAppBar";
import Logo from "../../components/Logo";
import { useUsersQuery } from "../../src/generated/graphql";

/* 
This page will display all the users with pagination and search.
*/

const myStyles = createStyles((theme) => ({
  heading: {
    fontWeight: "normal",
  },
}));

const Index: NextPage = () => {
  const { classes } = myStyles();

  const [users] = useUsersQuery({
    variables: {
      where: {},
    },
  });

  return (
    <>
      <Container>
        <Logo />
        <Center>
          <Title className={classes.heading} mt="sm" order={2}>
            Users
          </Title>
        </Center>
        {users.data?.users?.map((user) => {
          return <div key={user.id}> {user.firstName} </div>;
        })}
      </Container>
      <BottomAppBar />
    </>
  );
};

export default Index;
