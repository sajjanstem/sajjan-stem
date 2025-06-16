import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Header from './components/Header/Header';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Stem from './components/Exams/Stem';
import './App.css';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="app">
     <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/logoIconWhite.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      
      <meta name="author" content="Yuva STEM Organisation" />
      <meta name="keywords" content="
        Yuva STEM, 
        Yuva STEM Organisation, 
        Yuva STEM Org, 
        Yuva STEM Coding Exam, 
        Yuva STEM Junior Coder Hunt, 
        Junior Coder Hunt, 
        Junior Coder Hunt Exam, 
        Coding Competition for School Students, 
        STEM Competitions India, 
        Coding Contest for Kids, 
        Student Coding Challenge, 
        School Level Coding Exam, 
        STEM for Classes 6 to 12, 
        Python Masterclass for Students, 
        AI Masterclass for Students
      " />
      
      <meta 
        name="description" 
        content="Yuva STEM Organisation empowers school students through Junior Coder Hunt — a coding and STEM competition designed to inspire future tech innovators in India." 
      />
      
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logoIconWhite.png" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <title>Yuva STEM | Junior Coder Hunt</title>
    </Helmet>

      <CustomCursor />
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exams" element={<Stem />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
