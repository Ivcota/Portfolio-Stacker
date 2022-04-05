import { NextPage } from "next";
import React from "react";
import { useUser } from "../../hooks/authHooks";
import { BACKEND_URL } from "./../../utils/url";
import styles from "../../styles/Dashboard.module.css";
import CheckAuth from "../../components/CheckAuth";

const Dashboard: NextPage = () => {
  const { user, isLoading, error } = useUser();

  return (
    <CheckAuth>
      <div>
        <h1>Dashboard {user?.firstName} </h1>

        <div className={styles["img-holder"]}>
          <img
            className={styles.img}
            src={BACKEND_URL + user?.profilePicture?.url}
          />
        </div>
      </div>
    </CheckAuth>
  );
};

export default Dashboard;
