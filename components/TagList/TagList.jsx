import React from 'react';

import { tagsDataList } from '../../data/tagsDataList';
import { TagListItem } from '../Tag/TagListItem';
import { tagListStyle } from './TagList.module.css';

const TagList = ({ tagList }) => {
  const tagListJsx = tagList.map((tag) => {
    const tagData = tagsDataList.find((tagData) => tagData.id === tag);
    return <TagListItem key={tagData.id} tagData={tagData} active={false} />;
  });

  return <ul className={tagListStyle}>{tagListJsx}</ul>;
};

export default TagList;
