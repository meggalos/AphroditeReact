import React from 'react';
import "./headerDashboard.css";   
import Logo from "../../Assets/Logo-min.png";
import {HiArrowNarrowLeft} from "react-icons/hi";
// import logo from "../../assets/logo.png";



const Header = () => {
    return (
       <div className="header-container">
           <div className="header-left">
                <img src={Logo} alt = "Logo pic" />
           </div>

           <div className="header-right">
               <HiArrowNarrowLeft />
               <p>sign out</p>
           </div>

       </div>
    );
}

export default Header;