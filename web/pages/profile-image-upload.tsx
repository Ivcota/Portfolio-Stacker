import { Button, Center, Container, Input, Title } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../hooks/authHooks";
import { useUpdateUserMutation } from "../src/generated/graphql";
import { useButtonStyles } from "../styles/button";

interface IForm {
  file: File[];
}

const ProfileImageUpload = () => {
  const styles = useButtonStyles();
  const [files, setFiles] = useState(null);
  const { user } = useUser();

  const router = useRouter();

  const [updateUserResult, updateUserMutate] = useUpdateUserMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IForm>();

  return (
    <Container>
      <form
        onSubmit={handleSubmit(async ({ file }) => {
          try {
            const res = await updateUserMutate({
              where: {
                id: user?.id,
              },
              data: {
                profilePicture: {
                  upload: file[0],
                },
              },
            });

            router.push("/dashboard");
          } catch (error) {}
        })}
      >
        <Center mt="lg">
          <Title> Profile Image Upload </Title>
        </Center>
        <Center mt="lg">
          <Input {...register("file")} type="file" />
        </Center>
        <Center mt="lg">
          <Button type="submit" className={styles.pmbClass}>
            Upload
          </Button>
        </Center>
      </form>
    </Container>
  );
};

export default ProfileImageUpload;
