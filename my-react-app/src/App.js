import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes,Route } from 'react-router-dom';
import Home from './componet/Home';
import About from './componet/About';
import Service from './componet/Service';
import Navbar from './componet/Navbar';

const App = () => {
  return (
    <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/service" element={<Service />} />
    <Route path="/about" element={<About />} />
  </Routes>
    </>
  );
}

export default App;
