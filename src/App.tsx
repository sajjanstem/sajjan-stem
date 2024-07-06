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

function App() {
  return (
    <div className="app">
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/logoIconWhite.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="Yuva STEM Organisation" content="Yuva STEM Organisation" />
        <meta name="keywords" content="Yuva STEM, STEM Genius Hunt, STEM Examination, Yuva stem, Science Technology Engineering Mathematics, Student Competitions, Karthik Sajjan, Project-Based Learning" />
        <meta name="description" content="Yuva STEM Organisation" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logoIconWhite.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Yuva STEM Organisation</title>
      </Helmet>
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
