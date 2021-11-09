import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './SideNav.css' 
import { IconContext } from 'react-icons';

export default function SideNav() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: 'black' }}>
        <div className='navbar'>
          <Link className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <IconContext.Provider value={{ color: 'white' }}>
                  <AiIcons.AiOutlineClose />
                </IconContext.Provider>
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/'>
                <span>Home</span>
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/about/about-app'>
                <span>About App</span>
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/about/about-author'>
                <span>About Author</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  )
}
