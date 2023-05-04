import React from 'react';
import { FaFacebookSquare, FaInstagram, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark text-white text-center p-4 mt-5'>
            <div>
                <h1>Follow us on</h1>
                <div className='fs-1 footer-link'>
                    <Link to='https://www.instagram.com/'><FaInstagramSquare/></Link>

                    <Link to='https://www.facebook.com/'><FaFacebookSquare ></FaFacebookSquare></Link>

                    <Link to='https://twitter.com/home'><FaTwitterSquare></FaTwitterSquare></Link>
                    <Link to='https://www.youtube.com/'><FaYoutubeSquare></FaYoutubeSquare></Link>
                </div>
                <div>
                    <p>&copy; All rights reserved to-2023-Kamrul</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;