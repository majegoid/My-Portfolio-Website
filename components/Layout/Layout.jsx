import Head from 'next/head';
import React from 'react';

import Footer from './Footer/Footer';
import TopNavigation from './TopNavigation/TopNavigation';
// import Scrollbar from '../UI/Scrollbar/Scrollbar';

import { container, main } from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <Head>
        <title>My Portfolio</title>
        <meta name='description' content='Work Portfolio by Drew Walsworth' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TopNavigation />
      <main className={main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
