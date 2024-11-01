import React from 'react';
import logo from '../../netflix.png';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <nav className='header'>
        <img src={logo} alt="logo" />
        <div>
            <Link to = "/tvShows">TV Shows</Link>
            <Link to = "/tvShows">Movies</Link>
            <Link to = "/tvShows">Recently Viewed</Link>
            <Link to = "/tvShows">List</Link>
        </div>
        <IoSearchOutline />
    </nav>
)
}

export default Header