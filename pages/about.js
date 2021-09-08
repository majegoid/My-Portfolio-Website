import React from 'react';
import Link from 'next/link';

import { main } from '../styles/About.module.css';

const about = () => {
  return (
    <div className={main}>
      <h1>About</h1>
      <h2>Hi there, my name is Drew, and this is my Work Portfolio.</h2>
      <p>
        This website represents all of the work that I have decided to keep open source to showcase my past projects and
        my abilities as a developer. I have listed several projects here. I have broken down the projects into two
        sections.
      </p>
      <p>
        <b>Main projects</b> which are all <b>fully fledged applications</b> with proper backend APIs, hosting, and SEO,
        and...
      </p>
      <p>
        <b>Side Projects</b>, which are <b>less than fully fleged applications</b> that may be custom or not especially
        well suited to commercial purposes.
      </p>
      <p>
        If you like what you see, and you are looking for a <b>React developer</b> to help you build out a web
        application, feel free to{' '}
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
