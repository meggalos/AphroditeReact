import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/landingPage';
import Verify from  './Pages/verify/Verify'
import './App.css';
import About_us_page from './Pages/AboutPage/Aboutpage'; 
import Terms_and_conditions from "./Pages/termscondPage/Termscon"
import Aske_Question from "./Pages/Askequestionpage/askequestion"
// import LandingPage from './Pages/LandingPage/landingPage';
import Login from '../src/Component/login/login.jsx';


function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path = "/Aboutpage" element = {< About_us_page />}></Route>
        <Route path = "/Termscon.jsx" element = {<Terms_and_conditions />}></Route>
        <Route path = "/askequestion.jsx" element = {<Aske_Question />}></Route>
        <Route path='/verify' element={<Verify />} exact></Route>
        {/* <Route path='/' element={<LandingPage />}></Route> */}
        <Route path='/' element={<Login/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;



