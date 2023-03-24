import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { tech } from './TechList.module.css';

const TechList = ({ techContent }) => {
  return (
    <ul className={tech}>
      {techContent.map(({ icon = ['fab', 'react'], text }) => (
        <li key={text}>
          {icon instanceof Array && <FontAwesomeIcon icon={icon} />}
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
};

export default TechList;
