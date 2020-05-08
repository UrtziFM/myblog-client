import React from 'react';
import { useHistory } from 'react-router-dom';

import LastPostHome from '../../components/lastposthome'
import PostListCard from '../../components/postlist'

import Navbar from '../../components/navbar'

import './styles.css'


const Home = ()=>{
  const history = useHistory();

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
        Shall we play a game? Lee Mi Último Post
      </h2>
      <div className="lastpostclick" onClick={()=> history.push('/lastpost')}>
        <LastPostHome />
      </div>
    <div className="line"></div>
    <div className="postlistclick" onClick={()=> history.push('/postlist')}>
        <PostListCard />
    </div>
  </div>
    )
}

export default Home
