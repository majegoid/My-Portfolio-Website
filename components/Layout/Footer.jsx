import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <h4>Links</h4>
        <ul className='anchor-list'>
          <li>
            <a
              href='https://github.com/majegoid'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href='https://github.com/majegoid'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4>Site Navigation</h4>
        <ul className='anchor-list'>
          <li>
            <Link href='/'>
              <a>My Best Projects</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Links</h4>
        <ul className='anchor-list'>
          <li>
            <a
              href='https://github.com/majegoid'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href='https://github.com/majegoid'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className='bottom-item'>
        <span>Created by Drew Walsworth Ⓒ {new Date().getUTCFullYear()}</span>
      </div>
    </footer>
  );
};
