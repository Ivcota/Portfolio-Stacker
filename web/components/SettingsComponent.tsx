import {
  Button,
  Center,
  Container,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import { useButtonStyles } from "../styles/button";

const SettingsComponent = () => {
  const { toggleColorScheme } = useMantineColorScheme();
  const { pmbClass } = useButtonStyles();
  return (
    <Container>
      <Title align="center">Settings</Title>
      <Center mt="xl">
        <Button className={pmbClass}> Account Settings </Button>
      </Center>
      <Center mt="md">
        <Button className={pmbClass} onClick={() => toggleColorScheme()}>
          Switch Theme
        </Button>
      </Center>
    </Container>
  );
};

export default SettingsComponent;
