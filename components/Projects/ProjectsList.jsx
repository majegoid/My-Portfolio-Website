import React from 'react';

import { Project } from './Project';

export const ProjectsList = ({ projectsDataList, projectFilters }) => {
  // the projects shown must have every tag in the project filters array
  const projectsJsx = projectsDataList
    .filter((pd) => {
      for (const projectFilter of projectFilters) {
        if (pd.tags.includes(projectFilter)) {
          continue;
        }
        return false;
      }
      return true;
    })
    .map((pd, index) => (
      <Project key={pd.title} projectIndex={index} projectData={pd} />
    ));

  return <div className='project-list'>{projectsJsx}</div>;
};
