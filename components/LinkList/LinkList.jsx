import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { links } from './LinkList.module.css';

const LinkList = ({ linkContent }) => {
  return (
    <ul className={links}>
      {linkContent.map(({ href, icon = ['fab', 'react'], text }) => (
        <li key={text}>
          <a href={href} rel='noreferrer' target='_blank'>
            <FontAwesomeIcon icon={icon} />
            <span>{text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
