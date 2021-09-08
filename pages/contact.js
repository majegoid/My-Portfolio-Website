import React from 'react';

import { main, contactInfo } from '../styles/About.module.css';

const contact = () => {
  return (
    <div className={main}>
      <h1>Contact Information</h1>
      <p>
        I should be available <b>Weekdays (Monday-Friday) from 9am-5pm</b>. I am currently working every day to become a
        {` `}
        <b>React Developer</b>.
      </p>
      <p>
        Feel free to shoot me an email if you have <b>business inquiries</b>. I try to check it fairly often.
      </p>

      <h2>Contact Information</h2>
      <div className={contactInfo}>
        <b>
          <u>Email:</u> walsworth.drew96@gmail.com
        </b>
        <b>
          <u>GitHub:</u> https://github.com/walsworthdrew96
        </b>
      </div>
    </div>
  );
};

export default contact;
