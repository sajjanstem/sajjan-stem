import React from "react";
import { Helmet } from "react-helmet";
import "./AboutUs.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutUs = () => {
    return (
        <div className="section">
            <Helmet>
                <title>About Us - Yuva STEM Organisation</title>
                <meta name="description" content="Learn more about Yuva STEM Organisation, dedicated to nurturing young minds through the STEM Genius Hunt Examination." />
                <meta name="keywords" content="Yuva STEM Organisation, STEM education, aurdino, Karthik Sajjan, Indian Institute of Information Technology Dharwad, STEM Genius Hunt Examination, digital literacy, coding, artificial intelligence" />
                <meta name="author" content="Yuva STEM Organisation" />
            </Helmet>
            
            <div className="heading-section">
                <h1>About Us</h1>
            </div>
            <div className="content-container">
                <div className="profile-card">
                    <img src={process.env.PUBLIC_URL + "/assets/karthik.png"} alt="Karthik Sajjan" className="profile-photo" />
                    <div className="profile-details">
                        <h3>Karthik Sajjan</h3>
                        <p className="position">Founder</p>
                        <div className="description">
                            <ul>
                                <li>An alumnus of the <b>Indian Institute of Information Technology (IIIT) Dharwad</b></li>
                                <li>Secured Olympiad Rank 1 in Level 2 of the <b>International Olympiad of Mathematics 2015</b> conducted by SilverZone</li>
                                <li>Secured a gold badge in Mathematica-2011 conducted by Karnataka Academy of Mathematics</li>
                                <li>Worked on face recognition for an <b>autonomous navigating humanoid</b> for the funded research project at Humanoid AI Lab, IIIT Dharwad</li>
                                <li>Co-authored a research paper titled "Investopolis: Decentralized Customer Loyalty Tokenization on the Blockchain," published at the <b>IEEE</b> International Conference on Consumer Electronics (ICCE)</li>
                                </ul>
                        </div>
                        <a href="https://in.linkedin.com/in/karthik-sajjan-3949691a6" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>
                <div className="about-content">
                    <br />
                    <p>
                        Yuva STEM Organisation is dedicated to nurturing the intellectual growth and curiosity of young minds through our STEM Genius Hunt Examination. This initiative aims to inspire a deep understanding and passion for STEM subjects among students from classes 6 to 10, fostering critical thinking, problem-solving skills, and innovative knowledge application.
                    </p>
                    <br />
                    <p>
                        Aligned with the National Education Policy 2020, our exams emphasize essential skills such as digital literacy, coding, and artificial intelligence. By integrating these into our curriculum, we prepare students for success in an evolving technological landscape. The STEM Genius Hunt Examinations ignite a lifelong passion for STEM, providing a platform for young minds to showcase their talents and fostering innovation and creativity.
                    </p>
                    <br />
                    <p>
                        Our mission is to inspire and educate the next generation of STEM leaders by encouraging curiosity and analytical thinking. The STEM Genius Hunt Examinations prepare students for global challenges and future success. We invite educational institutions to join us in this exciting journey to cultivate a lasting passion for STEM.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
