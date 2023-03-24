import React from 'react';

import Project from '../Project/Project';
import { projectList } from './ProjectsList.module.css';

const ProjectsList = ({ projectsDataList }) => {
  return (
    <div className={projectList}>
      {projectsDataList.map((projectData) => (
        <Project key={projectData.title} projectData={projectData} />
      ))}
    </div>
  );
};

export default ProjectsList;
