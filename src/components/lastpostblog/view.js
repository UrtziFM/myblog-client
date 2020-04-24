import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link, animateScroll as scroll } from "react-scroll";


import Navbar from '../../components/navbar'

import './styles.css';

const LastPostBlog = ({title, picture, contentPost, category, date, views}) => {

    return (
        <div className="last-Blog">
        <Navbar/>
        <div className="last-Card-Blog">
            <Card.Img variant="top" src="assets/bloglogo.jpg" />
            <h3 className="last-Card-Title-Blog">La Falacia del Desarrollo Sostenible {title}</h3>
            <p className="last-type-Blog">Green Economy{category}</p>
            <div className="last-line"></div>
            <div className="last-text-Blog">
                <p className="last-main-Blog">Este es el cuento de nunca acabar, una dia empiezas y otro dia terminas {contentPost}</p>
            </div>
            <div className="last-footer-Blog">
            <p className="last-date-Blog">Día: {date}</p>
            <p className="last-views-Blog">Views: {views}</p>
            </div>
        </div>
        </div>
    )
}

export default LastPostBlog