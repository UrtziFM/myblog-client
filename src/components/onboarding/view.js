import React from 'react';

import './styles.css';

function OnboardingCard() {
  
  return (
    <div className="BlogHello" /*onClick={() => setModalShow(true)}*/>
      <div className="BlogLogo" >
        <img className="logo" src="assets/bloglogo.jpg" alt="imagen Logo" />
      </div>
      <p className="BlogName">"Urtzi's Green Thoughts"</p>
      <p className="welcome">Welcome</p>
      <p>
        <img className="eguzki" src="assets/eguzki.jpeg" alt="imagen Eguzkilore" />
      </p>
    </div>
  );
}

export default OnboardingCard;
