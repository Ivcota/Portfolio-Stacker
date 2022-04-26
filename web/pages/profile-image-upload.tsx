import { Button, Center, Container, Input, Title } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../hooks/authHooks";
import {
  namedOperations,
  useUpdateUserMutation,
} from "../src/generated/graphql";
import { useButtonStyles } from "../styles/button";

interface IForm {
  file: File[];
}

const ProfileImageUpload = () => {
  const styles = useButtonStyles();
  const [files, setFiles] = useState(null);
  const { user } = useUser();

  const router = useRouter();

  const [updateUserMutation, {}] = useUpdateUserMutation({
    refetchQueries: [namedOperations.Query.User],
  });

  console.log(user);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IForm>();

  return (
    <Container>
      <form
        onSubmit={handleSubmit(async ({ file }) => {
          console.log(file[0]);

          try {
            const res = await updateUserMutation({
              variables: {
                where: {
                  id: user?.id,
                },
                data: {
                  profilePicture: {
                    upload: file[0],
                  },
                },
              },
            });

            router.push("/dashboard");
          } catch (error) {
            console.log(error);
          }
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
