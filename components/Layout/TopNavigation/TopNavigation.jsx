import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './TopNavigation.module.css';

const TopNavigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.logo}>
          <Image src={'/favicon.ico'} width='40px' height='40px' alt='Vercel Logo' />
          <span>My Portfolio</span>
        </li>
        <li className={styles.divider} />
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
        </li>
        <li className={styles.divider} />
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <ul className={styles.right}>
        <li>
          <a href=''>My LinkedIn</a>
        </li>
        <li>
          <a href=''>My GitHub</a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavigation;
