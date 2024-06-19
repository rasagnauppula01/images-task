import React from 'react';
import './header.css';
import logo2 from "./assets/images/Vector.svg"
import logo from "./assets/Logo.jpg"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo1" width={140} height={60} ></img>
        <span className='inspiration-regular'>Ik developers</span>
      </div>
      <nav>
        <ul>
          <li>About us</li>
          <li>Services</li>
          <li>Case Studies</li>
          <li>Blog</li>
          <li>How it Works</li>
          <li>Hire</li>
        </ul>
      </nav>
      <button>Contact us</button>
    </header>
  );
};

export default Header;
