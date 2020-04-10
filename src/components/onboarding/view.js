import React from 'react';

import './styles.css';

import OnboardingModal from '../onboardingmodal/view';

function OnboardingCard() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="BlogHello">
      <div className="BlogLogo" >
        <img className="logo" src="assets/bloglogo.jpg" alt="imagen Logo" />
      </div>
      <p className="BlogName">"Urtzi's Green Thoughts"</p>
      <p className="welcome">Pulsa mi Eguzkilore</p>
      <p onClick={() => setModalShow(true)}>
        <img className="eguzki" src="assets/eguzki.jpeg" alt="imagen Eguzkilore" />
      </p>
    
      <OnboardingModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      />

    </div>
  );
}

export default OnboardingCard;
