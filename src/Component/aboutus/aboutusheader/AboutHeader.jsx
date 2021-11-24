
import React from 'react'
import Logo from "../../../Assets/Logo-min.png"
import NameBar from "./AboutHeader.module.css"

 const About_page_header = () => {
    return (
        <div>
            

            <header>
        <div className= {NameBar.container}>
                    <div className={NameBar.nav}>
                <div className= {NameBar.Logo} >
                    <a href="index.html"><img src={ Logo } alt="logo"/></a>
                </div>
                <div><button className={NameBar.signinbtn}> <a href="login.html" target="_blank">Sign In</a></button></div>
            </div>
        </div>
         </header>



        </div>
    )
}

export default About_page_header;
