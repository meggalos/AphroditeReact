import React from 'react'
import './section1.css';
import Laptop from '../../Assets/laptop-min.png';

const Section1 = () => {
    return (
        <div className='section-one'>
             <h2>
            Strike a Conversation from <br/>
            the comfort of your home
            </h2>
            <p>
                Meeting People should not be a<br/>
                very hard task
            </p>
            <div className="laptop-love-img">
                <img src={Laptop} alt="love"/>
            </div>
            <div className='section-two'></div>
        </div>
    )
}

export default Section1
