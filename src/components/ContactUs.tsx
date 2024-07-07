import React from "react";
import { Helmet } from "react-helmet";
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div className="contact-section p-4">
            <Helmet>
                <title>Contact Us - Yuva STEM Organisation</title>
                <meta name="description" content="Contact Yuva STEM Organisation for more information, sample papers, exam fees, and to register for our Genius Hunt exams." />
                <meta name="keywords" content="Yuva STEM Organisation, contact, STEM education, Genius Hunt exams, registration, Karthik Sajjan, Yuva STEM" />
                <meta name="author" content="Yuva STEM Organisation" />
            </Helmet>
            <div className="contact-header">
                <h2>Contact Us</h2>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Get in touch</h3>
                    <h4>Address</h4>
                    <p>Yuva STEM Organisation</p>
                    <p>131/A, 3rd Floor, NGEF Layout, Outer ring road, Ring Road, near Grand Seasons Business Hotel, East of NGEF Layout, Kasturi Nagar, Bengaluru, Karnataka 560043</p>
                    <h4>Email</h4>
                    <p><a href="mailto:info@yuvastem.org">info@yuvastem.org</a></p>
                    {/* <p><a href="mailto:karthiksajjan1@gmail.com">karthiksajjan1@gmail.com</a></p> */}
                    <h4>Phone</h4>
                    <p>7975176756</p>
                </div>
                <div className="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62200.28460990648!2d77.58683584863279!3d13.0026648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11c26db122c5%3A0xe95ca23faa9830e2!2sYuva%20STEM%20Organisation!5e0!3m2!1sen!2sin!4v1720342114872!5m2!1sen!2sin"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Yuva STEM Organisation"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
