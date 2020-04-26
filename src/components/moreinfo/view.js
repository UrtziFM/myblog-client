import React from 'react';
import { MDBContainer, MDBFooter } from "mdbreact";

import Navbar from '../../components/navbar'

import './styles.css';

const MoreInfoCard = () => {
    return (
        <div className="moreinfo-Blog">
        <Navbar/>
        <div className="moreinfo-Card-Blog">
        <img className="moreinfo-photo" src="assets/urtzi.jpg" />
        <div className="moreinfo-text">
          <p className="moreinfo-text-detail">Urtzi Arana Santamaria</p>
          <p className="moreinfo-text-detail-3">"Se que mis pensamientos o ideas simplemente son 
           un momento de lucidez temporal, sin la ejecución o el intento estos pensamientos solo serían 
           glucosa y oxígeno"</p>
           <p className="moreinfo-text-detail-2">Yo</p>
          <p className="moreinfo-text-detail-1">"En realidad no me preocupa que me quieran robar mis ideas, 
          me preocupa que ell@s no las tengan"</p>
          <p className="moreinfo-text-detail-2">Nicola Tesla</p>
          
        </div>
        </div>
        <MDBFooter color="green" className="font-small pt-4 mt-4">
        <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.urtziarana.com"> urtziarana.com </a>
        </MDBContainer>
       </div>
        </MDBFooter>
        </div>
    )
  }
  
  export default MoreInfoCard;