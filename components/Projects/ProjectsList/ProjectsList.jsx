import React from 'react';

import Project from '../Project/Project';
import { projectList } from './ProjectsList.module.css';

const ProjectsList = ({ projectsDataList, projectFilters }) => {
  // the projects shown must have every tag in the project filters array
  const projectsJsx = projectsDataList
    .filter((pd) => {
      for (const projectFilter of projectFilters) {
        console.log(pd.tags);
        console.log(projectFilter)
        if (pd.tags.includes(projectFilter)) {
          continue;
        }
        return false;
      }
      return true;
    })
    .map((pd) => <Project key={pd.title} projectData={pd} />);

  return <div className={projectList}>{projectsJsx}</div>;
};

export default ProjectsList;
