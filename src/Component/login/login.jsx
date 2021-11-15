import React from "react";
import "./login.css";
import { Formik } from 'formik';
import Google from '../../Assets/fb-icon.png';
import  Twitter from '../../Assets/twitter-icon.png';
import  Facebook from '../../Assets/fb-icon.png';
import  AproditeLogo from '../../Assets/Logo1-min.png';
// import LoginCouples from '../../Assets/login-couples.png';

const Login = () => {
	return (
		<main className="main">
			<section className="first-section">
				<div id="myImage">
                    <img  src={AproditeLogo} alt="logo"/>
					
				</div>
				<div className="section-text">
					<h1>Its match-up time</h1>
					<p>Swipe through and get matched anywhere</p>
					<p>
						and anytime on <span id="coloured">Aphrodite</span>
					</p>
				</div>
			</section>
			<section className="second-section">
				<div className="sign-card">
				<Formik
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                            errors.email = 'Required';
                            } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                            errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                            // alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            }, 400);
                        }}
                        >
					<form>
						<p id="not-grey">Login to your account to start matching</p>
						<p>Email or Phone number</p>
						<input type="text" />
						<p>Password</p>
						<input type="password" />
						<h6>Forgot Password?</h6>
						<div id="mediaLogin">
							<p id="grey-color">
								Or <span id="not-grey">Login</span> with
							</p>
							<div id="myMediaLogo">
                                <img width="45px" height="45px" src={Twitter} alt="logo"/>
                                <img width="45px" height="45px" src={Google} alt="logo"/>
                                <img width="45px" height="45px" src={Facebook} alt="logo"/>
							
							</div>
						</div>
						<a href="/messages.html">
							<input type="button" value="Sign In" id="in-button" />
						</a>
					</form>
					</Formik>
				</div>
			</section>
		</main>
	);
};

export default Login;
