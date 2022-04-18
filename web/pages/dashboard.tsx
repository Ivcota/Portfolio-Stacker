import {
  Button,
  Center,
  Container,
  createStyles,
  Image,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import BottomAppBar from "../components/BottomAppBar";
import CheckAuth from "../components/CheckAuth";
import ProjectCard from "../components/ProjectCard";
import { useUser } from "../hooks/authHooks";
import {
  useEndSessionMutation,
  useUserProjectsQuery,
} from "../src/generated/graphql";
import { baseURL } from "./../utils/url";

const myStyles = createStyles((theme) => ({
  cardHolder: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: theme.spacing.xs,
    marginBottom: theme.spacing.xl,
  },
}));

const Dashboard: NextPage = () => {
  const { user } = useUser();
  const { toggleColorScheme } = useMantineColorScheme();

  const [result, endSession] = useEndSessionMutation();
  const router = useRouter();

  const { classes } = myStyles();
  const [projects] = useUserProjectsQuery({
    variables: {
      where: {
        user: { id: { equals: user?.id } },
      },
    },
  });

  return (
    <CheckAuth>
      <Container>
        <Center mt="md">
          <Button
            onClick={async () => {
              await endSession();
              router.push("/login");
            }}
          >
            Sign Out
          </Button>
        </Center>
        <Center mt="md">
          <Button onClick={() => toggleColorScheme()}>Change Theme</Button>
        </Center>
        <Title mt="" align="center">
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
        <div className={classes.cardHolder}>
          {projects.data?.projects?.map((project) => {
            // @ts-expect-error
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </Container>
      <BottomAppBar />
    </CheckAuth>
  );
};

export default Dashboard;
