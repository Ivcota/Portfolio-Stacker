import { Button, Card, createStyles, Group, Text } from "@mantine/core";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Project } from "../src/generated/graphql";
import { useButtonStyles } from "../styles/button";

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  const { classes } = useStyles();
  const { pmbClass } = useButtonStyles();
  const router = useRouter();

  return (
    <Card mt="md" className={classes.card}>
      <div className={classes.centerItem}>
        <Text size="lg"> {project.title} </Text>
        <Text> {project.description} </Text>
        <Group position="apart" mt="md">
          <a href={project.githubURL as string}>
            <Button className={classes.button}>Source Code</Button>
          </a>
          <a href={project.websiteURL as string}>
            <Button className={classes.button}>Live App</Button>
          </a>
        </Group>
      </div>
    </Card>
  );
};

const useStyles = createStyles((theme) => ({
  card: {
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.dark[2],
    boxShadow: theme.shadows.sm,
    width: "20rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.dark[2],
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.dark[9],
    ":focus": {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.dark[0],
    },
  },
  centerItem: {},
}));

export default ProjectCard;
