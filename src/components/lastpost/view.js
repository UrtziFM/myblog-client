import React from 'react';

import './styles.css';

const LastPostCard = ({title, picture, description, date, views}) => {

    return (
        <div className="last-Card">
            <h3 className="last-Card-Title">{title}Hola</h3>
            <div clasName="last-Card-Box">
            <img src="assets/eguzki.jpeg" className="last-Card-Img" alt="foto"></img>
            <p className="last-content">{description}Holasssndsabfnmbdsbfanmdsbmadbmbma</p>
            <p clasName="last-date">{date}Holass</p>
            <p className="last-views">{views}Holasssssssssssssssss</p>
            </div>
        </div>
    )
}

export default LastPostCard