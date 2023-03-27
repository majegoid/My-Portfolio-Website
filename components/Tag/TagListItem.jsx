import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import {
  activeStyle,
  iconGrayscaleColorFilter,
  iconWhiteColorFilter,
  tagListItemStyle
} from './TagListItem.module.css';

export const TagListItem = ({ tagData, onClick, active = false }) => {
  const {
    id = uuid(),
    icon = ['fab', 'react'],
    text,
    top = 0,
    height = 18,
    width = 18,
    defaultColorFilterOff = false,
    grayScaleFilter = false,
  } = tagData;

  return (
    <li
      key={id}
      className={classNames({
        [tagListItemStyle]: true,
        [activeStyle]: active,
      })}
      onClick={onClick}
    >
      {icon instanceof Array && (
        <FontAwesomeIcon icon={icon} style={{ fontSize: 18 }} />
      )}
      {typeof icon === 'string' && (
        <span
          style={{
            display: 'inline-block',
            position: 'relative',
            top: top,
            height: height,
            width: width,
          }}
        >
          <Image
            src={`/${icon}`}
            layout='fill'
            objectFit='contain'
            alt={`Icon`}
            className={classNames({
              [iconWhiteColorFilter]: !defaultColorFilterOff,
              [iconGrayscaleColorFilter]: grayScaleFilter,
            })}
          />
        </span>
      )}
      <span>{text}</span>
    </li>
  );
};
