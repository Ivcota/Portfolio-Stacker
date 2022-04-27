import { Avatar, createStyles, Group, Text } from "@mantine/core";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { User } from "../src/generated/graphql";
import { baseURL } from "../utils/url";

interface Props {
  user: User;
}

const UserItem: FC<Props> = ({ user }) => {
  const { classes } = myStyles();
  const router = useRouter();

  return (
    <Group
      mt="xs"
      onClick={() => router.push("/users/" + user.id)}
      className={classes.userItem}
      position="apart"
      style={{
        width: "13rem",
      }}
    >
      <Avatar radius="xl" src={baseURL + user.profilePicture?.url} />
      <Text>{user.username}</Text>
    </Group>
  );
};

const myStyles = createStyles((theme) => ({
  userItem: {
    ":hover": {
      cursor: "pointer",
    },
  },
}));

export default UserItem;
