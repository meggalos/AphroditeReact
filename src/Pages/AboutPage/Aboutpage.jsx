import React from 'react'

import About_Header from "../../Component/aboutus/aboutusheader/AboutHeader"
import About_Section_1 from "../../Component/aboutus/aboutsectionone/Aboutsectionone"
import About_Section_2 from "../../Component/aboutus/aboutsectiontwo/Aboutsectiontwo"
import About_Footer from "../../Component/aboutus/aboutfooter/Aboutfooter"


 function About_us_page() {
    //  console.log("About us", About_Section_2 )

    return (
        <div>

            <About_Header />
            <About_Section_1 />
            <About_Section_2 />
            <About_Footer />


            
        </div>
    )
}


export default About_us_page; 