import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/landingPage';
import Verify from  './Pages/verify/Verify'
import './App.css';


function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/verify' element={<Verify />} exact></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;



