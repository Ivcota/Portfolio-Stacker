import { Avatar, Center, Text, Title } from "@mantine/core";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import BottomAppBar from "../../components/BottomAppBar";
import Logo from "../../components/Logo";
import {
  useGetSingleUserQuery,
  User,
  useUserQuery,
} from "../../src/generated/graphql";
import { baseURL } from "../../utils/url";

/* 
This page will display a single user account just like the dashboard.

The goal is to have this page render SSR. However, we'll just fill the data with normal JSON data fetching for now.
*/

interface Props {
  user: User;
}

const UserPage: NextPage<Props> = () => {
  const router = useRouter();
  const { data } = useGetSingleUserQuery({
    variables: {
      where: {
        id: router.query.id as string,
      },
    },
  });
  useEffect(() => {
    console.log(router.query.id);
  }, []);

  return (
    <div>
      <Center>
        <Logo />
      </Center>
      <Center mt="lg">
        <Avatar
          size={200}
          radius={100}
          src={baseURL + data?.user?.profilePicture?.url}
        />
      </Center>
      <Center mt="xs">
        <Title order={5}> {data?.user?.username} </Title>
      </Center>
      <BottomAppBar />
    </div>
  );
};

export default UserPage;
