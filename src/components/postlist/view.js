import React from 'react';
import { useState } from 'react'
import LastPostCard from '../lastpost';
import PostList from '../../constants/PostList'
import Carousel from 'react-bootstrap/Carousel'

import './styles.css';

function PostListCard() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
            <h3 className= "PostList-Title"> Aquí el resto de mis Posts</h3>
    <Carousel activeIndex={index} onSelect={handleSelect}>
    {PostList.map((PostList, i) => {
           return (
      <Carousel.Item>
          <LastPostCard
                key={i}
               title={PostList.title}
               description={PostList.description}
               date={PostList.date}
               views={PostList.views}
            
        />
      </Carousel.Item>
           );
    })}
    </Carousel>
    </div>
  );
}

export default PostListCard
/*
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
*/

