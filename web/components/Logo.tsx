import { createStyles, Title } from "@mantine/core";
import React from "react";

const useStyles = createStyles({
  logo: {
    fontFamily: "Satisfy",
    fontWeight: "lighter",
  },
});

const Logo: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Title align="center" className={classes.logo}>
      Portfolio Stacker
    </Title>
  );
};

export default Logo;
