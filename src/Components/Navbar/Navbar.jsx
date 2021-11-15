import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../Img/logo-ALTA.png'

function Navbar() {
    return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
     		<NavLink to='/' className="navbar-brand d-flex">
            	<img src={logo} alt="logo" className="w-75" />
   			</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3">
			  	<NavLink to="/" className="nav-link mx-3" replace>
					HOME
				</NavLink>
              </li>
              <li className="nav-item mx-3">
				<NavLink to="/about" className="nav-link mx-3" replace>
					ABOUT
				</NavLink>
              </li>
              <li className="nav-item mx-3">
			  	<NavLink to="/news" className="nav-link mx-3" replace>
					NEWS
				</NavLink>
              </li>
              <li className="nav-item mx-3">
				<NavLink to="/contact_us" className="nav-link mx-3" replace>
					CONTACT US
				</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
