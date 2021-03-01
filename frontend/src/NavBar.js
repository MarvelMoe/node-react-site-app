import React from 'react';
import {Link} from 'react-router-dom';
import {  MenuItem, Menu, Typography } from '@material-ui/core';


const preventDefault = event => event.preventDefault();

const NavBar = () => {
    

    return (
        <>
        <nav>
        <ul>
            <li>
            <Link  to="/" >Home</Link>
            </li>
            <li>
            <Link  to="/about" >About</Link> 
            </li>
            <li>
            <Link  to="/artciles" >Articles</Link>
            </li>
        </ul>
        </nav>
                   
        </>
    )
}

export default NavBar;