import { createStyles, Group } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  bottomNav: {
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
    position: "fixed",
    bottom: 0,
    minWidth: "100vw",
    backgroundColor: theme.colors.dark[1],
    color: theme.colors.dark[9],
  },
}));

const BottomAppBar = () => {
  const { classes } = useStyles();

  return (
    <Group position="apart" className={classes.bottomNav}>
      <p>1</p> <p>2</p> <p>3</p>
    </Group>
  );
};

export default BottomAppBar;
