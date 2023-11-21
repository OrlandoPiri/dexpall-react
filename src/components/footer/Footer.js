import React from 'react';
import './Footer.css';
import { footerLinks } from '../../data';
const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-container'>
        <ul className='footer-links'>
          {footerLinks.map((page) => {
            const { id, classs, text } = page;
            return (
              <li key={id} className={classs}>
                {text}
              </li>
            );
          })}
        </ul>

        {/* <ul className='footer-links'>
        {' '}
        <li className='link'>about</li>
        <li className='link'>terms of use</li>
        <li className='link'>privacy policy</li>
        <li className='link'>contact</li>
      </ul> */}
        <div className='trademark'>
          Versa &copy; <span>{new Date().getFullYear()}</span> | All rights
          reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
