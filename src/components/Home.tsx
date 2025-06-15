import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-200 font-inter relative overflow-hidden">
      <Helmet>
        <title>Yuva STEM Organisation - Junior Coder Hunt</title>
        <meta
          name="description"
          content="Yuva STEM Organisation empowers young leaders in STEM through the Junior Coder Hunt for classes 6–10, fostering coding and innovation."
        />
        <meta
          name="keywords"
          content="Yuva STEM, Junior Coder Hunt, yuva stem, yuva Junior Coder Hunt, STEM Education, Science Technology Engineering Mathematics, Student Competitions, junior coding exams"
        />
        <meta
          name="author"
          content="Yuva STEM Organisation"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[40vh] py-6 px-2 sm:px-4 font-poppins">
        <div className="text-center max-w-5xl mx-auto space-y-2">
          <div
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Yuva STEM Organisation
          </div>
          <div
            className="text-xl sm:text-2xl md:text-3xl font-bold"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Junior Coder Hunt
          </div>
          <div
            className="text-xs sm:text-sm md:text-base text-gray-400"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Think. Solve. Code. Win. | Empowering Next Generation of Innovators, Coders, Critical Thinkers
          </div>
          <div className="mt-4" data-aos="zoom-in" data-aos-delay="400">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-8 rounded-lg hover:opacity-90 transition duration-300">
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto py-12 px-2 sm:px-4 space-y-8 font-inter">
        {/* Empowering Coders Section */}
        <div
          className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-[35%] order-2 md:order-1" data-aos="fade-left" data-aos-delay="200">
              <img
                src={process.env.PUBLIC_URL + "/assets/roboface.jpg"}
                alt="AI and Coding Innovation"
                className="w-full h-48 object-cover object-center rounded shadow-md"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-[65%] order-1 md:order-2 space-y-2" data-aos="fade-right" data-aos-delay="200">
              <div className="text-2xl md:text-3xl font-bold">🌟 Empowering the Coders of Tomorrow</div>
              <div className="text-sm md:text-base text-gray-400">
                YuvaStem is a visionary organization committed to building digital literacy, coding skills, AI awareness, and financial literacy among India’s youth. Rooted in NEP 2020 principles, we aim to bridge the gap between school learning and 21st-century skills.
              </div>
            </div>
          </div>
        </div>

        {/* Jr Coder Hunt Exam Section */}
        <div
          className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6"
          data-aos="fade-up"
        >
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold">🚀 Introducing Jr Coder Hunt Exam 2025</div>
            <div className="text-sm md:text-base text-gray-400">
              💡 A talent hunt for classes 6-10, designed to spark curiosity and technical skills.<br /><br />
              👑 Two levels of challenge:<br />
              <span className="font-semibold">LEVEL 1:</span> Reasoning + Aptitude Test — Logical reasoning, pattern recognition, problem-solving, equal opportunity for all regardless of coding background, familiar NTSE/Olympiad style exam (online MCQ format).<br /><br />
              <span className="font-semibold">LEVEL 2:</span> Coding with Python + AI Concepts — FREE masterclasses by IIT/IIIT alumni & IT industry leaders, hands-on coding challenges, online exam testing Python fundamentals + basic AI problem solving.
            </div>
          </div>
        </div>

        {/* Prizes & Recognition Section */}
        <div
          className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6"
          data-aos="fade-up"
        >
          <div className="space-y-4">
            <div className="text-2xl md:text-3xl font-bold">🏆 Prizes & Recognition</div>
            <div className="text-sm md:text-base text-gray-400">
              ₹50,000+ cash pool for national winners, trophies + certificates for top students & schools, digital badges and national ranking to showcase talent and achievement.
            </div>
            <div className="flex justify-center">
              <span className="border border-yellow-500 text-yellow-500 rounded-md px-4 py-2 text-sm md:text-base font-semibold">
                ₹50,000+ Cash Pool
              </span>
            </div>
          </div>
        </div>

        {/* Why Join Section */}
        <div
          className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6"
          data-aos="fade-up"
        >
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold">🤝 Why Join Jr Coder Hunt?</div>
            <div className="text-sm md:text-base text-gray-400">
              ✅ Build logical and computational thinking<br />
              ✅ Free mentorship and masterclasses from IIT / IIIT alumni + top IT professionals<br />
              ✅ National recognition + cash awards<br />
              ✅ Aligned with NEP 2020 — promotes coding, AI, digital and financial literacy<br />
              ✅ Platform for all — rural, urban, private, government school students
            </div>
          </div>
        </div>

        {/* About YuvaStem Section */}
        <div
          className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6"
          data-aos="fade-up"
        >
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold">🌱 About YuvaStem</div>
            <div className="text-sm md:text-base text-gray-400">
              🎯 <span className="font-semibold">Our Vision:</span> To democratize coding and digital literacy education, empowering young minds to lead India’s digital future.<br /><br />
              🎯 <span className="font-semibold">Our Mission:</span> Promote 21st century skills (coding, AI, digital & financial literacy), provide equitable learning platforms, inspire innovation and critical thinking in every child.
            </div>
          </div>
        </div>

        {/* Mentors Section */}
        <div
          className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6"
          data-aos="fade-up"
        >
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold">👨‍💻 Who Mentors YuvaStem Participants?</div>
            <div className="text-sm md:text-base text-gray-400">
              Advisory panel of IT Directors & senior tech leaders (20+ years experience). Mentors who are alumni of IITs, IIITs, NITs, IISc.
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div
          className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6"
          data-aos="fade-up"
        >
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold">📣 How It Works</div>
            <div className="text-sm md:text-base text-gray-400">
              1️⃣ Register via YuvaStem website (individuals or schools)<br />
              2️⃣ Take Level 1 reasoning + aptitude exam online<br />
              3️⃣ Get shortlisted and attend free masterclasses<br />
              4️⃣ Take Level 2 coding + AI exam<br />
              5️⃣ Win cash prizes, certificates & national recognition
            </div>
          </div>
        </div>
      </div>

      {/* Footer Call-to-Action */}
      <div className="flex flex-col items-center py-12 border-t border-gray-700 font-inter" data-aos="zoom-in">
        <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-3 px-10 rounded-lg hover:opacity-90 transition duration-300 text-base md:text-lg">
          Join the ₹50,000+ Challenge
        </button>
        <div className="text-gray-500 mt-4 italic text-sm md:text-base">
          Think. Solve. Code. Win. — Your logic today, your AI future tomorrow!
        </div>
      </div>
    </div>
  );
};

export default Home;