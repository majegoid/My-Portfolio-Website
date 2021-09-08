import React from 'react';

import { project, image, tech, links } from './Project.module.css';

const Project = () => {
  return (
    <div className={project}>
      <h2>Project Title</h2>
      <div className={image}>Project Image</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
      <ul className={links}>
        <li>Visit</li>
        <li>Source Code</li>
      </ul>
      <ul className={tech}>
        <li>React</li>
        <li>CSS Modules</li>
        <li>Next.js</li>
      </ul>
    </div>
  );
};

export default Project;
