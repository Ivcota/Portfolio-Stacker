import { NextPage } from "next";
import React from "react";
import { useUser } from "../../hooks/authHooks";
import { BACKEND_URL } from "./../../utils/url";
import styles from "../../styles/Dashboard.module.css";
import CheckAuth from "../../components/CheckAuth";
import { useUserProjectsQuery } from "./../../src/generated/graphql";

const Dashboard: NextPage = () => {
  const { user, isLoading, error } = useUser();

  const [userProjects] = useUserProjectsQuery({
    variables: {
      where: {
        user: {
          id: {
            equals: user?.id,
          },
        },
      },
    },
  });

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
        <div>
          <h1>Projects</h1>
          <div>
            {userProjects.data?.projects?.map((project) => {
              return (
                <div key={project.id}>
                  <h2> {project.title} </h2>
                  <p> {project.description} </p>
                  <div>
                    <button>Source Code</button>
                    <button>Live</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </CheckAuth>
  );
};

export default Dashboard;
