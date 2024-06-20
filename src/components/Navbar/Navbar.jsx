import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { Search } from "../Search/Search"
export const Navbar = () => {
  return (
    <div id='navbar'>
        <Link to="/">
          <h1 className='logo-name'>HoneyFlix</h1>
        </Link>
        <ul className='navbar-ul'>
            <li><a href="">Series</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">Shows</a></li>
            <li><a href="">Film</a></li>
            <li><a href="">Corn</a></li>
            <li><a href="">Anime</a></li>
            <li><a href="">Sepnu</a></li>
        </ul>
        
        <div className='navbar-right'>
          <Search />
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="#e8eaed"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="#e8eaed"><path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/></svg>        </div>
    </div>
  )
}
