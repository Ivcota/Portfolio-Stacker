import {
  Button,
  Center,
  Container,
  Group,
  Input,
  InputWrapper,
  Modal,
  Title,
} from "@mantine/core";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useEndUserSession, useUser } from "../hooks/authHooks";
import {
  namedOperations,
  useUpdateUserMutation,
} from "../src/generated/graphql";
import { useButtonStyles } from "../styles/button";

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  website: string;
  githubUrl: string;
}

const SettingsComponent = () => {
  const { endSession } = useEndUserSession();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { user, isLoading } = useUser();
  const [mutateUserFunction, { data, error, loading }] = useUpdateUserMutation({
    refetchQueries: [namedOperations.Query.User],
  });

  const { register, handleSubmit, setValue } = useForm<IForm>();

  useEffect(() => {
    if (!isLoading) {
      setValue("firstName", user?.firstName as string);
      setValue("lastName", user?.lastName as string);
      setValue("email", user?.email as string);
      setValue("githubUrl", user?.githubURL as string);
      setValue("website", user?.websiteURL as string);
    }
  }, [isLoading]);

  const { pmbClass } = useButtonStyles();
  return (
    <>
      <Container>
        <Title align="center">Settings</Title>
        <Center mt="xl">
          <Button onClick={() => setOpen(true)} className={pmbClass}>
            Account Settings
          </Button>
        </Center>
        <Center>
          <Button onClick={() => endSession()} mt="md" className={pmbClass}>
            Sign Out
          </Button>
        </Center>
      </Container>
      <Modal opened={open} onClose={() => setOpen(false)}>
        <form
          onSubmit={handleSubmit(
            async ({ firstName, lastName, email, website, githubUrl }) => {
              await mutateUserFunction({
                variables: {
                  where: {
                    id: user?.id,
                  },
                  data: {
                    email,
                    firstName,
                    lastName,
                    websiteURL: website,
                    githubURL: githubUrl,
                  },
                },
              });

              setOpen(false);

              /* 
            For now, we'll reload after the update is made to force a refetch. However, I might migrate to something like ApolloClient and see if I can get refetch working better.
            */
            }
          )}
        >
          <Title>Account Settings</Title>
          <InputWrapper mt="lg" label="First Name">
            <Input {...register("firstName")} />
          </InputWrapper>
          <InputWrapper label="Last Name">
            <Input {...register("lastName")} />
          </InputWrapper>
          <InputWrapper label="Email">
            <Input {...register("email")} />
          </InputWrapper>
          <InputWrapper label="Website">
            <Input {...register("website")} />
          </InputWrapper>
          <InputWrapper label="Github Profile">
            <Input {...register("githubUrl")} />
          </InputWrapper>
          <Group mt="md">
            <Button type="submit" color="green">
              Save
            </Button>
            <Button onClick={() => setOpen(false)} color="red">
              Cancel
            </Button>
          </Group>
        </form>
      </Modal>
    </>
  );
};

export default SettingsComponent;
