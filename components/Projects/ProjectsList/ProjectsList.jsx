import React from 'react';
import Project from '../Project/Project';

import { container } from './ProjectsList.module.css';

const ProjectsList = () => {
  return (
    <div className={container}>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
};

export default ProjectsList;
