import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import PortfolioPage from "./components/PortfolioPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/FooterBar";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import { BrowserRouter} from "react-router-dom";


function App() {
  return (
    
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
