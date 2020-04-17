import React from 'react';
import LastPostCard from '../lastpost';
import PostList from '../../constants/PostList'

import './styles.css';

const PostListCard = () => {

    return (
        <div>
            <h3 className= "PostList-Title"> Lista con todos mis Post</h3>
        <div>
         {PostList.map((PostList, i) => {
           return (
             <LastPostCard
               key={i}
               title={PostList.title}
               description={PostList.description}
               date={PostList.date}
               views={PostList.views}
             />
           );
         })}
       </div>
     </div>
 
    )
}

export default PostListCard