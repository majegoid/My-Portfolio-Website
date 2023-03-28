import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

import LinkList from '../../LinkList/LinkList';
import TagList from '../../TagList/TagList';
import {
  content,
  header,
  image,
  linkButtons,
  meta,
  project,
} from './Project.module.css';

const Project = ({ projectIndex, projectData }) => {
  const { title, description, links, tags, imageSrc = '/bg.jpg' } = projectData;

  return (
    <div className={project}>
      <h1>#{projectIndex + 1}</h1>
      <ul className={linkButtons}>
        <li key='visit-link'>
          <a href={links.visit} rel='noreferrer' target='_blank'>
            <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
          </a>
        </li>
        <li key='source-link'>
          <a href={links.source} rel='noreferrer' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </li>
      </ul>
      <div className={header}>
        <h2>{title || `Project Title`}</h2>
      </div>
      <div className={content}>
        <span className={image}>
          <Image
            src={imageSrc}
            objectFit='cover'
            priority
            alt='Background image of transparent blue cube outlines on a black background at an angle.'
            height='180'
            width='320'
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
        {links.otherLinks && <LinkList links={links.otherLinks} />}
        {tags && <TagList tagList={tags} />}
      </div>
    </div>
  );
};

export default Project;
