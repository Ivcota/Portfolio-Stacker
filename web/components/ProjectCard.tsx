import {
  Button,
  Card,
  createStyles,
  Group,
  Modal,
  Text,
  Title,
} from "@mantine/core";
import React, { FC, useState } from "react";
import { useModals } from "@mantine/modals";
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
  const [opened, setOpened] = useState(false);

  const modals = useModals();

  const deleteProjectModal = () =>
    modals.openConfirmModal({
      title: `Delete ${project.title}?`,
      children: <Text>Are you sure you want to delete this project?</Text>,
      labels: { confirm: "Confirm", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
      confirmProps: {
        color: "red",
      },
      cancelProps: {},
    });

  return (
    <>
      <Card mt="md" className={classes.card}>
        <div className={classes.centerItem}>
          <Text size="lg"> {project.title} </Text>
          <Text> {project.description} </Text>
          <Group position="apart" mt="md">
            <Button onClick={() => setOpened(true)} className={classes.button}>
              Edit Project
            </Button>
            <Button onClick={deleteProjectModal} className={classes.button}>
              Delete Project
            </Button>
          </Group>
        </div>
      </Card>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Edit Project"
      ></Modal>
    </>
  );
};

export default ProjectCard;
