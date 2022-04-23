import { Button, Card, createStyles, Group, Text } from "@mantine/core";
import React, { FC } from "react";
import { Project } from "../src/generated/graphql";

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
  },
  centerItem: {},
}));

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  const { classes } = useStyles();
  return (
    <Card mt="md" className={classes.card}>
      <div className={classes.centerItem}>
        <Text size="lg"> {project.title} </Text>
        <Text> {project.description} </Text>
        <Group position="apart" mt="md">
          <Button className={classes.button}>Source Code</Button>
          <Button className={classes.button}>Live Application</Button>
        </Group>
      </div>
    </Card>
  );
};

export default ProjectCard;
