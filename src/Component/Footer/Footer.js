import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
import About_us_page from '../../Pages/AboutPage/About_us_page';


const Footer = () => {
    const myStyle = {color: 'red', fontSize: '3rem'};
    return (
        <div>
            <div class="footer-one">
                <div class="footer-one-content">
                    <Link className="link" to="/About_us_page">About Us</Link>
                    <Link className="link" to="/">Contact Us</Link>
                    <Link className="link" to="/Terms_and_Conditions.jsx">Terms &#38; Conditions</Link>
                    <Link className="link" to="/">Privacy &#38; Policy</Link>
                </div>
            </div>
            <div class="footer-two">
                <div class="footer-two-content">
                    <p> &copy;2021</p>
                    <p style={myStyle}> <b>Aphrodite</b></p>
                    <p> All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
