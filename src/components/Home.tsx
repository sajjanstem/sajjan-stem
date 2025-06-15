import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-200 font-[Inter]">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4" data-aos="fade-down">
          Yuva STEM Junior Coder Hunt
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-400" data-aos="fade-up">
          National-level coding challenge for students of classes 6–12. Nurturing future tech leaders in line with NEP 2020.
        </p>
        <div className="mt-6" data-aos="zoom-in">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-8 rounded-lg hover:opacity-90 transition">
            Register Now
          </button>
        </div>
      </header>

      <section className="max-w-5xl mx-auto py-12 px-4 space-y-8">
        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2">Competition Flow</h2>
          <p className="text-gray-400">
            <strong>Level 1</strong>: Aptitude and reasoning round designed to test analytical thinking, logic, and problem-solving.  
            <br />
            <strong>Level 2</strong>: Participants selected from Level 1 attend IIT/IIIT alumni-led masterclasses covering Python, AI, and problem-solving strategies. Post masterclasses, they attempt a hands-on coding test with syntax corrections, logic building, and code output validations.
          </p>
          <div className="mt-4 flex items-center justify-center">
            <span className="border border-yellow-500 text-yellow-500 rounded-md px-4 py-2 text-lg font-semibold">
              ₹50,000+ Prize Pool
            </span>
          </div>
        </div>

        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2">NEP 2020 & Digital Literacy</h2>
          <p className="text-gray-400">
            The National Education Policy (NEP) 2020 underscores the integration of coding and digital literacy as essential components of modern education. With technology influencing every sector, NEP's vision is to prepare students for a digital-first world where coding, critical thinking, and ethical technology use are vital skills.
            <br /><br />
            Digital literacy allows students to navigate and leverage tools responsibly while coding sharpens their problem-solving abilities and logical reasoning from an early age. This competition supports NEP 2020 by offering structured exposure to these skills in an engaging, competitive environment.
          </p>
        </div>

        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2">The Future: Coding + AI</h2>
          <p className="text-gray-400">
            Coding and AI are no longer niche skills — they are foundational to tomorrow’s innovations. As industries evolve with automation, data science, and AI integration, the demand for skilled developers and ethical technologists will only grow. 
            <br /><br />
            Junior Coder Hunt prepares students for this future, offering them a chance to understand not just how to code, but how to think like a developer — approaching problems methodically and building efficient, reliable solutions.
          </p>
        </div>

        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2">Masterclasses: Learn from Experts</h2>
          <p className="text-gray-400">
            The masterclasses are delivered by seasoned IIT/IIIT alumni and cover practical coding patterns, debugging techniques, Python best practices, and an introduction to artificial intelligence. These sessions are hands-on, project-oriented, and designed to bridge the gap between textbook knowledge and industry expectations.
          </p>
        </div>
      </section>

      <footer className="text-center py-12" data-aos="zoom-in">
        <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-3 px-10 rounded-lg hover:opacity-90 transition text-lg">
          Join the ₹50,000+ Challenge
        </button>
      </footer>
    </div>
  );
};

export default Home;
