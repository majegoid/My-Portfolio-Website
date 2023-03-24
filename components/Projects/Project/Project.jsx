import Image from 'next/image';
import React from 'react';

import LinkList from '../../LinkList/LinkList';
import TagList from '../../TagList/TagList';
import { content, header, image, meta, project } from './Project.module.css';

const Project = ({ projectData }) => {
  const {
    title,
    description,
    linkContent,
    tags,
    imageSrc = '/bg.jpg',
  } = projectData;

  return (
    <div className={project}>
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
        {linkContent && <LinkList linkContent={linkContent} />}
        {tags && <TagList tagList={tags} />}
      </div>
    </div>
  );
};

export default Project;
