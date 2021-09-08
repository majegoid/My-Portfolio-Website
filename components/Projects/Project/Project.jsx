import React from 'react';
import Image from 'next/image';

import PlaceholderImage from '../../../public/bg.jpg';

import { project, image, content, meta, header } from './Project.module.css';
import TechList from '../../TechList/TechList';
import LinkList from '../../LinkList/LinkList';

const Project = ({ title, description, linkContent, techContent }) => {
  return (
    <div className={project}>
      <div className={header}>
        <h2>{title || `Project Title`}</h2>
      </div>
      <div className={content}>
        <span className={image}>
          <Image
            src={PlaceholderImage}
            // layout='fill'
            objectFit='cover'
            placeholder='blur'
            priority
            alt='Background image of transparent blue cube outlines on a black background at an angle.'
          />
        </span>
        <p>
          {description ||
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.`}
        </p>
      </div>
      <div className={meta}>
        <LinkList linkContent={linkContent} />
        <TechList techContent={techContent} />
      </div>
    </div>
  );
};

export default Project;
