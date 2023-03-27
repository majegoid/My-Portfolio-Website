import { useState } from 'react';
import { ProjectFilters } from '../components/ProjectFilters/ProjectFilters';
import ProjectsList from '../components/Projects/ProjectsList/ProjectsList';

import { projectsDataList } from '../data/projectsDataList';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [projectFilters, setProjectFilters] = useState([]);

  console.log(projectFilters);

  // State Management
  const toggleProjectFilter = (projectFilterToToggle) => {
    const foundProjectFilter = projectFilters.find(
      (pf) => pf === projectFilterToToggle
    );
    if (foundProjectFilter) {
      setProjectFilters((state) => [
        ...projectFilters.filter((pf) => pf !== projectFilterToToggle),
      ]);
      return;
    }
    setProjectFilters((state) => [...projectFilters, projectFilterToToggle]);
  };

  const findProjectFilter = (projectFilterToFind) => {
    return projectFilters.find((pf) => pf === projectFilterToFind);
  };

  return (
    <div className={styles.container}>
      {/* <Hero /> */}
      <ProjectFilters
        toggleProjectFilter={toggleProjectFilter}
        findProjectFilter={findProjectFilter}
      />
      <ProjectsList
        projectsDataList={projectsDataList}
        projectFilters={projectFilters}
      />
    </div>
  );
}
