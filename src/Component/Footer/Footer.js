import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
// import About_us_page from '../../Pages/AboutPage/About_us_page';
// import About_us_page from '../../Pages/AboutPage/Aboutpage';


const Footer = () => {
    const myStyle = {color: 'red', fontSize: '3rem'};
    return (
        <div>
            <div class="footer-one">
                <div class="footer-one-content">
                    <Link className="link" to="/AboutPage">About Us</Link>
                    <Link className="link" to="/">Contact Us</Link>
                    <Link className="link" to="/Termscon.jsx">Terms &#38; Conditions</Link>
                     {/* new */}
                    <Link className="link" to="/Privacy.jsx">Privacy &#38; Policy</Link>
                    <Link className="link" to="/askequestion.jsx">FAQs</Link>
                   
                    
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
