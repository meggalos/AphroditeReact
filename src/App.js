import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/landingPage';
import './App.css';
import About_us_page from './Pages/AboutPage/About_us_page'; 
import Terms_and_conditions from "./Pages/Terms_and_conditions/Terms_and_Conditions"


function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path = "/About_us_page" element = {< About_us_page />}></Route>
        <Route path = "/Terms_and_Conditions.jsx" element = {<Terms_and_conditions />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;



