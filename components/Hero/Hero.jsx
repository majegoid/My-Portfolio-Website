import React from 'react';

import { heroBg } from './Hero.module.css';

const Hero = () => {
  return (
    <div className={heroBg}>
      <h1>{`Hi, my name's Drew.`}</h1>
      <h2>Welcome to my Portfolio Website!</h2>
      {/* <Image
          src={BackgroundImage}
          objectFit='cover'
          placeholder='blur'
          priority
          alt='Background image of transparent blue cube outlines on a black background at an angle.'
        /> */}
    </div>
  );
};

export default Hero;
