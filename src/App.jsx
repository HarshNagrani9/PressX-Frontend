
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import {BrowserRouter, Routes , Route } from 'react-router-dom'
import About from './Pages/About.jsx'
import ContatcUs from './Pages/ContatcUs.jsx'
import Home from './Pages/Home.jsx'
import HowItWorks from './Pages/HowItWorks.jsx'
import LoginSignUp from './Pages/LoginSignUp.jsx'
import OurTeam from './Pages/OurTeam.jsx'
import Contact from './Pages/Contact.jsx'
import { useState } from "react";
import Login from './Pages/Maintenance.jsx'
import Services from './Pages/Services.jsx'

function App() {
  return (

    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path= "/" element={<Home category='home'/>} />
        <Route path= "/about" element={<About  category="about" />} />
        <Route path= "/ourTeam" element={<OurTeam  category="ourTeam" />} />
        <Route path= "/howItWorks" element={<HowItWorks  category="howItWorks" />} />
        <Route path= "/Contact" element={<Contact category="Contact"/>} />
        <Route path= "/Login" element={<Login />} />
        <Route path="/Services" element={<Services/>}/>
       </Routes>
      </BrowserRouter>
      
      
    </div>

  );
}

export default App
