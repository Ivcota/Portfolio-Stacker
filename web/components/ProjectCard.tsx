import { Button, Card, createStyles, Group, Modal, Text } from "@mantine/core";
import { useModals } from "@mantine/modals";
import React, { FC, useState } from "react";
import {
  namedOperations,
  Project,
  useDeleteProjectMutation,
} from "../src/generated/graphql";

interface Props {
  project: Project;
}

/* 
TODO: Create a Modal that allows edits to be made on the project.
*/

const ProjectCard: FC<Props> = ({ project }) => {
  const [deleteProjectMutation, { loading }] = useDeleteProjectMutation({
    refetchQueries: [namedOperations.Query.UserProjects],
  });

  const modals = useModals();
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const deleteProjectModal = () =>
    modals.openConfirmModal({
      title: `Delete ${project.title}?`,
      children: <Text>Are you sure you want to delete this project?</Text>,
      labels: { confirm: "Delete", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: async () => {
        await deleteProjectMutation({
          variables: {
            where: {
              id: project.id,
            },
          },
        });
      },
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
            <Button onClick={deleteProjectModal} color="red">
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

export default ProjectCard;
