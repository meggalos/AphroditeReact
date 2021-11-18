import React from 'react';
import HeaderDashboard from '../../Component/Header/HeaderDashboard';
import SideBar from '../../Component/MainDashboard/SideBar';
import MainDisplay from '../../Component/MainDashboard/MainDisplay';
import "./MainDashboard.css";


function MainDashboard () {
    return (
        <div className="maindashboard-container">
            <HeaderDashboard />
            <div className="maindashboard-flex">
                <SideBar />
                <MainDisplay />
            </div>
        </div>
    );
}

export default MainDashboard;