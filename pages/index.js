import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Image from 'next/image';

import Hero from '../components/Hero/Hero';
import Project from '../components/Projects/Project/Project';
import ProjectsList from '../components/Projects/ProjectsList/ProjectsList';

import { container } from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={container}>
      <Hero />
      <ProjectsList>
        <Project
          title={`My Portfolio Website`}
          description={`The first project on my portfolio is this website. It's the first project I have made using the Next.js framework.`}
          linkContent={[
            {
              href: 'https://fervent-roentgen-350d5d.netlify.app/',
              icon: 'globe',
              text: 'Visit',
            },
            {
              href: 'https://github.com/walsworthdrew96/My-Portfolio-Website',
              icon: ['fab', 'github'],
              text: 'Source Code',
            },
          ]}
          techContent={[
            {
              icon: ['fab', 'react'],
              text: 'React',
            },
            {
              icon: ['fab', 'css3'],
              text: 'CSS Modules',
            },
            {
              icon: null,
              text: 'Next.js',
            },
          ]}
        />
        <Project
          title={``}
          description={``}
          linkContent={[
            {
              href: '#',
              icon: 'globe',
              text: 'Visit',
            },
            {
              href: '#',
              icon: ['fab', 'github'],
              text: 'Source Code',
            },
          ]}
          techContent={[
            {
              icon: ['fab', 'react'],
              text: 'React',
            },
            {
              icon: ['fab', 'css3'],
              text: 'CSS Modules',
            },
            {
              icon: null,
              text: 'Next.js',
            },
          ]}
        />
        <Project
          title={``}
          description={``}
          linkContent={[
            {
              href: '#',
              icon: 'globe',
              text: 'Visit',
            },
            {
              href: '#',
              icon: ['fab', 'github'],
              text: 'Source Code',
            },
          ]}
          techContent={[
            {
              icon: ['fab', 'react'],
              text: 'React',
            },
            {
              icon: ['fab', 'css3'],
              text: 'CSS Modules',
            },
            {
              icon: null,
              text: 'Next.js',
            },
          ]}
        />
        <Project
          title={``}
          description={``}
          linkContent={[
            {
              href: '#',
              icon: 'globe',
              text: 'Visit',
            },
            {
              href: '#',
              icon: ['fab', 'github'],
              text: 'Source Code',
            },
          ]}
          techContent={[
            {
              icon: ['fab', 'react'],
              text: 'React',
            },
            {
              icon: ['fab', 'css3'],
              text: 'CSS Modules',
            },
            {
              icon: null,
              text: 'Next.js',
            },
          ]}
        />
        <Project
          title={``}
          description={``}
          linkContent={[
            {
              href: '#',
              icon: 'globe',
              text: 'Visit',
            },
            {
              href: '#',
              icon: ['fab', 'github'],
              text: 'Source Code',
            },
          ]}
          techContent={[
            {
              icon: ['fab', 'react'],
              text: 'React',
            },
            {
              icon: ['fab', 'css3'],
              text: 'CSS Modules',
            },
            {
              icon: null,
              text: 'Next.js',
            },
          ]}
        />
        <Project
          title={``}
          description={``}
          linkContent={[
            {
              href: '#',
              icon: 'globe',
              text: 'Visit',
            },
            {
              href: '#',
              icon: ['fab', 'github'],
              text: 'Source Code',
            },
          ]}
          techContent={[
            {
              icon: ['fab', 'react'],
              text: 'React',
            },
            {
              icon: ['fab', 'css3'],
              text: 'CSS Modules',
            },
            {
              icon: null,
              text: 'Next.js',
            },
          ]}
        />
      </ProjectsList>
      {/* <div>odds and ends</div> */}
    </div>
  );
}
