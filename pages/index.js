import Hero from '../components/Hero/Hero';
import Project from '../components/Projects/Project/Project';
import ProjectsList from '../components/Projects/ProjectsList/ProjectsList';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <ProjectsList>
        <Project
          title={`Destiny.gg Remake`}
          description={`My remake of the site of popular Politics Livestreamer Destiny. This site involves downloading and serving up JSON and Image files from 4 different popular APIs, namely YouTube, Twitch, Reddit, and Lastfm.`}
          linkContent={[
            {
              href: 'https://condescending-lovelace-7b872a.netlify.app/',
              icon: 'globe',
              text: 'Visit My Version',
            },
            {
              href: 'https://www.destiny.gg/',
              icon: 'globe',
              text: 'Visit The Original Site',
            },
            {
              href: 'https://github.com/walsworthdrew96/DGG-Remake',
              icon: ['fab', 'github'],
              text: 'Source Code',
            },
          ]}
          techContent={[
            {
              icon: ['fab', 'css3'],
              text: 'CSS Modules',
            },
            {
              icon: ['fab', 'js'],
              text: 'JS',
            },
            {
              icon: ['fab', 'react'],
              text: 'React',
            },
            {
              icon: ['fab', 'react'],
              // icon: '/next-js.svg',
              text: 'Next.js',
            },
          ]}
          imageSrc={'/dgg_snapshot.png'}
        />
        <Project
          title={`Todo List`}
          description={`Todo List using a custom webpack setup.`}
          linkContent={[
            {
              href: 'https://majegoid.github.io/todo-list/',
              icon: 'globe',
              text: 'Visit',
            },
            {
              href: 'https://github.com/majegoid/todo-list',
              icon: ['fab', 'github'],
              text: 'Source Code',
            },
          ]}
          techContent={[
            {
              icon: ['fab', 'html5'],
              text: 'HTML',
            },
            {
              icon: ['fab', 'css3'],
              text: 'CSS',
            },
            {
              icon: ['fab', 'js'],
              text: 'JS',
            },
            {
              icon: ['fas', 'cube'],
              text: 'Webpack',
            },
          ]}
          imageSrc={'/todo_list_app.png'}
        />
      </ProjectsList>
    </div>
  );
}
