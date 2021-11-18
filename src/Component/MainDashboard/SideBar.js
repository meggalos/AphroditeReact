import React from 'react';
import "../../Component/MainDashboard/SideBar.css";
import ProfilePic from "../../Assets/Ellipse16-min.png";
import SideBarButton from "../Button/SideBarButton";
import SideBarTabs from "../SideBarTabs/SideBarTabs";
import {BsToggles2} from 'react-icons/bs';


function SideBar () {
    return (
        <div className="sidebar-container">
            <div className='sidebar-profilePic'>
                <div> 
                    <img src={ProfilePic} alt="ProfilePic" />
                </div>
                <div>
                    <p className="profileName">Abdulroqeeb</p>
                    <p>Frontend Developer</p>
                </div>
            </div>
            <div className='sidebar-buttons'>
                <SideBarButton nameOfButton="Edit Profile" />
                <SideBarButton nameOfButton="Premium" />
            </div>
            <div className='sidebar-tabs'>
                <div className='sidebar-editpref'>
                <SideBarTabs nameOfTab="Edit preferences" />
                <BsToggles2 />
                </div>
                <SideBarTabs nameOfTab="Messages" />
                <SideBarTabs nameOfTab="Matched" />
                <SideBarTabs nameOfTab="Liked You" />
            </div>
        </div>
    );
}

export default SideBar;