import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const DesktopTopNav = () => {
  const [isAtTopOfPage, setIsAtTopOfPage] = useState(true);

  useEffect(function onFirstMount() {
    function onScroll() {
      setIsAtTopOfPage(window.scrollY === 0);
    }
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={classNames({
        'top-navigation': true,
        opaque: !isAtTopOfPage,
      })}
    >
      <ul>
        <li className='logo'>
          <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
          <span>My Portfolio</span>
        </li>
        <li className='divider' />
        <li>
          <Link href='/'>
            <a>My Best Projects</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <ul className='right'>
        <li>
          <a href=''>My LinkedIn</a>
        </li>
        <li>
          <a href='https://github.com/majegoid'>My GitHub</a>
        </li>
      </ul>
    </nav>
  );
};
