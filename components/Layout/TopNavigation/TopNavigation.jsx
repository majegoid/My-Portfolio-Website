import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { nav, logo, divider, right, mobileNavContent, menuButton } from './TopNavigation.module.css';

const TopNavigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleMobileWidth = () => {
      setIsMobileWidth(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleMobileWidth);
    handleMobileWidth();
    setIsLoading(false);
    return () => {
      window.removeEventListener('resize', handleMobileWidth);
    };
  }, []);

  const toggleMobileNavOpen = () => {
    setIsMobileNavOpen((curState) => !curState);
  };

  const desktopNavigation = (
    <nav className={nav}>
      <ul>
        <li className={logo}>
          <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
          <span>My Portfolio</span>
        </li>
        <li className={divider} />
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        {/* <li className={divider} /> */}
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
      <ul className={right}>
        {/* <li>
          <a href=''>My LinkedIn</a>
        </li> */}
        <li style={{ marginRight: '5px' }}>
          <a href='https://github.com/walsworthdrew96'>My GitHub</a>
        </li>
      </ul>
    </nav>
  );

  const mobileNavigation = (
    <nav className={nav}>
      <ul>
        <li className={logo}>
          <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
          <span>My Portfolio</span>
        </li>
      </ul>
      <ul className={right}>
        <li className={menuButton}>
          <FontAwesomeIcon icon='bars' size='2x' onClick={toggleMobileNavOpen} />
        </li>
      </ul>
      {isMobileNavOpen && (
        <div className={mobileNavContent}>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a style={{ marginBottom: '0px' }}>Contact</a>
              </Link>
            </li>
          </ul>
          <hr />
          <ul>
            {/* <li>
              <a href=''>My LinkedIn</a>
            </li> */}
            <li>
              <a style={{ marginBottom: '0px' }} href='https://github.com/walsworthdrew96'>
                My GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );

  const topNavigation = isMobileWidth ? mobileNavigation : desktopNavigation;

  return topNavigation;
};

export default TopNavigation;
