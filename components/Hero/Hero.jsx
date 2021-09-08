import React from 'react';
import Image from 'next/image';

import BackgroundImage from '../../public/bg.jpg';

import { grid, hero, heroBg } from './Hero.module.css';

const Hero = () => {
  return (
    <div className={grid}>
      <div className={hero}>
        <h1>{`Hi, my name's Drew.`}</h1>
        <h2>Welcome to my Portfolio Website!</h2>
      </div>
      <div className={heroBg}>
        <Image
          src={BackgroundImage}
          objectFit='cover'
          placeholder='blur'
          priority
          alt='Background image of transparent blue cube outlines on a black background at an angle.'
        />
      </div>
    </div>
  );
};

export default Hero;
