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
import Sidebar from '../Sidebar';
import { useGlobalContext } from '../../../Context';

const Navbar = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <button className='btn nav-logo'>
            <img src={logo} alt='versa' />
            versa{' '}
          </button>{' '}
          <button className='nav-toggle' onClick={openSidebar}>
            {<FaBars />}
          </button>
          {/* <div className={isOpen ? 'menu-box active' : 'menu-box'}>
            <Sidebar />
          </div> */}
        </div>
        {isSidebarOpen && <Sidebar />}
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
        {/* <ul className='icons-container'>
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href='SOME STUFF' className={link.class}>
                  {link.icon}
                  {link.dropdown}
                </a>
              </li>
            );
          })}
        </ul> */}
      </div>{' '}
    </nav>
  );
};

export default Navbar;

// import Wrapper from '../assets/wrappers/NavWrapper';
