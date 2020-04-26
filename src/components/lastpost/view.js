import React from 'react';

import './styles.css';

const LastPostCard = ({title, description, date, views}) => {

    return (
        <div className="last-Card">
            <h3 className="last-Card-Title">{title}</h3>
            <p className="last-content">{description}</p>
            <div className="last-footer">
            <p className="last-date">Día: {date}</p>
            <p className="last-views">Views: {views}</p>
            </div>
        </div>
    )
}

export default LastPostCard