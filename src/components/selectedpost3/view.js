import React from 'react';
import Card from 'react-bootstrap/Card'
import { animateScroll as scroll } from "react-scroll";
import PostLast from '../../constants/PostLast'


import Navbar from '../navbar'

import './styles.css';

const scrollToTop = () => {
    scroll.scrollToTop();
};

const SelectedPost3 = () => {

    return (
        <div className="selected3-Blog">
        <Navbar/>
        <div className="selected3-Card-Blog">
            <Card.Img variant="top" src={PostLast[4].picture} />
            <h3 className="selected3-Card-Title-Blog">{PostLast[4].title}</h3>
            <p className="selected3-type-Blog">{PostLast[4].category}</p>
            <div className="selected3-footer-Blog">
            <p className="selected3-date-Blog">Día: {PostLast[4].date}</p>
            <p className="selected3-views-Blog">Views: {PostLast[4].views}</p>
            </div>
            <div className="selected3-text-Blog">
                <p className="selected3-main-Blog">{PostLast[4].contentPost}</p>
            <a className="selected3-scrollUp" onClick={scrollToTop}>To Top</a>
            </div>
            <div className="selected3-last-line"></div>
        </div>
        </div>
    )
}

export default SelectedPost3