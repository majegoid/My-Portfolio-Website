import React from 'react';
import { tagsDataList } from '../../data/tagsDataList';
import { TagListItem } from '../Tag/TagListItem';
import {
  projectFilterGroup,
  projectFilterGroupContainer,
  projectFiltersContainer,
  projectFiltersStyle,
} from './ProjectFilters.module.css';

export const ProjectFilters = ({ toggleProjectFilter, findProjectFilter }) => {
  // JSX
  const tagDataGroups = new Set(tagsDataList.map((td) => td.groups).flat());
  const tagFiltersJsx2 = [...tagDataGroups].map((tdg) => {
    const filteredTagDataList = tagsDataList.filter((td) =>
      td.groups.includes(tdg)
    );
    // console.log(
    //   tdg,
    //   filteredTagDataList.map((td) => td.text)
    // );

    // const filteredTagDataJsx = filteredTagDataList.map(
    //   ({
    //     id = uuid(),
    //     icon = ['fab', 'react'],
    //     text,
    //     top = 0,
    //     height = 18,
    //     width = 18,
    //     defaultColorFilterOff = false,
    //     grayScaleFilter = false,
    //   }) => {
    //     return (
    //       <li
    //         key={id}
    //         className={classNames({
    //           [projectFilterStyle]: true,
    //           [active]: findProjectFilter(id),
    //         })}
    //         onClick={() => toggleProjectFilter(id)}
    //       >
    //         {icon instanceof Array && (
    //           <FontAwesomeIcon icon={icon} style={{ fontSize: 18 }} />
    //         )}
    //         {typeof icon === 'string' && (
    //           <span
    //             style={{
    //               display: 'inline-block',
    //               position: 'relative',
    //               top: top,
    //               height: height,
    //               width: width,
    //             }}
    //           >
    //             <Image
    //               src={`/${icon}`}
    //               layout='fill'
    //               objectFit='contain'
    //               alt={`Icon`}
    //               className={classNames({
    //                 [iconWhiteColorFilter]: !defaultColorFilterOff,
    //                 [iconGrayscaleColorFilter]: grayScaleFilter,
    //               })}
    //             />
    //           </span>
    //         )}
    //         <span>{text}</span>
    //       </li>
    //     );
    //   }
    // );

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
      <div key={tdg} className={projectFilterGroup}>
        <h4>{tdg}</h4>
        <ul className={projectFiltersStyle}>{filteredTagDataJsx}</ul>
      </div>
    );
  });

  // const tagFiltersJsx = tagsDataList.map(
  //   ({ id = uuid(), icon = ['fab', 'react'], text }) => {
  //     return (
  //       <li
  //         key={id}
  //         className={classNames({
  //           [projectFilterStyle]: true,
  //           [active]: findProjectFilter(id),
  //         })}
  //         onClick={() => toggleProjectFilter(id)}
  //       >
  //         {icon instanceof Array && <FontAwesomeIcon icon={icon} />}

  //         {icon instanceof String && (
  //           <Image src={`${icon}`} height={40} alt={`Icon`} />
  //         )}
  //         <span>{text}</span>
  //       </li>
  //     );
  //   }
  // );

  return (
    <div className={projectFiltersContainer}>
      <h2>Project Filters</h2>
      <p>
        Click to view only projects with the active tags. Active tags are in
        green.
      </p>
      <div className={projectFilterGroupContainer}>{tagFiltersJsx2}</div>
    </div>
  );
};
