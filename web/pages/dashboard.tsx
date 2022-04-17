import {
  Container,
  createStyles,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { NextPage } from "next";
import React from "react";
import CheckAuth from "../components/CheckAuth";
import ProjectCard from "../components/ProjectCard";
import { useUser } from "../hooks/authHooks";
import { baseURL } from "./../utils/url";

const myStyles = createStyles((theme) => ({
  cardHolder: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: theme.spacing.xs,
  },
}));

const Dashboard: NextPage = () => {
  const { user } = useUser();

  const { classes } = myStyles();

  return (
    <CheckAuth>
      <Container>
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
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </Container>
    </CheckAuth>
  );
};

export default Dashboard;
