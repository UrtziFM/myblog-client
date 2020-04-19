import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


import home from '../../assets/icons/home.png';
import last from '../../assets/icons/new.png';
import list from '../../assets/icons/list.png';
import moreInfo from '../../assets/icons/info.png';

import './styles.css';

const Navbar = () => {

  return (
    <nav className="Navbar">
      <Router>
        <Link to="/home">
          <img className="Navbar__icon" alt="home" src={home} />
        </Link>
        <Link to="/lastpost">
          <img className="Navbar__icon" alt="last" src={last} />
        </Link>
        <Link to="/postlist">
          <img className="Navbar__icon" alt="animals" src={list} />
        </Link>
        <Link to="/info">
          <img className="Navbar__icon" alt="moreinfo" src={moreInfo} />
        </Link>
      </Router>
    </nav>
  );
};

export default Navbar;
