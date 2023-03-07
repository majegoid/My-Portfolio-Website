import React from 'react';

import { projectList } from './ProjectsList.module.css';

const ProjectsList = ({ children }) => {
  return <div className={projectList}>{children}</div>;
};

export default ProjectsList;
