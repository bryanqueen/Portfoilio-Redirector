import React from 'react'
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Stacks from './pages/Stacks';
import Startups from './pages/Startups';


function App() {
  return (
  <div>
  <Routes>
    <Route index element={<Home/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/stacks' element={<Stacks/>}/>
    <Route path='/startups' element={<Startups/>}/>
  </Routes>
  </div>
  );
}

export default App;
