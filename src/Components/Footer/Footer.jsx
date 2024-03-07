import React, { useState } from 'react';
import './Footer.css'
import footer_logo from '../Assets/footer_logo.png'
import fiba_logo from '../Assets/fiba-logo.png'
import { Link } from 'react-router-dom';
import instagram_logo from '../Assets/instagram-icon.png'
import linkedin_logo from '../Assets/linkedin-icon.png'

const Footer = () => {
  const [menu, setMenu] = useState("home")
  const handleMenuClick = (menuItem) => {
    window.scrollTo(0, 0); // Scroll to the top before setting the new menu
    setMenu(menuItem);
  };


  return (
    <div className='footer'>
      <hr />
      <div className="footer-logo">
        <img src={footer_logo} alt="Origami logo" />
      </div>
      <ul className="footer-links">
        <li onClick={() => handleMenuClick("home")}>
          <Link style={{ textDecoration: 'none', color: 'gray' }} to='/'>Home</Link>
          {menu === "home"}
        </li>
        <li onClick={() => handleMenuClick("players")}>
          <Link style={{ textDecoration: 'none', color: 'gray' }} to='/players'>Players</Link>
          {menu === "players"}
        </li>
        <li onClick={() => handleMenuClick("agent")}>
          <Link style={{ textDecoration: 'none', color: 'gray' }} to='/agent'>Agent</Link>
          {menu === "agent"}
        </li>
        <li onClick={() => handleMenuClick("about")}>
          <Link style={{ textDecoration: 'none', color: 'gray' }} to='/about'>About</Link>
          {menu === "about"}
        </li>
      </ul>
      <div className="footer-social-icon">
      <div className="footer-icons-fiba">
      <Link target='_blank' rel='noopener noreferrer' to="https://www.fiba.basketball/find-basketball-agent"><img src={fiba_logo} alt='Fiba logo' /></Link>
        </div>
        <div className="footer-icons-container">
          <Link target='_blank' rel='noopener noreferrer' to="https://www.instagram.com/origamientt"><img src={instagram_logo} alt="Instagram Logo" /></Link>
        </div>
        <div className="footer-icons-container">
          <Link target='_blank' rel='noopener noreferrer' to="https://www.linkedin.com/in/argjend-zeqiri-ba6756200/"><img src={linkedin_logo} alt="LinkedIn logo" /></Link>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>OrigamiEnt @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
