import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


import home from '../../assets/icons/home.png';
import last from '../../assets/icons/new.png';
import list from '../../assets/icons/list.png';
import moreInfo from '../../assets/icons/info.png';

import './styles.css';

const Navbar = () => {
  const history = useHistory();
  return (
    <nav className="Navbar">
      <Router>
        <Link to="/home">
          <img className="Navbar__icon" alt="home" src={home} onClick={()=> history.push('/home')}/>
        </Link>
        <Link to="/lastpost">
          <img className="Navbar__icon" alt="last" src={last} onClick={()=> history.push('/lastpost')}/>
        </Link>
        <Link to="/postlist">
          <img className="Navbar__icon" alt="animals" src={list} onClick={()=> history.push('/postlist')}/>
        </Link>
        <Link to="/info">
          <img className="Navbar__icon" alt="moreinfo" src={moreInfo} onClick={()=> history.push('/info')}/>
        </Link>
      </Router>
    </nav>
  );
};

export default Navbar;
