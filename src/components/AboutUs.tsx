import React from "react";
import { Helmet } from "react-helmet";

const AboutUs = () => {
    return (
        <div className="section p-4">
            <Helmet>
                <title>About Us - Yuva STEM Organisation</title>
                <meta name="description" content="Learn more about Yuva STEM Organisation, dedicated to nurturing young minds through the STEM Genius Hunt Examination." />
                <meta name="keywords" content="Yuva STEM Organisation, STEM education, aurdino, Karthik Sajjan, Indian Institute of Information Technology Dharwad, STEM Genius Hunt Examination, digital literacy, coding, artificial intelligence" />
                <meta name="author" content="Yuva STEM Organisation" />
            </Helmet>
            <h2>About Us</h2>
            <p>
                At Yuva STEM Organisation, founded by Karthik Sajjan, an alumnus of the Indian Institute of Information Technology Dharwad, we are dedicated to nurturing the intellectual growth and curiosity of young minds through our STEM Genius Hunt Examination. This initiative aims to inspire a deep understanding and passion for STEM subjects among students from classes 6 to 10, fostering critical thinking, problem-solving skills, and innovative knowledge application.
            </p>

            <p>Aligned with the National Education Policy 2020, our exams emphasize essential skills such as digital literacy, coding, and artificial intelligence. By integrating these into our curriculum, we prepare students for success in an evolving technological landscape. The STEM Genius Hunt Examinations ignite a lifelong passion for STEM, providing a platform for young minds to showcase their talents and fostering innovation and creativity.
            </p>

            <p>
                Our mission is to inspire and educate the next generation of STEM leaders. By encouraging curiosity and analytical thinking. The STEM Genius Hunt Examinations prepare students for global challenges and future success. We invite educational institutions to join us in this exciting journey to cultivate a lasting passion for STEM.
            </p>
        </div>
    );
};

export default AboutUs;
