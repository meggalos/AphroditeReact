import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/landingPage';
import './App.css';


function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;



