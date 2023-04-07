import { useState } from 'react';
import { ProjectFilters } from '../components/Projects/ProjectFilters';
import { ProjectsList } from '../components/Projects/ProjectsList';
import { projectsDataList } from '../data/projectsDataList';

export default function Home() {
  const [projectFilters, setProjectFilters] = useState([]);

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
    <>
      <h1>Projects</h1>
      <ProjectFilters
        toggleProjectFilter={toggleProjectFilter}
        findProjectFilter={findProjectFilter}
      />
      <ProjectsList
        projectsDataList={projectsDataList}
        projectFilters={projectFilters}
      />
    </>
  );
}
