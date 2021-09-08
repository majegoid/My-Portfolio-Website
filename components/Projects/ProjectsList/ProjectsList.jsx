import React, { useState } from 'react';
import Project from '../Project/Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { container, projectList, viewButton } from './ProjectsList.module.css';

const ProjectsList = ({ children }) => {
  const [areMainProjectsVisible, setAreMainProjectsVisible] = useState(true);

  const toggleMainProjectsVisible = () => {
    setAreMainProjectsVisible((curState) => !curState);
  };

  const toggleMainProjectsButton = (
    <button className={viewButton} onClick={toggleMainProjectsVisible}>
      <span>{areMainProjectsVisible ? 'Hide Main Projects' : 'View Main Projects'}</span>
      <FontAwesomeIcon icon={areMainProjectsVisible ? 'eye-slash' : 'eye'} />
    </button>
  );

  return (
    <div className={container}>
      {toggleMainProjectsButton}
      {areMainProjectsVisible && <div className={projectList}>{children}</div>}
      {areMainProjectsVisible && toggleMainProjectsButton}
    </div>
  );
};

export default ProjectsList;
