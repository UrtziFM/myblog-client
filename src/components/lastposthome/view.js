import React from 'react';

import PostList from '../../constants/PostList'


import './styles.css';

const LastPostHome = () => {

    return (
        <div className="lasthome-Card">
            <h3 className="lasthome-Card-Title">{PostList[0].title}</h3>
            <p className="lasthome-category">{PostList[0].category}</p>
            <p className="lasthome-content">{PostList[0].description}</p>
            <div className="lasthome-footer">
            <p className="lasthome-date">Día: {PostList[0].date}</p>
            <p className="lasthome-views">Views: {PostList[0].views}</p>
            </div>
        </div>   
    )
}

export default LastPostHome