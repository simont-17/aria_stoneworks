import { useState } from 'react'
import './App.css'
import AboutPage from './components/AboutPage'
import ContactPage from'./components/ContactPage'
import HomePage from './components/HomePage'
import PortfolioPage from './components/PortfolioPage'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <nav className='nav-bar'>
     <Link to="/">Home</Link>
     <Link to="/about">About us</Link>
     <Link to="/portfolio">Our Work</Link>
     <Link to="/contact">Get a Quote</Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage/> }/>
      <Route path="/about" element={<AboutPage/> }/>
      <Route path="/contact" element={<ContactPage/> }/>
      <Route path="portfolio" element={<PortfolioPage/> }/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
