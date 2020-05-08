import React from 'react';
import Card from 'react-bootstrap/Card'
import { animateScroll as scroll } from "react-scroll";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { useHistory } from 'react-router-dom';

import PostList from '../../constants/PostList'


import Navbar from '../../components/navbar'

import './styles.css';

const scrollToTop = () => {
    scroll.scrollToTop();
};

const PostListBlog = () => {
    const history = useHistory();
    
    return (
        <div className="list-Blog">
        <Navbar/>
        <div className="list-Card-Blog">
            <Card.Img variant="top" src="assets/bloglogo.jpg" />
            <h3 className="list-Card-Title-Blog">Aqui tienes la lista completa de mis Post</h3>
                <MDBDropdown size="sm" className="list-main-Blog">
                    <MDBDropdownToggle caret color="danger" className="list-title">
                        {PostList[2].title}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="danger" className="list-text">
                        <MDBDropdownItem className="list-item">{PostList[2].category}</MDBDropdownItem>
                        <MDBDropdownItem className="list-item">{PostList[2].date}</MDBDropdownItem>
                        <MDBDropdownItem className="list-item" onClick={()=> history.push('/selectedpost_1')}>>Leer</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown size="sm" className="list-main-Blog">
                    <MDBDropdownToggle caret color="danger" className="list-title">
                        {PostList[1].title}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="danger" className="list-text">
                        <MDBDropdownItem className="list-item">{PostList[1].category}</MDBDropdownItem>
                        <MDBDropdownItem className="list-item">{PostList[1].date}</MDBDropdownItem>
                        <MDBDropdownItem className="list-item" onClick={()=> history.push('/selectedpost_2')}>>Leer</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown size="sm" className="list-main-Blog">
                    <MDBDropdownToggle caret color="danger" className="list-title">
                        {PostList[0].title}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="danger" className="list-text">
                        <MDBDropdownItem className="list-item">{PostList[0].category}</MDBDropdownItem>
                        <MDBDropdownItem className="list-item">{PostList[0].date}</MDBDropdownItem>
                        <MDBDropdownItem className="list-item" onClick={()=> history.push('/lastpost')}>>Leer</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
            <a className="listscrollUp" onClick={scrollToTop}>To Top</a>
            </div>
            <div className="list-line"></div>
        </div>
    
    )
}

export default PostListBlog