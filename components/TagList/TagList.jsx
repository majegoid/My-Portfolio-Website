import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { v4 as uuid } from 'uuid';
import { tagsDataList } from '../../data/tagsDataList';
import { tech } from './TagList.module.css';

const TagList = ({ tagList }) => {
  return (
    <ul className={tech}>
      {tagList.map((tag) => {
        const {
          id = uuid(),
          icon = ['fab', 'react'],
          text,
        } = tagsDataList.find((tagData) => tagData.id === tag);
        return (
          <li key={id}>
            {icon instanceof Array && <FontAwesomeIcon icon={icon} />}
            <span>{text}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default TagList;
