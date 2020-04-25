import React from 'react';
import Card from 'react-bootstrap/Card'
import { animateScroll as scroll } from "react-scroll";
import { MDBDropdown, MDBDropdownToggle, MDBBtn, MDBBtnGroup, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";


import Navbar from '../../components/navbar'

import './styles.css';

const scrollToTop = () => {
    scroll.scrollToTop();
};

const LastPostBlog = ({title, category, date}) => {

    return (
        <div className="list-Blog">
        <Navbar/>
        <div className="list-Card-Blog">
            <Card.Img variant="top" src="assets/bloglogo.jpg" />
            <h3 className="list-Card-Title-Blog">Aqui tienes la lista completa de mis Post</h3>
                <MDBDropdown size="sm" className="list-main-Blog">
                    <MDBDropdownToggle caret color="danger" className="list-title">
                        La Falacia del Desarrollo Sostenible{title}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="danger" className="list-text">
                        <MDBDropdownItem className="list-item">Green Economy{category}</MDBDropdownItem>
                        <MDBDropdownItem className="list-item">13-02-20{date}</MDBDropdownItem>
                        <MDBDropdownItem className="list-item" onClick={scrollToTop}>>Leer</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
            <a className="listscrollUp" onClick={scrollToTop}>To Top</a>
            </div>
            <div className="list-line"></div>
        </div>
    
    )
}

export default LastPostBlog