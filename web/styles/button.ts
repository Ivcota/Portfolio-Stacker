import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  button: {
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.dark[9],
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.dark[0],
    ":hover": {
      background:
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.dark[6],
    },
  },
}));

export const useButtonStyles = () => {
  const { classes } = useStyles();

  return {
    pmbClass: classes.button,
  };
};
