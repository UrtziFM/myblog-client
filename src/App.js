import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import OnboardingCard from './components/onboarding'
import LoginCard from './components/login'
import LastPostBlog from './components/lastpostblog'
import PostListBlog from './components/postlistblog'
import MoreInfoCard from './components/moreinfo'
import SelectedPost from './components/selectedpost'
import SelectedPost1 from './components/selectedpost1'

import Home from './containers/home/';


import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>  
          <Route exact path="/" component={OnboardingCard} />
          <Route exact path="/login" component={LoginCard} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/lastpost" component={LastPostBlog} />  
          <Route exact path="/postlist" component={PostListBlog} /> 
          <Route exact path="/selectedpost0" component={SelectedPost} />
          <Route exact path="/selectedpost1" component={SelectedPost1} />  
          <Route exact path="/info" component={MoreInfoCard} />  
       </Switch>
      </Router>
  </div>

  );
}

export default App;
