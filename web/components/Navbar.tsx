import {
  ActionIcon,
  Container,
  Group,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import { BsMoon, BsSunFill } from "react-icons/bs";

const Navbar = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <Container mt="sm">
      <Group position="right">
        <ActionIcon onClick={() => toggleColorScheme()} variant="hover">
          {colorScheme === "dark" ? (
            <BsSunFill size={20} />
          ) : (
            <BsMoon size={20} />
          )}
        </ActionIcon>
      </Group>
    </Container>
  );
};

export default Navbar;
