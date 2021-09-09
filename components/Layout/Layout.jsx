import React, { useState, useRef } from 'react';
import Head from 'next/head';

import TopNavigation from './TopNavigation/TopNavigation';
import Footer from './Footer/Footer';
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
