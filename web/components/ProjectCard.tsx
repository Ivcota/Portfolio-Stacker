import React, { FC } from "react";

interface Props {
  project: {
    id: string;
    title: string;
    description: string;
    githubURL: string;
    websiteURL?: string | undefined;
  };
}

const ProjectCard: FC<Props> = (props) => {
  const { project } = props;

  return (
    <div className="w-5/6 p-5 my-1 rounded-lg shadow-xl bg-steel-800">
      <h1 className="mb-1 text-lg"> {project.title} </h1>
      <p className="mb-4 dark:text-steel-300"> {project.description} </p>
      <div className="flex justify-center gap-3">
        <button className="px-3 py-1 rounded bg-steel-900 ">Source Code</button>
        <button className="px-3 py-1 rounded bg-steel-900 ">
          Live Application
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
