import Head from 'next/head';
import Image from 'next/image';

import Hero from '../components/Hero/Hero';
import ProjectsList from '../components/Projects/ProjectsList/ProjectsList';

import { container } from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={container}>
      <Hero />
      <ProjectsList />
      <div>odds and ends</div>
    </div>
  );
}
