import Head from 'next/head';
import React from 'react';
import { Footer } from './Footer';
import { TopNavigation } from './TopNavigation';

export const Layout = ({ children }) => {
  return (
    <div className='layout-container'>
      <Head>
        <title>My Portfolio</title>
        <meta name='description' content='Work Portfolio by Drew Walsworth' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TopNavigation />
      <main>{children}</main>
      {/* <main>
        <div style={{ backgroundColor: 'red', width: '100%', height: '100%' }}>
          FILL
        </div>
      </main> */}
      {/* <main>No Content</main> */}
      <Footer />
    </div>
  );
};
