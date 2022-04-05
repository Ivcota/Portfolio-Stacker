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
    <div>
      <h1> {project.title} </h1>
    </div>
  );
};

export default ProjectCard;
