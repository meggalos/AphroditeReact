import React from 'react'
import sectionOne from './sectionOne.module.css';
import Laptop from '../../Assets/laptop-min.png';

const Section1 = () => {
    return (
        <div className={sectionOne.sectionOne}>
             <h2 className={sectionOne.sectionOneH2}>
            Strike a Conversation from <br/>
            the comfort of your home
            </h2>
            <p className={sectionOne.sectionOneP}>
                Meeting People should not be a<br/>
                very hard task
            </p>
            <div>
                <img className={sectionOne.laptopImg} src={Laptop} alt="love"/>
            </div>
            <div className={sectionOne.sectionTwo}></div>
        </div>
    )
}

export default Section1
