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
    <nav>
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
     <Link to="/portfolio">Portfolio</Link>
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
