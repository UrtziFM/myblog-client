import React from 'react';
import Card from 'react-bootstrap/Card'
import { animateScroll as scroll } from "react-scroll";
import PostLast from '../../constants/PostLast'


import Navbar from '../../components/navbar'

import './styles.css';

const scrollToTop = () => {
    scroll.scrollToTop();
};

const LastPostBlog = () => {

    return (
        <div className="last-Blog">
        <Navbar/>
        <div className="last-Card-Blog">
            <Card.Img variant="top" src={PostLast[0].picture} />
            <h3 className="last-Card-Title-Blog">{PostLast[0].title}</h3>
            <p className="last-type-Blog">{PostLast[0].category}</p>
            <div className="last-footer-Blog">
            <p className="last-date-Blog">Día: {PostLast[0].date}</p>
            <p className="last-views-Blog">Views: {PostLast[0].views}</p>
            </div>
            <div className="last-text-Blog">
                <p className="last-main-Blog">{PostLast[0].contentPost}</p>
            <a className="scrollUp" onClick={scrollToTop}>To Top</a>
            </div>
            <div className="last-line"></div>
        </div>
        </div>
    )
}

export default LastPostBlog