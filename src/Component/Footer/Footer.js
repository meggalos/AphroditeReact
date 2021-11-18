import React from 'react'
import { Link } from 'react-router-dom';
// import About_us_page from '../../Pages/AboutPage/About_us_page';
// import About_us_page from '../../Pages/AboutPage/Aboutpage';
import footer from './footer.module.css'
// import About_us_page from '../../Pages/AboutPage/Aboutpage';


const footerSection = () => {
    const myStyle = {color: 'red', fontSize: '3rem'};
    return (
        <div>
            <div className={footer.footerOne}>
                <div className={footer.footerOneContent}>
                    <Link className={footer.link} to="/Aboutpage">About Us</Link>
                    <Link className={footer.link} to="/">Contact Us</Link>
                    <Link className={footer.link} to="/Termscon.jsx">Terms &#38; Conditions</Link>
                    <Link className={footer.link} to="/">Privacy &#38; Policy</Link>
                    <Link className={footer.link}  to="/askequestion.jsx">FAQs</Link>
                </div>
            </div>
            <div class={footer.footerTwo}>
                <div class={footer.footerTwoContent}>
                    <p> &copy;2021</p>
                    <p style={myStyle}> <b>Aphrodite</b></p>
                    <p> All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default footerSection
