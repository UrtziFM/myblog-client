import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import Navbar from '../../components/navbar'

import './styles.css';

const MoreInfoCard = () => {
    return (
        <div className="moreinfo-Blog">
        <Navbar/>
        <div className="moreinfo-Card-Blog">
        <img className="moreinfo-photo" src="assets/urtzi.jpg" />
        </div>
        <div className="moreinfo-text">
          <p className="moreinfo-text-detail">Hola bienvenido</p>
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