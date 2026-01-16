import { useState } from "react";
import "./App.css";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import PortfolioPage from "./components/PortfolioPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav-bar">
        <div className="nav-logo">
          <a><Link to="/">LOGO HOLDER</Link></a>
        </div>
        <div className="nav-links">
          <a><Link to="/">Home</Link></a>
          <a> <Link to="/about">About us</Link></a>
          <a> <Link to="/portfolio">Our Work</Link></a>
          <a> <Link to="/contact">Get a Quote</Link></a>

        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
