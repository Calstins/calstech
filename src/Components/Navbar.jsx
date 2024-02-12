import React, { useState } from 'react';
import '../Styles/navbar.scss';
import { routes } from '../Data/data.js';

const Navbar = () => {
  const [bgColor, setBgColor] = useState(false);
  function navBgColorChange() {
    if (window.scrollY > 70) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  }
  window.addEventListener('scroll', navBgColorChange);
  return (
    <div className={bgColor ? 'app__navbar active' : 'app__navbar'}>
      <div className="nav__logo">
        <p>D'Task</p>
      </div>
      <ul className="nav__routes">
        {routes.map((route, index) => (
          <li key={index}>
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul>
      <div className="nav__buttons">
        <button
          style={{
            color: bgColor ? '#0c1727' : 'white',
            backgroundColor: bgColor ? 'white' : '#0c1727',
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
