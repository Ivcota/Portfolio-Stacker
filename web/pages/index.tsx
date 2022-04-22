import {
  Center,
  Container,
  Title,
  Text,
  Button,
  Stack,
  createStyles,
  useMantineColorScheme,
} from "@mantine/core";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useButtonStyles } from "../styles/button";

const useStyles = createStyles((theme) => ({
  base: {
    minHeight: "90vh",
    paddingBottom: theme.spacing.xl,
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const { pmbClass } = useButtonStyles();

  return (
    <Container>
      <Stack className={classes.base} justify="center" align="center">
        <Title align="center">Portfolio Stacker</Title>
        <Text align="center">Quickly Get Your Work Seen.</Text>
        <Button
          px={70}
          className={pmbClass}
          onClick={() => router.push("/login")}
        >
          Get Started
        </Button>
      </Stack>
    </Container>
  );
};

export default Home;
