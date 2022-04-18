import { Container, createStyles, Drawer, Group, Title } from "@mantine/core";
import { AiFillHome, AiFillSetting, AiOutlineSearch } from "react-icons/ai";
import React, { useState } from "react";
import SettingsComponent from "./SettingsComponent";

const useStyles = createStyles((theme) => ({
  bottomNav: {
    paddingLeft: 35,
    paddingRight: 35,
    position: "fixed",
    bottom: 0,
    minWidth: "100vw",
    backgroundColor: theme.colors.dark[1],
    color: theme.colors.dark[9],
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
}));

const BottomAppBar = () => {
  const { classes } = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer position="right" opened={open} onClose={() => setOpen(false)}>
        <SettingsComponent />
      </Drawer>
      <Group position="apart" className={classes.bottomNav}>
        <AiFillHome size={25} /> <AiOutlineSearch size={25} />
        <AiFillSetting onClick={() => setOpen(true)} size={25} />
      </Group>
    </>
  );
};

export default BottomAppBar;
