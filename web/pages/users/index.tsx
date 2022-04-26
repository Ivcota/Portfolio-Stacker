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

  const { data, loading } = useUsersQuery({ variables: { where: {} } });

  return (
    <>
      <Container>
        <Logo />
        <Center>
          <Title className={classes.heading} mt="sm" order={2}>
            Users
          </Title>
        </Center>
        {data?.users?.map((user) => {
          return (
            <div key={user.id}>
              {" "}
              {user.firstName} {user.lastName}{" "}
            </div>
          );
        })}
      </Container>
      <BottomAppBar />
    </>
  );
};

export default Index;
