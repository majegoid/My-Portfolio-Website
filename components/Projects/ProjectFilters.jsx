import classNames from 'classnames';
import React from 'react';
import { tagsDataList } from '../../data/tagsDataList';
import { TagListItem } from '../Tags/TagListItem';

export const ProjectFilters = ({ toggleProjectFilter, findProjectFilter }) => {
  // JSX
  const tagDataGroups = new Set(tagsDataList.map((td) => td.groups).flat());
  const tagFiltersJsx2 = [...tagDataGroups].map((tdg) => {
    const filteredTagDataList = tagsDataList.filter((td) =>
      td.groups.includes(tdg)
    );

    const filteredTagDataJsx = filteredTagDataList.map((tagData) => {
      return (
        <TagListItem
          key={tagData.id}
          tagData={tagData}
          active={findProjectFilter(tagData.id)}
          onClick={() => toggleProjectFilter(tagData.id)}
        />
      );
    });

    return (
      <div key={tdg} className='project-filter-group'>
        <h4>{tdg}</h4>
        <ul
          className={classNames({
            ['project-filters']: true,
            ['no-user-selection']: true,
          })}
        >
          {filteredTagDataJsx}
        </ul>
      </div>
    );
  });

  return (
    <div className='project-filters-container'>
      <h2>Project Filters</h2>
      <p>
        Click to view only projects with the active tags. Active tags are blue.
      </p>
      <div className='project-filter-group-container'>{tagFiltersJsx2}</div>
    </div>
  );
};
