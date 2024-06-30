import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="p-4 flex flex-col gap-8">
      <div className="mb-8">
        <Slider {...settings}>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/STEMGENIUSHUNT.png"}
              alt="STEM Genius Hunt"
              className="slider-image"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/STEMGENIUSHUNT.png"}
              alt="STEM Genius Hunt"
              className="slider-image"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/STEMGENIUSHUNT.png"}
              alt="STEM"
              className="slider-image"
            />
          </div>
        </Slider>
      </div>

      <div className="heading-section">
        <h1>Yuva STEM Organisation</h1>
        <p>Unleashing the Young Leaders in STEM</p>
      </div>

      <section className="content-section">
        <div className="content">
          <p>
          At Yuva STEM Organisation, we are dedicated to nurturing the intellectual growth and curiosity of young minds through our STEM Genius Hunt Examination. This initiative is designed to cultivate a profound understanding and passion for STEM (Science, Technology, Engineering, and Mathematics) subjects among students from classes 6 to 10. Our mission is to inspire critical thinking, enhance problem-solving skills, and foster the innovative application of knowledge, preparing students for future academic and professional triumphs.
          </p>
        </div>
      </section>

      <section className="content-section">
  <div className="content-image">
    <img src={process.env.PUBLIC_URL + "/assets/exams.jpg"} alt="Exams" />
  </div>
  <div className="content">
    <h2>About the STEM Genius Hunt Examination</h2>
    <p>
      The STEM Genius Hunt Examination is designed to go beyond the regular curriculum, offering students a unique opportunity to engage with STEM concepts at a deeper level. These exams are conducted in two levels:
    </p>
    <h3>Level 1: Objective Examination</h3>
    <p>
      The first level consists of an objective examination based on the STEM syllabus, tailored for each class from 6th to 10th. This stage focuses on evaluating the students' grasp of STEM concepts, their ability to apply this knowledge in various scenarios, and their proficiency in critical thinking and problem-solving. Top performers from Level 1 will advance to Level 2.
    </p>
    <h3>Level 2: Advanced Projects and Mentorship</h3>
    <p>
      Students who qualify for Level 2 will receive master classes in Python, AI, IoT, web development, Arduino, and more to help them build projects. The top projects will be shortlisted for presentation at premier institutions. For this academic year, we have collaborated with IIIT Dharwad, where the faculty of this premier institute will evaluate the projects. This level aims to push the boundaries of students' creativity and innovation, enabling them to tackle real-world problems and develop practical solutions. The best projects will receive further cash prizes, recognizing their exceptional contribution and ingenuity.
    </p>
  </div>
</section>

      <section className="content-section">
        <div className="content">
          <h2>Promoting Critical Skills for the Future</h2>
          <p>
            In alignment with the National Education Policy 2020, our examinations emphasize essential skills such as digital literacy, coding, and artificial intelligence. By integrating these skills into our curriculum, we aim to prepare students for success in a rapidly evolving technological landscape.
          </p>
        </div>
        <div className="content-image">
          <img src={process.env.PUBLIC_URL + "/assets/skills.jpg"} alt="Skills" />
        </div>
      </section>

      <section className="content-section">
        <div className="content-image">
          <img src={process.env.PUBLIC_URL + "/assets/love_stem.jpg"} alt="Love for STEM" />
        </div>
        <div className="content">
          <h2>Fostering a Lifelong Love for STEM</h2>
          <p>
            Participating in the STEM Genius Hunt Examinations is not just about winning prizes; it is about igniting a lifelong passion for STEM subjects. Our exams provide a platform for young minds to showcase their talents, fostering an environment where innovation and creativity can flourish.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="content">
          <h2>The Importance of Project-Based Learning</h2>
          <p>
            Project-based learning is a cornerstone of our approach, as it encourages students to apply their knowledge in practical, meaningful ways. Through projects, students learn to:
          </p>
          <ul>
            <li><strong>Solve Complex Problems:</strong> Tackle real-world challenges that require creative and logical solutions.</li>
            <li><strong>Think Critically:</strong> Analyze situations, make informed decisions, and reflect on their learning process.</li>
            <li><strong>Collaborate Effectively:</strong> Work with peers and mentors, enhancing their teamwork and communication skills.</li>
            <li><strong>Develop Resilience:</strong> Learn from failures and persist in the face of difficulties, building a growth mindset.</li>
          </ul>
        </div>
        <div className="content-image">
          <img src={process.env.PUBLIC_URL + "/assets/project_learning.jpg"} alt="Project-Based Learning" />
        </div>
      </section>

      <section className="content-section">
        <div className="content-image">
          <img src={process.env.PUBLIC_URL + "/assets/innovators.jpg"} alt="Innovators" />
        </div>
        <div className="content">
          <h2>Inspiring the Next Generation of Innovators</h2>
          <p>
            Our mission at Yuva STEM Organisation is to inspire and educate the next generation of STEM leaders. By encouraging curiosity and analytical thinking from an early age, we aim to motivate students to pursue higher studies and careers in STEM fields. The STEM Genius Hunt Examinations provide a stepping stone for students to prepare for global challenges and achieve future academic and professional success.
          </p>
          <p>
            We invite students, educators, and parents to join us in this exciting journey. By participating in the STEM Genius Hunt Examinations, students will not only demonstrate their knowledge and skills but also cultivate a passion for STEM that will last a lifetime.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="content">
          <h2>How to Participate</h2>
          <p>
            Students from classes 1 to 10 are eligible to participate in the STEM Genius Hunt Examinations. The registration process is simple and can be completed online through our website. Detailed instructions, syllabus, and sample questions are available to help students prepare effectively.
          </p>
        </div>
        <div className="content-image">
          <img src={process.env.PUBLIC_URL + "/assets/participate.jpg"} alt="Participate" />
        </div>
      </section>

      <section className="content-section">
        <div className="content-image">
          <img src={process.env.PUBLIC_URL + "/assets/conclusion.jpg"} alt="Conclusion" />
        </div>
        <div className="content">
          <h2>Conclusion</h2>
          <p>
            At Yuva STEM Organisation, we believe in the power of education to transform lives. Our STEM Genius Hunt Examinations are designed to provide students with the tools they need to succeed in an ever-changing world. By promoting critical thinking, problem-solving skills, and a deep understanding of STEM concepts, we are preparing the leaders of tomorrow to meet global challenges head-on.
          </p>
          <p>
            Join us in our mission to nurture young minds and inspire a new generation of STEM innovators. Together, we can make a difference and shape the future of education.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;
