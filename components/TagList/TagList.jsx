import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { v4 as uuid } from 'uuid';
import { tagsDataList } from '../../data/tagsDataList';
import { tagListStyle } from './TagList.module.css';

const TagList = ({ tagList }) => {
  const tagListJsx = tagList.map((tag) => {
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
  });

  return <ul className={tagListStyle}>{tagListJsx}</ul>;
};

export default TagList;
