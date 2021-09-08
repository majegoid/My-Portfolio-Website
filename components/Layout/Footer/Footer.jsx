import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={`${styles.gridItem}`}>
          <div className={styles.columnLabel}>Social</div>
          <ul className={styles.anchorList}>
            <li>
              <a href='https://github.com/walsworthdrew96'>GitHub</a>
            </li>
            <li>
              <a href='https://github.com/walsworthdrew96'>LinkedIn</a>
            </li>
            <li>
              <a href='https://github.com/walsworthdrew96'>Indeed</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.gridItem}`}>
          <div className={styles.columnLabel}>Site Navigation</div>
          <ul className={styles.anchorList}>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.gridItem}`}>
          <div className={styles.columnLabel}>Social</div>
          <ul className={styles.anchorList}>
            <li>
              <a href='https://github.com/walsworthdrew96'>GitHub</a>
            </li>
            <li>
              <a href='https://github.com/walsworthdrew96'>LinkedIn</a>
            </li>
            <li>
              <a href='https://github.com/walsworthdrew96'>Indeed</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.gridItem} ${styles.bottomItem}`}>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>Created by Drew Walsworth Ⓒ 2021 - Powered by </span>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
