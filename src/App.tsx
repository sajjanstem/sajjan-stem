import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Header from './components/Header/Header';
import ExamsHome from './components/Exams/ExamsHome';
import Syllabus from './components/Syllabus';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Maths from './components/Exams/Maths';
import Science from './components/Exams/Science';
import Stem from './components/Exams/Stem';


function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/aboutus" element={<AboutUs/>} />
              <Route path="/exams" element={<Stem/>} />
              <Route path="/maths" element={<Maths/>} />
              <Route path="/science" element={<Science/>} />
              <Route path="/stem" element={<Stem/>} />
              <Route path="/syllabus" element={<Syllabus/>} />
              <Route path="/contactus" element={<ContactUs/>} />
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;
