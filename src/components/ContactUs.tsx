import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-200 font-[Inter] relative overflow-hidden">
      <Helmet>
        <title>Contact Us - Yuva STEM Organisation</title>
        <meta
          name="description"
          content="Contact Yuva STEM Organisation for more information, sample papers, exam fees, and to register for our Genius Hunt exams."
        />
        <meta
          name="keywords"
          content="Yuva STEM Organisation, contact, STEM education, Genius Hunt exams, registration, Karthik Sajjan, Yuva STEM"
        />
        <meta name="author" content="Yuva STEM Organisation" />
      </Helmet>

      {/* Header Section */}
      <div className="text-center py-12 border-b border-gray-700" data-aos="fade-down">
        <h1 className="text-4xl md:text-6xl font-extrabold">Contact Us</h1>
      </div>

      {/* Main Content Section */}
      <section className="max-w-5xl mx-auto py-12 px-4 space-y-8">
        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            {/* Contact Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <h3 className="text-xl font-semibold text-gray-200">Address</h3>
              <p className="text-gray-400">
                Yuva STEM Organisation<br />
                131/A, 3rd Floor, NGEF Layout, Outer Ring Road, near Grand Seasons Business Hotel, East of NGEF Layout, Kasturi Nagar, Bengaluru, Karnataka 560043
              </p>
              <h3 className="text-xl font-semibold text-gray-200 mt-4">Email</h3>
              <p className="text-gray-400">
                <a
                  href="mailto:info@yuvastem.org"
                  className="text-blue-600 hover:text-blue-500 transition"
                >
                  info@yuvastem.org
                </a>
              </p>
              <h3 className="text-xl font-semibold text-gray-200 mt-4">Phone</h3>
              <p className="text-gray-400">7975176756</p>
            </div>
            {/* Map */}
            <div className="flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62200.28460990648!2d77.58683584863279!3d13.0026648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11c26db122c5%3A0xe95ca23faa9830e2!2sYuva%20STEM%20Organisation!5e0!3m2!1sen!2sin!4v1720342114872!5m2!1sen!2sin"
                className="w-full h-96 rounded-lg border border-gray-700"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yuva STEM Organisation"
              ></iframe>
            </div>
          </div>
        </div>
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

export default ContactUs;