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

const useStyles = createStyles((theme) => ({
  base: {
    minHeight: "100vh",
    paddingBottom: theme.spacing.xl,
  },
  button: {
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.dark[9],
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.dark[0],
    width: "18rem",
    ":hover": {
      background:
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.dark[6],
    },
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const router = useRouter();

  return (
    <Container>
      <Stack className={classes.base} justify="center" align="center">
        <Title align="center">Portfolio Stacker</Title>
        <Text align="center">Quickly Get Your Work Seen.</Text>
        <Button
          onClick={() => router.push("/login")}
          className={classes.button}
        >
          Get Started
        </Button>
      </Stack>
    </Container>
  );
};

export default Home;
