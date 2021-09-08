import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { tech } from './TechList.module.css';

const TechList = ({ techContent }) => {
  const content = techContent ? (
    <>
      <h4>Tech</h4>
      <ul className={tech}>
        {techContent.map(({ icon, text }) => {
          if (icon) {
            return (
              <li key={text}>
                <FontAwesomeIcon icon={icon} />
                <span>{text}</span>
              </li>
            );
          }
          return <li key={text}>{text}</li>;
        })}
      </ul>
    </>
  ) : null;

  return content;
};

export default TechList;
