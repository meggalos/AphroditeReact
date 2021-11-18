import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/landingPage';
import Verify from  './Pages/verify/Verify'
import './App.css';
import About_us_page from './Pages/AboutPage/About_us_page'; 
import Terms_and_conditions from "./Pages/Terms_and_conditions/Terms_and_Conditions"
// import LandingPage from './Pages/LandingPage/landingPage';
import Login from '../src/Component/login/login.jsx';


function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/verify' element={<Verify />} exact></Route>
        <Route path = "/About_us_page" element = {< About_us_page />}></Route>
        <Route path = "/Terms_and_Conditions.jsx" element = {<Terms_and_conditions />}></Route>
        {/* <Route path='/' element={<LandingPage />}></Route> */}
        <Route path='/' element={<Login/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;



