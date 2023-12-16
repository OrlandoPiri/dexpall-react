import React from 'react';
import './Sidebar.css';
import { navLinks } from '../../data';
import { useGlobalContext } from '../../Context';
import { FaTimes } from 'react-icons/fa';

const MenuBox = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-container'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <ul className='icons-center'>
          {navLinks.map((link) => {
            const { id, icon, dropdown, text, url } = link;
            return (
              <li className='item' key={id}>
                <a href={url} className={link.class}>
                  <>
                    {icon}
                    {dropdown}
                  </>
                </a>{' '}
                <span>{text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default MenuBox;
