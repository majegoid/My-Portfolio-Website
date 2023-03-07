import Link from 'next/link';
import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={`${styles.gridItem}`}>
          <div className={styles.columnLabel}>Links</div>
          <ul className={styles.anchorList}>
            <li>
              <a href='https://github.com/walsworthdrew96'>GitHub</a>
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
          <div className={styles.columnLabel}>Links</div>
          <ul className={styles.anchorList}>
            <li>
              <a href='https://github.com/walsworthdrew96'>GitHub</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.gridItem} ${styles.bottomItem}`}>
          <span>Created by Drew Walsworth Ⓒ {new Date().getUTCFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
