import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import Navbar from '../../components/navbar'

import './styles.css';

const MoreInfoCard = () => {
    return (
        <div className="moreinfo-Blog">
        <Navbar/>
        <div className="moreinfo-Card-Blog">
      <MDBCol >
        <MDBCard >
          <MDBCardImage className="img-fluid" src="assets/urtzi.jpg" waves />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            <MDBBtn href="https://www.urtziarana.com">Click</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </div>
      </div>
    )
  }
  
  export default MoreInfoCard;