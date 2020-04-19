import React from 'react';



import Navbar from '../../components/navbar'

import './styles.css';

const LastPostBlog = ({title, description, picture, contentPost, category, date, views}) => {

    return (
        <div className="last-Blog">
        <Navbar/>
        <div className="last-Card-Blog">
            <h3 className="last-Card-Title-Blog">Post: {title}</h3>
            <p className="last-content-Blog">{description}</p>
            <p className="last-type-Blog">{category}</p>
            <div className="last-text-Blog">
                <img className="last-img-Blog" src={picture}></img>
                <p className="last-main-Blog">{contentPost}</p>
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