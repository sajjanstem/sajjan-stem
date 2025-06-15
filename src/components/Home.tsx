import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-200 font-[Inter] relative overflow-hidden">
      <Helmet>
        <title>Yuva STEM Organisation - Home</title>
        <meta
          name="description"
          content="Yuva STEM Organisation - Unleashing the Young Leaders in STEM. Learn about our Junior Coder Hunt Examination and how we nurture young minds in STEM subjects."
        />
        <meta name="description" content="Yuva STEM Organisation - Unleashing the Young Leaders in STEM through the Junior Coder Hunt Examination for classes 6 to 10." />
        <meta name="keywords" content="Yuva STEM, Junior Coder Hunt, yuva stem, yuva Junior Coder Hunt, STEM Education, Science Technology Engineering Mathematics, Student Competitions, junior coding exams" />
        <meta name="author" content="Yuva STEM Organisation" />
      </Helmet>
      <div className="text-center py-12 border-b border-gray-700">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2" data-aos="fade-down">
          Yuva STEM Organisation
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-4" data-aos="fade-down">
          Junior Coder Hunt
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-400" data-aos="fade-up">
          Think. Solve. Code. Win. | Empowering Next Generation of Innovators, Coders, Critical Thinkers
        </p>
        <div className="mt-6" data-aos="zoom-in">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-8 rounded-lg hover:opacity-90 transition">
            Register Now
          </button>
        </div>
      </div>

      <section className="max-w-5xl mx-auto py-12 px-4 space-y-8">
        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative w-full md:w-[35%] order-2 md:order-1" data-aos="fade-left" data-aos-delay="200">
              <img
                src={process.env.PUBLIC_URL + "/assets/roboface.jpg"}
                alt="AI and Coding Innovation"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
            </div>
            <div className="w-full md:w-[65%] order-1 md:order-2" data-aos="fade-right" data-aos-delay="200">
          <h2 className="text-2xl font-bold mb-2">🌟 Empowering the Coders of Tomorrow</h2>
          <p className="text-gray-400">
            YuvaStem is a visionary organization committed to building digital literacy, coding skills, AI awareness, and financial literacy among India’s youth. Rooted in NEP 2020 principles, we aim to bridge the gap between school learning and 21st-century skills.
          </p>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2">🚀 Introducing Jr Coder Hunt Exam 2025</h2>
          <p className="text-gray-400">
            💡 A talent hunt for classes 6-10, designed to spark curiosity and technical skills.<br /><br />
            👑 Two levels of challenge:<br />
            <strong>LEVEL 1:</strong> Reasoning + Aptitude Test — Logical reasoning, pattern recognition, problem-solving, equal opportunity for all regardless of coding background, familiar NTSE/Olympiad style exam (online MCQ format).<br /><br />
            <strong>LEVEL 2:</strong> Coding with Python + AI Concepts — FREE masterclasses by IIT/IIIT alumni & IT industry leaders, hands-on coding challenges, online exam testing Python fundamentals + basic AI problem solving.
          </p>
        </div>

        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2">🏆 Prizes & Recognition</h2>
          <p className="text-gray-400">
            ₹50,000+ cash pool for national winners, trophies + certificates for top students & schools, digital badges and national ranking to showcase talent and achievement.
          </p>
          <div className="mt-4 flex items-center justify-center">
            <span className="border border-yellow-500 text-yellow-500 rounded-md px-4 py-2 text-lg font-semibold">
              ₹50,000+ Cash Pool
            </span>
          </div>
        </div>

        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2">🤝 Why Join Jr Coder Hunt?</h2>
          <p className="text-gray-400">
            ✅ Build logical and computational thinking<br />
            ✅ Free mentorship and masterclasses from IIT / IIIT alumni + top IT professionals<br />
            ✅ National recognition + cash awards<br />
            ✅ Aligned with NEP 2020 — promotes coding, AI, digital and financial literacy<br />
            ✅ Platform for all — rural, urban, private, government school students
          </p>
        </div>

        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2">🌱 About YuvaStem</h2>
          <p className="text-gray-400">
            🎯 <strong>Our Vision:</strong> To democratize coding and digital literacy education, empowering young minds to lead India’s digital future.<br /><br />
            🎯 <strong>Our Mission:</strong> Promote 21st century skills (coding, AI, digital & financial literacy), provide equitable learning platforms, inspire innovation and critical thinking in every child.
          </p>
        </div>

        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2">👨‍💻 Who mentors YuvaStem participants?</h2>
          <p className="text-gray-400">
            Advisory panel of IT Directors & senior tech leaders (20+ years experience). Mentors who are alumni of IITs, IIITs, NITs, IISc.
          </p>
        </div>

        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2">📣 How It Works</h2>
          <p className="text-gray-400">
            1️⃣ Register via YuvaStem website (individuals or schools)<br />
            2️⃣ Take Level 1 reasoning + aptitude exam online<br />
            3️⃣ Get shortlisted and attend free masterclasses<br />
            4️⃣ Take Level 2 coding + AI exam<br />
            5️⃣ Win cash prizes, certificates & national recognition
          </p>
        </div>
      </section>

      <div className="text-center py-12 border-t border-gray-700" data-aos="zoom-in">
        <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-3 px-10 rounded-lg hover:opacity-90 transition text-lg">
          Join the ₹50,000+ Challenge
        </button>
        <p className="text-gray-500 mt-4 italic">
          Think. Solve. Code. Win. — Your logic today, your AI future tomorrow!
        </p>
      </div>
    </div>
  );
};

export default Home;