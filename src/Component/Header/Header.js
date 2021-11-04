import React from 'react'
import Logo from '../../Assets/Logo1-min.png'
import './header.css';

const header = () => {
    return (
        <div class="hero-Image">
            <div class="nav-background">
                <div class="logo">
                    <img src={Logo} alt="Aphrodite logo"/>
                </div>
                <div class="btn-signIn">
                    <button>Sign In</button>
                </div>
            </div> 
            <div class="hero-content">
                <h1>
                    Meet new People and <br/>
                    explore the world <br/>
                    anytime, anywhere!
                </h1>
                <p>
                    Don't have an account yet? Sign Up now and <br/>
                    get up to meet your new partner.
                </p>
                <button>GET STARTED</button>
            </div>
        </div>
    )
}

export default header
