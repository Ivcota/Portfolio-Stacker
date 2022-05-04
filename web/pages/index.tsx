import {
  Center,
  Container,
  Title,
  Text,
  Button,
  Stack,
  createStyles,
  useMantineColorScheme,
  Group,
  SimpleGrid,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useButtonStyles } from "../styles/button";

const useStyles = createStyles((theme) => ({
  base: {
    minHeight: "90vh",
    paddingBottom: theme.spacing.xl,
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
  largeBase: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
  title: {
    fontSize: 64,
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const { pmbClass } = useButtonStyles();

  return (
    <Container size="xl">
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

      <SimpleGrid px="lg" mt={150} className={classes.largeBase} cols={2}>
        <Group>
          <Title className={classes.title}>
            Hosting Your Portfolio Made Easy
          </Title>
          <Text>
            Really, we’re just trying to save you as much time as possible. When
            things are too complicated, it causes you to delay. Instead of
            trying to go against the grain, post your portfolio with us.
          </Text>
          <Button onClick={() => router.push("/login")} className={pmbClass}>
            Start
          </Button>
        </Group>
      </SimpleGrid>
    </Container>
  );
};

export default Home;
