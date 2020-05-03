import React from 'react';

import PostList from '../../constants/PostList'


import './styles.css';

const LastPostHome = () => {

    return (
        <div className="lasthome-Card">
            <h3 className="last-Card-Title">{PostList[0].title}</h3>
            <p className="last-category">{PostList[0].category}</p>
            <p className="last-content">{PostList[0].description}</p>
            <div className="last-footer">
            <p className="last-date">Día: {PostList[0].date}</p>
            <p className="last-views">Views: {PostList[0].views}</p>
            </div>
        </div>   
    )
}

export default LastPostHome