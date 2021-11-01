import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand"><img src="img/logo-ALTA.png" height={50} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3">
                <a className="nav-link text-blue active">HOME</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-blue">ABOUT</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-blue">EXPERIENCE</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-blue" href="contact_us.html">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}
