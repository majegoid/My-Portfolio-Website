import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './LinkList.module.css';

const LinkList = ({ links }) => {
  return (
    <ul className={styles.linkList}>
      {links.map(({ href, icon = ['fab', 'react'], text }) => (
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
