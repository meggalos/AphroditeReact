
import React from 'react'
import Logo from "../../../Assets/Logo-min.png"
// import "./AboutHeader.css"

 const About_page_header = () => {
    return (
        <div>
            

            <header>
        <div className="container">
            <nav>
                <div className="Logo">
                    <a href="index.html"><img src={ Logo } alt="logo"/></a>
                </div>
                <div><button className="signin-btn"> <a href="login.html" target="_blank">Sign In</a></button></div>
            </nav>
        </div>
         </header>



        </div>
    )
}

export default About_page_header;
