import React from 'react'
import FooterStyle from "./Aboutfooter.module.css"


 function Aboutfooter() {
    return (
        <div>
            

            <div className= {FooterStyle.footer}>
                   
                        <div className={FooterStyle.one}>
                            <ul>
                                <li><a href="Aboutpage">About Us</a></li>
                                <li><a>Contact Us</a></li>
                                <li><a href="Termscon.jsx">Terms &#38; Conditions</a></li>
                                <li><a href="Privacy.jsx">Privacy Policy</a></li>
                                <li><a href="askequestion.jsx">FQAs</a></li>
                            </ul>
                        </div>
                        <div className={FooterStyle.lastcontent}>
                            <p>&copy;2021</p>
                            <h2>Aphrodite</h2>
                            <p>All Rights Reserved</p>
                        </div>

             </div>



        </div>
    )
}


export default Aboutfooter;
