import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from './Pages/LandingPage/landingPage';
import './App.css';
import Login from '../src/Component/login/login.jsx';


function App() {
  return (
    <Router>
      <div>
      <Routes>
        {/* <Route path='/' element={<LandingPage />}></Route> */}
        <Route path='/' element={<Login/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;



