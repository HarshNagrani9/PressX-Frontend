import logo from '../assets/images/logo.png';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [menu, setMenu] = useState('home');

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" className='nav-img' />
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${click ? 'active' : ''}`}>
          <li onClick={() => { setMenu("home"); setClick(false); }}>
            <NavLink to='/home' activeClassName="active-link" onClick={() => setMenu("home")}>
              Home
            </NavLink>
            {menu === "home" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("about"); setClick(false); }}>
            <NavLink to='/about' activeClassName="active-link" onClick={() => setMenu("about")}>
              About
            </NavLink>
            {menu === "about" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("ourTeam"); setClick(false); }}>
            <NavLink to='/ourTeam' activeClassName="active-link" onClick={() => setMenu("ourTeam")}>
              Our Team
            </NavLink>
            {menu === "ourTeam" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("howItWorks"); setClick(false); }}>
            <NavLink to='/howItWorks' activeClassName="active-link" onClick={() => setMenu("howItWorks")}>
              How it Works
            </NavLink>
            {menu === "howItWorks" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("contactUs"); setClick(false); }}>
            <NavLink to='/contactUs' activeClassName="active-link" onClick={() => setMenu("contactUs")}>
              Contact Us
            </NavLink>
            {menu === "contactUs" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login">
          <NavLink to='/login'><button>Login / Sign Up</button></NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
