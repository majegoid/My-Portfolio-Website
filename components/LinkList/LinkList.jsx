import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { links } from "./LinkList.module.css";

const LinkList = ({ linkContent }) => {
  const content = linkContent ? (
    <>
      <h4>Links</h4>
      <ul className={links}>
        {linkContent.map(({ href, icon, text }) => {
          if (icon) {
            return (
              <li key={text}>
                <a href={href} rel="noreferrer" target="_blank">
                  <FontAwesomeIcon icon={icon} />
                  <span>{text}</span>
                </a>
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

export default LinkList;
