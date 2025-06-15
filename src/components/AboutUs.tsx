import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-200 font-[Inter] relative overflow-hidden">
      <Helmet>
        <title>About Us - Yuva STEM Organisation</title>
        <meta
          name="description"
          content="Learn more about Yuva STEM Organisation, dedicated to nurturing young minds through the STEM Genius Hunt Examination."
        />
        <meta
          name="keywords"
          content="Yuva STEM Organisation, STEM education, aurdino, Karthik Sajjan, Indian Institute of Information Technology Dharwad, STEM Genius Hunt Examination, digital literacy, coding, artificial intelligence"
        />
        <meta name="author" content="Yuva STEM Organisation" />
      </Helmet>

      {/* Header Section */}
      <div className="text-center py-12 border-b border-gray-700" data-aos="fade-down">
        <h1 className="text-4xl md:text-6xl font-extrabold">About Us</h1>
      </div>

      {/* Main Content Section */}
      <section className="max-w-5xl mx-auto py-12 px-4 space-y-8">
        {/* About Content */}
        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <p className="text-gray-400">
            Yuva STEM Organisation is dedicated to nurturing the intellectual growth and curiosity of young minds through our STEM Genius Hunt Examination. This initiative aims to inspire a deep understanding and passion for STEM subjects among students from classes 6 to 10, fostering critical thinking, problem-solving skills, and innovative knowledge application.
          </p>
          <p className="text-gray-400 mt-4">
            Aligned with the National Education Policy 2020, our exams emphasize essential skills such as digital literacy, coding, and artificial intelligence. By integrating these into our curriculum, we prepare students for success in an evolving technological landscape. The STEM Genius Hunt Examinations ignite a lifelong passion for STEM, providing a platform for young minds to showcase their talents and fostering innovation and creativity.
          </p>
          <p className="text-gray-400 mt-4">
            Our mission is to inspire and educate the next generation of STEM leaders by encouraging curiosity and analytical thinking. The STEM Genius Hunt Examinations prepare students for global challenges and future success. We invite educational institutions to join us in this exciting journey to cultivate a lasting passion for STEM.
          </p>
        </div>

        {/* Profile Card (Commented Out, but Styled for Future Use) */}
        {/* <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={process.env.PUBLIC_URL + "/assets/karthik.png"}
              alt="Karthik Sajjan"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-200">Karthik Sajjan</h3>
              <p className="text-gray-400 font-semibold">Founder</p>
              <ul className="text-gray-400 list-disc pl-5 mt-2">
                <li>An alumnus of the <strong>Indian Institute of Information Technology (IIIT) Dharwad</strong></li>
                <li>Secured Olympiad Rank 1 in Level 2 of the <strong>International Olympiad of Mathematics 2015</strong> conducted by SilverZone</li>
                <li>Secured a gold badge in Mathematica-2011 conducted by Karnataka Academy of Mathematics</li>
                <li>Worked on face recognition for an <strong>autonomous navigating humanoid</strong> for the funded research project at Humanoid AI Lab, IIIT Dharwad</li>
                <li>Co-authored a research paper titled "Investopolis: Decentralized Customer Loyalty Tokenization on the Blockchain," published at the <strong>IEEE</strong> International Conference on Consumer Electronics (ICCE)</li>
              </ul>
              <a
                href="https://in.linkedin.com/in/karthik-sajjan-3949691a6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <LinkedInIcon className="text-blue-600 hover:text-blue-500 transition" style={{ fontSize: 30 }} />
              </a>
            </div>
          </div>
        </div> */}
      </section>

      {/* Call to Action */}
      <div className="text-center py-12 border-t border-gray-700" data-aos="zoom-in">
        <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-3 px-10 rounded-lg hover:opacity-90 transition text-lg">
          Join the STEM Genius Hunt
        </button>
        <p className="text-gray-500 mt-4 italic">
          Think. Solve. Code. Win. — Your logic today, your AI future tomorrow!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;