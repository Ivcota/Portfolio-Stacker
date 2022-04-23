import { createStyles, Drawer, Group } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillHome, AiFillSetting, AiOutlineSearch } from "react-icons/ai";
import SettingsComponent from "./SettingsComponent";

const useStyles = createStyles((theme) => ({
  bottomNav: {
    paddingLeft: 35,
    paddingRight: 35,
    position: "fixed",
    bottom: 0,
    minWidth: "100vw",
    backgroundColor: "white",
    color: theme.colors.dark[9],
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
}));

const BottomAppBar = () => {
  const { classes } = useStyles();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Drawer position="right" opened={open} onClose={() => setOpen(false)}>
        <SettingsComponent />
      </Drawer>
      <Group position="apart" className={classes.bottomNav}>
        <AiFillHome onClick={() => router.push("/dashboard")} size={25} />{" "}
        <AiOutlineSearch onClick={() => router.push("/users")} size={25} />
        <AiFillSetting onClick={() => setOpen(true)} size={25} />
      </Group>
    </>
  );
};

export default BottomAppBar;
