import { NextPage } from "next";
import React from "react";
import CheckAuth from "../../components/CheckAuth";
import ProjectCard from "../../components/ProjectCard";
import { useUser } from "../../hooks/authHooks";
import styles from "../../styles/Dashboard.module.css";
import { useUserProjectsQuery } from "./../../src/generated/graphql";
import { BACKEND_URL } from "./../../utils/url";

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
      <div className="w-screen min-h-screen">
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
                <ProjectCard
                  key={project.id}
                  project={{
                    id: project.id,
                    title: project.title as string,
                    description: project.description as string,
                    githubURL: project.githubURL as string,
                    websiteURL: project.websiteURL as string | undefined,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </CheckAuth>
  );
};

export default Dashboard;
