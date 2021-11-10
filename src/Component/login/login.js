import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"
// import LoginCouples from '../../Assets/login-couples.png';
import Google from '../../Assets/fb-icon.png';
import  Twitter from '../../Assets/twitter-icon.png';
import  Facebook from '../../Assets/fb-icon.png';
import  AproditeLogo from '../../Assets/Logo1-min.png';



const Login = () => {
    return (
        <div>
            <Container>
                <FirstContainer style={{backgroundImage: "url({LoginCouples})"}}>
                    {/* <img src= alt="logo"/> */}
                    <img src={AproditeLogo} alt="logo"/>
                    <h2>Its match- up time</h2>
                    <p>swipe through and get matched anywhere and anytime on <span style={{color:"red"}}>Aphrodite</span></p>
                </FirstContainer>
                <SecondContainer>
                    <p>Login in to your account to start matching</p>
                    <Small>Email or Phone number</Small>
                    <input/>
                    <Small>Password</Small>
                    <input/>
                    <Small>Forgot Password?</Small>
                    <Small>Or <span>Login</span> with</Small>
                    <Container>
                        <Link to="/login">
                            <img src={Twitter} alt="logo"/>
                        </Link> 
                        <Link to="/login">
                            <img src={Facebook} alt="logo"/>
                        </Link> 
                        <Link to="/login">
                            <img src={Google} alt="logo"/>
                        </Link>  
                    </Container>
                    <Button>Sign In</Button>
                </SecondContainer>
            </Container>
        </div>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
`
const FirstContainer = styled.div`
    flex:1;
    background-image: url("LoginCouples");
`
const SecondContainer = styled.div`
    flex: 1;
`
const Small = styled.div`
    font-size: 8px;
    color: #525252;
`
const Button = styled.div`
    background-color: #FF0000;
    border-radius: 35px;
    max-width: 250px;
    min-height: 60px;
    font-weight: 400;
    font-size: 1.25rem;
    border: none;
    cursor: pointer;
    `
export default Login
