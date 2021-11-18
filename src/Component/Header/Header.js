import React from 'react'
import Logo from '../../Assets/Logo1-min.png'
import './header.css';
import { Link } from 'react-router-dom';
import Login from './../login/login';

const header = () => {
    return (
        <div className={headerOne.heroImage}>
            <div className={headerOne.navBackground}>
                <div>
                    <img className={headerOne.logo} src={Logo} alt="Aphrodite logo"/>
                </div>
                <div>
                  <Link to={<Login />}> <button className={headerOne.btnSignIn}>Sign In</button> </Link> 
             </div>
            </div> 
            <div className={headerOne.heroContent}>
                <h1 className={headerOne.heroH1}>
                    Meet new People and <br/>
                    explore the world <br/>
                    anytime, anywhere!
                </h1>
                <p className={headerOne.heroPara}>
                    Don't have an account yet? Sign Up now and <br/>
                    get up to meet your new partner.
                </p>
                <Link to="/signup">
                <button className={headerOne.heroGetStarted}>GET STARTED</button>
                </Link> 
            </div>
        </div>
    )
}

export default header
