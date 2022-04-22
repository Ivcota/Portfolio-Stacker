import {
  Button,
  Center,
  Container,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import { useEndUserSession } from "../hooks/authHooks";
import { useButtonStyles } from "../styles/button";

const SettingsComponent = () => {
  const { endSession } = useEndUserSession();

  const { pmbClass } = useButtonStyles();
  return (
    <Container>
      <Title align="center">Settings</Title>
      <Center mt="xl">
        <Button className={pmbClass}> Account Settings </Button>
      </Center>
      <Center>
        <Button onClick={() => endSession()} mt="md" className={pmbClass}>
          Sign Out
        </Button>
      </Center>
    </Container>
  );
};

export default SettingsComponent;
