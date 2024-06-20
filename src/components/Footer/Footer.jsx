import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div id='footer'>
        <ul>
            <li><Link>About</Link></li>
            <li><Link>Contact</Link></li>
            <li><Link>Terms of Service</Link></li>
            <li><Link>FAQ</Link></li>
        </ul>

        <p className='footer-description'>
            HoneyFlix is a ReactJS project created by 
            Benz Samson Tagle that leverages <br /> the OMDB API
            to fetch movie data for the site. I employed my
            expertise to ensure the website is responsive on
            all modern devices. Search for your favorite 
            movie and discover more details about it!
        </p>
    </div>
  )
}
