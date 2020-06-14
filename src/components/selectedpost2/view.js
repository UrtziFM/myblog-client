import React from 'react';
import Card from 'react-bootstrap/Card'
import { animateScroll as scroll } from "react-scroll";
import PostLast from '../../constants/PostLast'


import Navbar from '../../components/navbar'

import './styles.css';

const scrollToTop = () => {
    scroll.scrollToTop();
};

const SelectedPost2 = () => {

    return (
        <div className="selected2-Blog">
        <Navbar/>
        <div className="selected2-Card-Blog">
            <Card.Img variant="top" src={PostLast[3].picture} />
            <h3 className="selected2-Card-Title-Blog">{PostLast[3].title}</h3>
            <p className="selected2-type-Blog">{PostLast[3].category}</p>
            <div className="selected2-footer-Blog">
            <p className="selected2-date-Blog">Día: {PostLast[3].date}</p>
            <p className="selected2-views-Blog">Views: {PostLast[3].views}</p>
            </div>
            <div className="selected2-text-Blog">
                <p className="selected2-main-Blog">{PostLast[3].contentPost}</p>
            <a className="selected2-scrollUp" onClick={scrollToTop}>To Top</a>
            </div>
            <div className="selected2-last-line"></div>
        </div>
        </div>
    )
}

export default SelectedPost2