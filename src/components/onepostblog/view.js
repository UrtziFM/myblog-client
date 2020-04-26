import React from 'react';
import Card from 'react-bootstrap/Card'
import { animateScroll as scroll } from "react-scroll";


import Navbar from '../../components/navbar'

import './styles.css';

const scrollToTop = () => {
    scroll.scrollToTop();
};

const OnePostBlog = ({title, picture, contentPost, category, date, views}) => {

    return (
        <div className="one-Blog">
        <Navbar/>
        <div className="one-Card-Blog">
            <Card.Img variant="top" src={picture} />
            <h3 className="one-Card-Title-Blog">{title}</h3>
            <p className="one-type-Blog">{category}</p>
            <div className="one-footer-Blog">
            <p className="one-date-Blog">Día: {date}</p>
            <p className="one-views-Blog">Views: {views}</p>
            </div>
            <div className="one-text-Blog">
                <p className="one-main-Blog">{contentPost}</p>
            <a className="one-scrollUp" onClick={scrollToTop}>To Top</a>
            </div>
            <div className="one-line"></div>
        </div>
        </div>
    )
}

export default OnePostBlog