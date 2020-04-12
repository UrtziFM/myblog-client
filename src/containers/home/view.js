import React from 'react';

import LastPostCard from '../../components/lastpost'
import PostListCard from '../../components/postlist'

import Navbar from '../../components/navbar'

import './styles.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Home = ()=>{

  return(
    
    <div className="home-container">
        <Navbar />
        <div className="home__images">
        <img
          className="home__images__img"
          src="../assets/eguzki.jpeg"
          alt="eguzkilore"
        />
      </div>
      <h2 className="home__welcome">
        Shall we play a game?
      </h2>
    <Router>
      <Link to="/lastpost">
        <LastPostCard />
      </Link>
    </Router>
    <div className="line"></div>
  <PostListCard />
  </div>
    )
}

export default Home
