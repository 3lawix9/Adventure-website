import React from 'react';
import './App.css';
import Navbar from './Compo/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Compo/Pages/Home';
import Products from './Compo/Pages/Products';
import Services from './Compo/Pages/Services';
import Signup from './Compo/Pages/Signup';


function App() {
  return (
    <>
    <Router>
       <Navbar/> 
       <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/products" element={<Products/>} />
       <Route path="/services" element={<Services/>} />
       <Route path="/sign-up" element={<Signup/>} />
       </Routes>
    </Router>
      
      </>
  );
}

export default App;
