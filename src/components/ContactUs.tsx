import React from "react";
import { Helmet } from "react-helmet";
import "./ContactUs.css"; // Import your CSS file for styling

const ContactUs = () => {
    return (
        <div className="section">
            <Helmet>
                <title>Contact Us - Yuva STEM Organisation</title>
                <meta name="description" content="Contact Yuva STEM Organisation for more information, sample papers, exam fees, and to register for our Genius Hunt exams." />
                <meta name="keywords" content="Yuva STEM Organisation, contact, STEM education, Genius Hunt exams, registration, sample papers, exam fees" />
                <meta name="author" content="Yuva STEM Organisation" />
            </Helmet>
            <h2>Contact Us</h2>
            <div className="contact-info">
                <h3>Phone</h3>
                <p>7975176756</p>
                <h3>Email</h3>
                <p><a href="mailto:karthiksajjan1@gmail.com">karthiksajjan1@gmail.com</a></p>
                <p><a href="mailto:info@yuvastem.org">info@yuvastem.org</a></p>
            </div>
        </div>
    );
};

export default ContactUs;
