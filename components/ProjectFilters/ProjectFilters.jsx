import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { tagsDataList } from '../../data/tagsDataList';
import {
  active,
  projectFiltersStyle,
  projectFilterStyle,
} from './ProjectFilters.module.css';

export const ProjectFilters = ({ toggleProjectFilter, findProjectFilter }) => {
  console.log(tagsDataList);

  // JSX
  const tagFiltersJsx = tagsDataList.map(
    ({ id = uuid(), icon = ['fab', 'react'], text }) => {
      return (
        <li
          key={id}
          className={classNames({
            [projectFilterStyle]: true,
            [active]: findProjectFilter(id),
          })}
          onClick={() => toggleProjectFilter(id)}
        >
          {icon instanceof Array && <FontAwesomeIcon icon={icon} />}
          <span>{text}</span>
        </li>
      );
    }
  );

  return (
    <div>
      <h2>Project Filters</h2>
      <p>
        Click to view only projects with the active tags. Active tags are in
        green.
      </p>
      <ul className={projectFiltersStyle}>{tagFiltersJsx}</ul>
    </div>
  );
};
