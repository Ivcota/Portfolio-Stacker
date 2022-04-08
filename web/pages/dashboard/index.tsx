import { NextPage } from "next";
import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import CheckAuth from "../../components/CheckAuth";
import ProjectCard from "../../components/ProjectCard";
import { useLogout } from "../../helpers/logout";
import { useUser } from "../../hooks/authHooks";
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

  const { logout } = useLogout();

  return (
    <CheckAuth>
      <div className="flex flex-col items-center w-screen min-h-screen">
        <button
          className="p-1 m-1 rounded dark:bg-white dark:text-black"
          onClick={logout}
        >
          End Session
        </button>
        <h1 className="mt-2 text-3xl font-logo">Portfolio Stacker</h1>
        <div className="w-40 mt-16 ">
          <img
            className="w-full rounded-full"
            src={BACKEND_URL + user?.profilePicture?.url}
          />
        </div>
        <h1 className="mt-2 text-xl"> {user?.username} </h1>
        <div>
          <div className="flex flex-col items-center gap-3 mt-8 mb-20 md:flex-wrap md:flex-row md:justify-center md:items-start ">
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
        <BottomNavbar />
      </div>
    </CheckAuth>
  );
};

export default Dashboard;
