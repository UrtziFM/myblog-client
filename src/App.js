import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import OnboardingCard from './components/onboarding'
import LogUsers from './components/Login'

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={OnboardingCard} />
          <Route path="/login" component={LogUsers} />
      </Switch>
      </Router>
  </div>

  );
}

export default App;
