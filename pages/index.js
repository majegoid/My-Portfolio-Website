import Hero from '../components/Hero/Hero';
import ProjectsList from '../components/Projects/ProjectsList/ProjectsList';

import { projectsDataList } from '../data/projectsDataList';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <ProjectsList projectsDataList={projectsDataList} />
    </div>
  );
}
