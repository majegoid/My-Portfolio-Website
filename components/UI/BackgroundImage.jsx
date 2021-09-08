import React from 'react';
import Image from 'next/image';
import HeroBg from '../../public/bg.jpg';

import { container, bgLayer, overlay } from './BackgroundImage.module.css';

const BackgroundImage = ({ children }) => {
  return (
    <div className={container}>
      <div className={bgLayer}>
        <Image alt='Mountains' src={HeroBg} layout='fill' objectFit='cover' priority />
      </div>
      <div className={overlay}>{children}</div>
    </div>
  );
};

export default BackgroundImage;
