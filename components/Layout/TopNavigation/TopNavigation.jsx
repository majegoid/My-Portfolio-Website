import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './TopNavigation.module.css';

const TopNavigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      console.log(`width: ${window.innerWidth}`);
      setIsMobileWidth(window.innerWidth <= 600);
    });
    console.log(`width: ${window.innerWidth}`);
    setIsMobileWidth(window.innerWidth <= 600);
    setIsLoading(false);
  }, []);

  const toggleMobileNavOpen = () => {
    setIsMobileNavOpen((curState) => !curState);
  };

  const desktopNavigation = (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.logo}>
          <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
          <span>My Portfolio</span>
        </li>
        <li className={styles.divider} />
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        {/* <li className={styles.divider} /> */}
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
      <ul className={styles.right}>
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
    <nav className={styles.nav}>
      <ul>
        <li className={styles.logo}>
          <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
          <span>My Portfolio</span>
        </li>
      </ul>
      <ul className={styles.right}>
        <li className={styles.menuButton}>
          <FontAwesomeIcon icon='bars' size='2x' onClick={toggleMobileNavOpen} />
        </li>
      </ul>
      {isMobileNavOpen && (
        <div className={styles.mobileNavContent}>
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
