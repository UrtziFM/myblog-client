import React from 'react';
import Card from 'react-bootstrap/Card'
import { animateScroll as scroll } from "react-scroll";
import PostLast from '../../constants/PostLast'


import Navbar from '../../components/navbar'

import './styles.css';

const scrollToTop = () => {
    scroll.scrollToTop();
};

const SelectedPost1 = () => {

    return (
        <div className="selected1-Blog">
        <Navbar/>
        <div className="selected1-Card-Blog">
            <Card.Img variant="top" src={PostLast[2].picture} />
            <h3 className="selected1-Card-Title-Blog">{PostLast[2].title}</h3>
            <p className="selected1-type-Blog">{PostLast[2].category}</p>
            <div className="selected1-footer-Blog">
            <p className="selected1-date-Blog">Día: {PostLast[2].date}</p>
            <p className="selected1-views-Blog">Views: {PostLast[2].views}</p>
            </div>
            <div className="selected1-text-Blog">
                <p className="selected1-main-Blog">{PostLast[2].contentPost}</p>
            <a className="selected1-scrollUp" onClick={scrollToTop}>To Top</a>
            </div>
            <div className="selected1-last-line"></div>
        </div>
        </div>
    )
}

export default SelectedPost1