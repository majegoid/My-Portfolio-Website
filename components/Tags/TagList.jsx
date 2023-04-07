import React from 'react';

import classNames from 'classnames';
import { tagsDataList } from '../../data/tagsDataList';
import { TagListItem } from './TagListItem';

export const TagList = ({ tagList }) => {
  const tagListJsx = tagList.map((tag) => {
    const tagData = tagsDataList.find((tagData) => tagData.id === tag);
    return <TagListItem key={tagData.id} tagData={tagData} active={false} />;
  });

  return (
    <ul
      className={classNames({
        ['no-user-selection']: true,
        ['tag-list']: true,
      })}
    >
      {tagListJsx}
    </ul>
  );
};
