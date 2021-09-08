import React from 'react';
import Head from 'next/head';

import TopNavigation from './TopNavigation/TopNavigation';
import Footer from './Footer/Footer';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name='description' content='Work Portfolio by Drew Walsworth' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TopNavigation />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
