import React from 'react';
import './MenuBox.css';
import { navLinks } from '../../data';

const MenuBox = () => {
  return (
    <article>
      <div className='icons-center'>
        {navLinks.map((link) => {
          return (
            <article className='item' key={link.id}>
              <button type='button' className={link.class}>
                <>
                  {link.icon}
                  {link.dropdown}
                </>
              </button>{' '}
              <span>{link.text}</span>
            </article>
          );
        })}
      </div>
    </article>
  );
};

export default MenuBox;
