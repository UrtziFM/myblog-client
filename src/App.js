import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import OnboardingCard from './components/onboarding'
import LoginCard from './components/login'

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={OnboardingCard} />
          <Route exact path="/login" component={LoginCard} />
      </Switch>
      </Router>
  </div>

  );
}

export default App;
