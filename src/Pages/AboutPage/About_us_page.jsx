import React from 'react'
import About_Header from "../../Component/ekemini_about_us_pages/ekemini_about_us_page_header/AboutUsHeader"
import About_Section_1 from "../../Component/ekemini_about_us_pages/ekemini_about_us_page_section_1/About_page_section_1"
import About_Section_2 from "../../Component/ekemini_about_us_pages/ekemini_about_us_page_section_2/About_page_section_2"
import About_Footer from "../../Component/ekemini_about_us_pages/ekemini_about_us_page_footer/AboutUs";


 function About_us_page() {
     console.log("About us", About_Section_2 )

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