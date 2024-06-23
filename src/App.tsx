import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Header from './components/Header/Header';
import ExamsHome from './components/Exams/ExamsHome';
import Syllabus from './components/Syllabus';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Maths from './components/Exams/Maths';
import Science from './components/Exams/Science';
import Stem from './components/Exams/Stem';
import './App.css';  // Ensure you import your CSS file

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/exams" element={<Stem />} />
            <Route path="/contactus" element={<ContactUs />} />
            {/* <Route path="/maths" element={<Maths />} /> */}
            {/* <Route path="/science" element={<Science />} /> */}
            {/* <Route path="/stem" element={<Stem />} /> */}
            {/* <Route path="/syllabus" element={<Syllabus />} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
