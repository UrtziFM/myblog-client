import React from 'react';

import './styles.css';

const LastPostCard = ({title, picture, description, date, views}) => {

    return (
        <div className="last-Card">
            <h3 className="last-Card-Title">Último Post: {title}</h3>
            <p className="last-content">{description}Holasssndsabfnmbdsbfanmdsbmadbmbma</p>
            <div className="last-footer">
            <p className="last-date">Día: {date}13-02-20</p>
            <p className="last-views">Views: {views}10.000</p>
            </div>
        </div>
    )
}

export default LastPostCard