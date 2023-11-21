import React, { useEffect, useState } from 'react';

import {
  FaBars,
  FaAlignLeft,
  FaBell,
  FaGlobe,
  FaUserCircle,
  FaCaretDown,
  FaCaretSquareDown,
  FaUser,
  FaSearch,
  FaSliders,
  FaTimes,
} from 'react-icons/fa';
import './Navbar.css';
import logo from '../../../images/favicon_io (2)/favicon.ico';
import { navLinks } from '../../../data';
import MenuBox from '../MenuBox';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <button className='btn nav-logo'>
            <img src={logo} alt='versa' />
            versa{' '}
          </button>{' '}
          <button
            type='button'
            className='nav-toggle'
            id='nav-toggle'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className={isOpen ? 'menu-box active' : 'menu-box'}>
            <MenuBox />
          </div>
          <div className='icons-container'>
            {navLinks.map((link) => {
              return (
                <button key={link.id} className={link.class}>
                  {link.icon}
                  {link.dropdown}
                </button>
              );
            })}
          </div>
        </div>
      </div>{' '}
    </nav>
  );
};

export default Navbar;

// import Wrapper from '../assets/wrappers/NavWrapper';
