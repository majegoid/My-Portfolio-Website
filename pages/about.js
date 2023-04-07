import Link from 'next/link';
import React from 'react';

const about = () => {
  return (
    <div className='text-page'>
      <h1>About</h1>
      <br />
      <h2>Hi there, my name is Drew, and this is my Work Portfolio.</h2>
      <br />
      <p>
        This website represents all of the work that I have decided to keep open
        source to showcase my past projects and my abilities as a developer. I
        have listed several of my personal projects for public viewing here.
      </p>
      <br />
      <p>
        If you like what you see, and you are looking for a{' '}
        <b>React Developer</b> to help you build out a web application, feel
        free to{' '}
        <Link href='/contact'>
          <a>
            <b>
              <u>contact me</u>
            </b>
          </a>
        </Link>
        .
      </p>
    </div>
  );
};

export default about;
