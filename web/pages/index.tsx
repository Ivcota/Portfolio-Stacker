import {
  Center,
  Container,
  Title,
  Text,
  Button,
  Stack,
  createStyles,
} from "@mantine/core";
import type { NextPage } from "next";

const useStyles = createStyles((theme) => ({
  base: {
    minHeight: "100vh",
    paddingBottom: theme.spacing.xl,
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
    <Container>
      <Stack className={classes.base} justify="center" align="center">
        <Title align="center">Portfolio Stacker</Title>
        <Text align="center">Quickly Get Your Work Seen.</Text>
        <Button color="white">Get Started</Button>
      </Stack>
    </Container>
  );
};

export default Home;
