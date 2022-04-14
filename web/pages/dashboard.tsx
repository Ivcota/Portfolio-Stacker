import { Container, Image, Stack, Text, Title } from "@mantine/core";
import { NextPage } from "next";
import React from "react";
import CheckAuth from "../components/CheckAuth";
import { useUser } from "../hooks/authHooks";
import { baseURL } from "./../utils/url";

const Dashboard: NextPage = () => {
  const { user } = useUser();

  return (
    <CheckAuth>
      <Container>
        <Title mt="lg" align="center">
          Portfolio Stacker
        </Title>
        <Stack mt={100} align="center">
          <Image
            width={180}
            radius={100}
            src={baseURL + user?.profilePicture?.url}
          />
          <Text size="lg"> {user?.username} </Text>
        </Stack>
      </Container>
    </CheckAuth>
  );
};

export default Dashboard;
