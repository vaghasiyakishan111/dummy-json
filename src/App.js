import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './component/Home';
import React from "react";
import logo from './logo.svg';
import Header from './component/Header';
import Getsinglrpage from './component/Getsinglrpage';

function App() {
  return (
    <>
    
       <Routes>
       <Route path="/" element={ <Home/> } />
      <Route path="/:id" element={ <Getsinglrpage/> } />



      </Routes>
    </>
  );
}

export default App;
