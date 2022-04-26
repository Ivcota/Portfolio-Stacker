import "@fontsource/satisfy";
import { Container, Image, Stack, Text } from "@mantine/core";
import { NextPage } from "next";
import React from "react";
import BottomAppBar from "../components/BottomAppBar";
import CheckAuth from "../components/CheckAuth";
import Logo from "../components/Logo";
import ProjectCard from "../components/ProjectCard";
import ProjectCardHolder from "../components/ProjectCardHolder";
import { useUser } from "../hooks/authHooks";
import { useUserProjectsQuery } from "../src/generated/graphql";
import { baseURL } from "./../utils/url";

const Dashboard: NextPage = () => {
  const { user } = useUser();

  const { data, loading, error } = useUserProjectsQuery({
    variables: { where: { user: { id: { equals: user?.id } } } },
  });

  console.log(data);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <CheckAuth>
      <Container>
        <Logo />
        <Stack mt={50} mb={50} align="center">
          <Image
            width={180}
            radius={100}
            src={baseURL + user?.profilePicture?.url}
          />
          <Text size="lg"> {user?.username} </Text>
        </Stack>
        <ProjectCardHolder>
          {data?.projects?.map((project) => {
            // @ts-ignore
            return <ProjectCard key={project.id} project={project} />;
          })}
        </ProjectCardHolder>
      </Container>
      <BottomAppBar />
    </CheckAuth>
  );
};

export default Dashboard;
