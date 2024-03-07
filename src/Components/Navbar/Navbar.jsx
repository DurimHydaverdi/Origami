import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo-origami.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <Link to='/'><img src={logo} alt="" className='orig' /></Link>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("home") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link>{menu === "home" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("players") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/players'>Players</Link>{menu === "players" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("agent") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/agent'>Agent</Link>{menu === "agent" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("about") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/about'>About</Link>{menu === "about" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login">
        <Link to='/login'><button>Login</button></Link>
      </div>
    </div>
  );
}

export default Navbar;