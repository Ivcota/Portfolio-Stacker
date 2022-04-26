import {
  Button,
  Card,
  createStyles,
  Group,
  Input,
  InputWrapper,
  Modal,
  Text,
  Textarea,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  namedOperations,
  Project,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} from "../src/generated/graphql";
import { useButtonStyles } from "../styles/button";
import { showNotification } from "@mantine/notifications";

interface Props {
  project: Project;
}

/* 
TODO: Create a Modal that allows edits to be made on the project.
*/

interface IForm {
  title: string;
  description: string;
  sourceCodeURL: string;
  liveAppURL: string;
}

const ProjectCard: FC<Props> = ({ project }) => {
  const [deleteProjectMutation, { loading }] = useDeleteProjectMutation({
    refetchQueries: [namedOperations.Query.UserProjects],
  });

  const [updateProjectMutation] = useUpdateProjectMutation({
    refetchQueries: [namedOperations.Query.UserProjects],
  });

  const modals = useModals();
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  useEffect(() => {
    setValue("title", project.title as string);
    setValue("description", project.description as string);
    setValue("sourceCodeURL", project.githubURL as string);
    setValue("liveAppURL", project.websiteURL as string);
  }, []);

  const handleEditClick = () => {
    setOpened(true);
  };

  const { pmbClass } = useButtonStyles();

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
            <Button onClick={handleEditClick} className={classes.button}>
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
        title={`Edit Project: ${project.title}`}
      >
        <form
          onSubmit={handleSubmit(
            async ({ title, description, liveAppURL, sourceCodeURL }) => {
              const res = await updateProjectMutation({
                variables: {
                  where: {
                    id: project.id,
                  },
                  data: {
                    title,
                    description,
                    githubURL: sourceCodeURL,
                    websiteURL: liveAppURL,
                  },
                },
              });

              setOpened(false);

              showNotification({
                title: "Project Saved",
                message: `${title} has been saved.`,
              });
            }
          )}
        >
          <InputWrapper label="Title" description="Title of your project">
            <Input {...register("title")} />
          </InputWrapper>
          <InputWrapper
            label="Description"
            description="Your project description"
          >
            <Textarea {...register("description")} />
          </InputWrapper>
          <InputWrapper
            label="Source Code"
            description="Link to your github repo"
          >
            <Input {...register("sourceCodeURL")} />
          </InputWrapper>
          <InputWrapper
            label="Live Application URL"
            description="Link to see your live application"
          >
            <Input {...register("liveAppURL")} />
          </InputWrapper>
          <Button type="submit" className={pmbClass} mt="md">
            Save
          </Button>
        </form>
      </Modal>
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
