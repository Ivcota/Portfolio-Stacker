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
    <div className="p-5 my-1 rounded-lg shadow-xl bg-steel-800 w-80 ">
      <h1 className="mb-1 text-lg"> {project.title} </h1>
      <p className="mb-4 dark:text-steel-300"> {project.description} </p>
      <div className="flex justify-center gap-3">
        <a href={project.githubURL} className="px-3 py-1 rounded bg-steel-900 ">
          Source Code
        </a>
        {project.websiteURL && (
          <a
            href={project.websiteURL}
            className="px-3 py-1 rounded bg-steel-900 "
          >
            Live Application
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
