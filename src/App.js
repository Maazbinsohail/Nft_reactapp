import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/home";
import Project from "./pages/Project/project"
import { Routes , Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import TermsAndConditon from './pages/terms/TermsAndConditon';


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/Projects" element = {<Project/>}/>
      <Route path= '/About' element =  {<About/>}/>
      <Route path = "/Contact" element = {<Contact/>}/>
      <Route path = "/terms-and-condition" element = {<TermsAndConditon/>}/> 
    </Routes>

    <Footer/>
    </>
    
  )
}

export default App
