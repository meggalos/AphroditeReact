import React from 'react';
// import Header from '../../components/Header/Header';
import "../../Component/MainDashboard/MainDisplay.css";
import MainDisplayImage from "../../Assets/manpix-min.png";
import { FaHeart } from "react-icons/fa";

function MainDashboard () {
    return (
        <div className="maindisplay-container">
            <div>
                <div className="mainDisplay-image">
                  <img src={MainDisplayImage} alt="Match Display" />
                  <div className="mainDisplay-icon">
                    <p>Back</p>
                    <p><FaHeart /></p>
                    <p>Next</p>
                  </div>
                </div>
            </div>
            <div className="bio-display">
                <div className="first-paragraph">
                    <h2>Armstrong E., 27</h2>
                    <p>Frontend Developer</p>
                    <p>Lagos, Nigeria.</p>
                </div>
                <div className="second-paragraph">
                    <h2>Bio.</h2>
                    <p>I love the concept of love and I am open to getting my heart broken.</p>
                </div>
                <div className="third-paragraph">
                    <h2>About</h2>
                    <p>Religion: Christian.</p>
                    <p>Political Affiliation: APC.</p>
                    <p>Exercise: Don't Workout.</p>
                    <p>Kids: No Kids.</p>
                    <p>Alcohol: Don't Drink.</p>
                </div>
            </div>
        </div>
    );
}

export default MainDashboard;