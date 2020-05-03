import React from 'react';
import Card from 'react-bootstrap/Card'
import { animateScroll as scroll } from "react-scroll";
import PostLast from '../../constants/PostLast'


import Navbar from '../../components/navbar'

import './styles.css';

const scrollToTop = () => {
    scroll.scrollToTop();
};

const SelectedPost = () => {

    return (
        <div className="selected-Blog">
        <Navbar/>
        <div className="selected-Card-Blog">
            <Card.Img variant="top" src={PostLast[1].picture} />
            <h3 className="selected-Card-Title-Blog">{PostLast[1].title}</h3>
            <p className="selected-type-Blog">{PostLast[1].category}</p>
            <div className="selected-footer-Blog">
            <p className="selected-date-Blog">Día: {PostLast[1].date}</p>
            <p className="selected-views-Blog">Views: {PostLast[1].views}</p>
            </div>
            <div className="selected-text-Blog">
                <p className="selected-main-Blog">{PostLast[1].contentPost}</p>
            <a className="selected-scrollUp" onClick={scrollToTop}>To Top</a>
            </div>
            <div className="selected-last-line"></div>
        </div>
        </div>
    )
}

export default SelectedPost