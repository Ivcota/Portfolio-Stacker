import "@fontsource/satisfy";
import {
  Avatar,
  Button,
  Center,
  Container,
  Image,
  Input,
  InputWrapper,
  Modal,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { NextPage } from "next";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BottomAppBar from "../components/BottomAppBar";
import CheckAuth from "../components/CheckAuth";
import Logo from "../components/Logo";
import ProjectCard from "../components/ProjectCard";
import ProjectCardHolder from "../components/ProjectCardHolder";
import { useUser } from "../hooks/authHooks";
import {
  namedOperations,
  useCreateProjectMutation,
  useUserProjectsQuery,
} from "../src/generated/graphql";
import { useButtonStyles } from "../styles/button";
import { baseURL } from "./../utils/url";

interface IForm {
  title: string;
  description: string;
  sourceCode: string;
  live: string;
}

const Dashboard: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();
  const [open, setOpen] = useState(false);
  const { pmbClass } = useButtonStyles();

  const [createProjectMutation, {}] = useCreateProjectMutation({
    refetchQueries: [
      namedOperations.Query.UserProjects,
      namedOperations.Query.Users,
    ],
  });

  const { user } = useUser();
  const { data, loading, error } = useUserProjectsQuery({
    variables: {
      where: { user: { id: { equals: user?.id } } },
      orderBy: {
        title: "asc" as any,
      },
    },
  });

  if (loading) {
    return (
      <Center>
        <Text>Loading...</Text>
      </Center>
    );
  }

  return (
    <CheckAuth>
      <Container>
        <Logo />
        <Stack mt={50} mb={50} align="center">
          <Avatar
            size={200}
            radius={100}
            src={baseURL + user?.profilePicture?.url}
          />
          <Text size="lg"> {user?.username} </Text>
        </Stack>
        <Center mb="lg">
          <Button className={pmbClass} onClick={() => setOpen(true)}>
            Add Project
          </Button>
        </Center>
        {/* @ts-ignore */}
        <ProjectCardHolder>
          {data?.projects?.map((project) => {
            // @ts-ignore
            return <ProjectCard key={project.id} project={project} />;
          })}
        </ProjectCardHolder>
      </Container>
      <Modal
        title="Create new Project"
        opened={open}
        onClose={() => setOpen(false)}
      >
        <form
          onSubmit={handleSubmit(
            async ({ title, description, live, sourceCode }) => {
              try {
                console.log("yes");
                const res = await createProjectMutation({
                  variables: {
                    data: {
                      user: {
                        connect: {
                          id: user?.id,
                        },
                      },
                      title,
                      description,
                      githubURL: sourceCode,
                      websiteURL: live,
                    },
                  },
                });

                setOpen(false);
                reset();

                showNotification({
                  title: "New Project Created",
                  message: "Project saved to database.",
                });
              } catch (error) {
                showNotification({
                  title: "Project Creation Error",
                  message: "Project has not been saved.",
                  color: "red",
                });
                alert(error);
              }
            }
          )}
        >
          <InputWrapper error={errors.title?.message} label="Title">
            <Input
              {...register("title", { required: "A title is required..." })}
            />
          </InputWrapper>

          <Textarea
            error={errors.description?.message}
            placeholder="Tell us about the project..."
            label="Description"
            {...register("description", {
              required: "Description is required...",
            })}
          />
          <InputWrapper
            error={
              errors.sourceCode?.message ? errors.sourceCode.message : null
            }
            label="Source Code URL"
          >
            <Input
              {...register("sourceCode", {
                required: "Source code is required...",
              })}
            />
          </InputWrapper>
          <InputWrapper label="Live Application URL">
            <Input {...register("live")} />
          </InputWrapper>
          <Button type="submit" className={pmbClass} mt="md">
            Create
          </Button>
        </form>
      </Modal>
      <BottomAppBar />
    </CheckAuth>
  );
};

export default Dashboard;
