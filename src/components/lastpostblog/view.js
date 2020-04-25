import React from 'react';
import Card from 'react-bootstrap/Card'
import { animateScroll as scroll } from "react-scroll";


import Navbar from '../../components/navbar'

import './styles.css';

const scrollToTop = () => {
    scroll.scrollToTop();
};

const LastPostBlog = ({title, picture, contentPost, category, date, views}) => {

    return (
        <div className="last-Blog">
        <Navbar/>
        <div className="last-Card-Blog">
            <Card.Img variant="top" src={picture} />
            <h3 className="last-Card-Title-Blog">{title}</h3>
            <p className="last-type-Blog">{category}</p>
            <div className="last-footer-Blog">
            <p className="last-date-Blog">Día: {date}</p>
            <p className="last-views-Blog">Views: {views}</p>
            </div>
            <div className="last-text-Blog">
                <p className="last-main-Blog">{contentPost}</p>
            <a className="scrollUp" onClick={scrollToTop}>To Top</a>
            </div>
            <div className="last-line"></div>
        </div>
        </div>
    )
}

export default LastPostBlog