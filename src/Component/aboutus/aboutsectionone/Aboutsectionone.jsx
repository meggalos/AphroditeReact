import React from 'react'
import AboutSec from "./Aboutsectionone.module.css"

 function Aboutsectionone() {
    return (
        <div>
            
            <div className={AboutSec.About_main_container} >
                <div className= {AboutSec.About_container}>

                    <div className={AboutSec.About_main_section}>
                        <div>
                            <h1>Know more about Aphrodite</h1>
                            <p>If you are trying to get to know us better, you have come to the right place. This is aphrodite at a glance.
                            </p>
                            <button className={AboutSec.signupbtn}><a href="Sign-up.html" >Get Started</a></button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
export default Aboutsectionone;

