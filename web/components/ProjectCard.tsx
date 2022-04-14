import { Button, Card, createStyles, Group, Text } from "@mantine/core";
import React from "react";

// interface Props {
//   title: string;

// }

const useStyles = createStyles((theme) => ({
  card: {
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.dark[2],
    boxShadow: theme.shadows.sm,
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
}));

const ProjectCard = () => {
  const { classes } = useStyles();
  return (
    <Card mt="md" className={classes.card}>
      <Text size="lg">Project Title</Text>
      <Text>Project Description</Text>
      <Group position="apart" mt="md">
        <Button className={classes.button}>Source Code</Button>
        <Button className={classes.button}>Live Application</Button>
      </Group>
    </Card>
  );
};

export default ProjectCard;
