import { createStyles } from "@mantine/core";
import React, { FC } from "react";

interface Props {
  children?: React.ReactNode;
}

const useStyles = createStyles((theme) => ({
  cardHolder: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: theme.spacing.xs,
    marginBottom: 100,
  },
}));

const ProjectCardHolder: FC<Props> = ({ children }) => {
  const { classes } = useStyles();

  return <div className={classes.cardHolder}>{children}</div>;
};

export default ProjectCardHolder;
