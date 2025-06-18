import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import SyllabusTable from "../SyllabusTable";

const Stem = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-200 font-[Inter] relative overflow-hidden">
    <Helmet>
      <title>Junior Coder Hunt 2025 - Yuva STEM Organisation</title>
      <meta
        name="description"
        content="Join Junior Coder Hunt 2025 by Yuva STEM — India’s premier coding competition for classes 6-10! Syllabus includes reasoning, aptitude, Python basics, AI fundamentals, and problem-solving. Win exciting cash prizes, trophies, medals, and completion certificates. Learn from IIT and IIIT alumni in exclusive masterclasses!"
      />
      <meta
        name="keywords"
        content="Junior Coder Hunt, Yuva STEM, Yuva STEM Organisation, coding competition India, coding exam classes 6-10, Python exam, AI exam, reasoning syllabus, aptitude syllabus, coding syllabus junior coder hunt, junior coder hunt 2025 prizes, junior coder hunt 2025 awards, coding contest for kids, STEM competition India, IIT mentorship, IIIT mentorship, win cash prizes coding, trophy coding competition, medal coding contest, completion certificate coding exam"
      />
      <meta name="author" content="Yuva STEM Organisation" />
    </Helmet>


      {/* Banner Section */}
      <div className="text-center py-12 border-b border-gray-700" data-aos="fade-down">
        <h1 className="text-4xl md:text-6xl font-extrabold"> Junior Coder Hunt 2025</h1>
      </div>


      {/* Main Content Section */}
      <section className="max-w-5xl mx-auto py-12 px-2 space-y-12">
        {/* Introduction */}
        <Box
          className="backdrop-blur-sm bg-gray-900/80 rounded-xl border border-gray-700 p-8 shadow-lg"
          sx={{ backdropFilter: "blur(4px)" }}
          data-aos="fade-up"
        >
          <Typography variant="body1" className="text-gray-300 text-lg leading-relaxed">
            Unleash your coding potential with the <strong>Jr Coder Hunt Exam 2025</strong>, a transformative competition for <strong>classes 6 to 10</strong> students. Designed to align with <strong>NEP 2020</strong>, this prestigious talent hunt ignites passion for technology, sharpens logical reasoning, and builds foundational coding skills. Compete to unlock <strong>exclusive masterclasses by IIT/IIIT alumni</strong>, earn <strong>cash prizes, trophies, and medals</strong>, and take your first step toward becoming a global tech innovator.
          </Typography>
        </Box>

       {/* Exam Process Timeline */}
        <div
          className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md"
          data-aos="fade-up"
        >
          <Typography variant="h4" className="text-2xl font-bold mb-4 text-gray-200">
            Exam Process
          </Typography>
          <Box className="relative space-y-6">
            {/* Timeline Line */}
            <Box
              className="absolute left-4 md:left-6 top-4 w-1 bg-gray-600"
              sx={{ height: "calc(100% - 1rem)" }}
            ></Box>

            {/* Step 0: Registration */}
            <Box className="relative pl-12 md:pl-16" data-aos="fade-right" data-aos-delay="100">
              <Box
                className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full"
                sx={{ backgroundColor: "rgba(111, 176, 127, 0.8)" }}
              ></Box>
              <Typography
                className="font-semibold"
                sx={{ color: "rgba(111, 176, 127, 0.8)" }}
              >
                Step 0: Register Your School & Students
              </Typography>
              <Typography variant="body1" className="text-gray-400">
                Open the door to a unique opportunity by registering your school and students today! With a minimal exam fee of <strong>₹300 per student</strong>, you can kickstart this exciting journey. Reach out to <a href="mailto:info@yuvastem.org" className="text-green-300 underline">info@yuvastem.org</a> for a hassle-free registration process—let’s get started!
              </Typography>
            </Box>

            {/* Step 1: Level 1 Exam */}
            <Box className="relative pl-12 md:pl-16" data-aos="fade-right" data-aos-delay="200">
              <Box
                className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full"
                sx={{ backgroundColor: "rgba(111, 176, 127, 0.8)" }}
              ></Box>
              <Typography
                className="font-semibold"
                sx={{ color: "rgba(111, 176, 127, 0.8)" }}
              >
                Step 1: Level 1 Exam – Reasoning & Aptitude
              </Typography>
              <Typography variant="body1" className="text-gray-400">
                Kickstart your journey with an <strong>OMR-based MCQ exam</strong> testing logical reasoning and aptitude, aligned with <strong>NTSE/Olympiad standards</strong>, this level is open to all students from classes 6 to 10, regardless of coding experience, ensuring equal opportunity to shine.
              </Typography>
            </Box>

            {/* Step 2: Shortlisting */}
            <Box className="relative pl-12 md:pl-16" data-aos="fade-right" data-aos-delay="300">
              <Box
                className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full"
                sx={{ backgroundColor: "rgba(111, 176, 127, 0.8)" }}
              ></Box>
              <Typography
                className="font-semibold"
                sx={{ color: "rgba(111, 176, 127, 0.8)" }}
              >
                Step 2: Shortlisting for Level 2
              </Typography>
              <Typography variant="body1" className="text-gray-400">
                Top performers from Level 1 will be <strong>shortlisted</strong> to advance to the next stage, unlocking exclusive opportunities to enhance their coding and AI skills.
              </Typography>
            </Box>

            {/* Step 3: Masterclasses */}
            <Box className="relative pl-12 md:pl-16" data-aos="fade-right" data-aos-delay="400">
              <Box
                className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full"
                sx={{ backgroundColor: "rgba(111, 176, 127, 0.8)" }}
              ></Box>
              <Typography
                className="font-semibold"
                sx={{ color: "rgba(111, 176, 127, 0.8)" }}
              >
                Step 3: Free Masterclasses by Alumni of IIT/IIIT
              </Typography>
              <Typography variant="body1" className="text-gray-400">
                Shortlisted students gain access to <strong>free online live masterclasses</strong> led by <strong>IIT/IIIT alumni.</strong> Learn hands-on coding with <strong>Python</strong> and explore the <strong>basics of AI</strong> through engaging, practical sessions.
              </Typography>
            </Box>

            {/* Step 4: Level 2 Exam */}
            <Box className="relative pl-12 md:pl-16" data-aos="fade-right" data-aos-delay="500">
              <Box
                className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full"
                sx={{ backgroundColor: "rgba(111, 176, 127, 0.8)" }}
              ></Box>
              <Typography
                className="font-semibold"
                sx={{ color: "rgba(111, 176, 127, 0.8)" }}
              >
                Step 4: Level 2 Exam – Python & AI
              </Typography>
              <Typography variant="body1" className="text-gray-400">
                Compete in an <strong>online exam</strong> testing <strong>Python</strong> and <strong>basic AI concepts</strong>. Showcase your coding skills and problem-solving abilities in a dynamic, tech-driven challenge.
              </Typography>
            </Box>

            {/* Step 5: Rewards */}
            <Box className="relative pl-12 md:pl-16" data-aos="fade-right" data-aos-delay="600">
              <Box
                className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full"
                sx={{ backgroundColor: "rgba(111, 176, 127, 0.8)" }}
              ></Box>
              <Typography
                className="font-semibold"
                sx={{ color: "rgba(111, 176, 127, 0.8)" }}
              >
                Step 5: Win Big!
              </Typography>
              <Typography variant="body1" className="text-gray-400">
                Top performers in Level 2 will be celebrated with <strong>cash prizes, trophies, and medals</strong>, recognizing their excellence and potential as future tech leaders.
              </Typography>
            </Box>
          </Box>
        </div>
        
        {/* Level 1 Syllabus */}
        <SyllabusTable />

        {/* Level 2 Syllabus */}
        <Box
          className="backdrop-blur-sm bg-gray-900/80 rounded-xl border border-gray-700 p-8 shadow-lg"
          sx={{ backdropFilter: "blur(4px)" }}
          data-aos="fade-up"
        >
          <Typography variant="h4" className="text-3xl font-bold mb-6 text-gray-200">
            Level 2 Syllabus: Python & Basics of AI
          </Typography>
          {[
            {
              class: "Class 6",
              python: "Python syntax (e.g., print('Hi')), variables (y = 5), loops (e.g., for i in [1,2]).",
              ai: "What is AI? (e.g., smart assistants), decisions (e.g., if-else for games), pattern recognition (e.g., shapes).",
            },
            {
              class: "Class 7",
              python: "Lists ([4,5,6]), functions (e.g., def multiply(x,y)), strings (e.g., 'code'.lower()), conditionals.",
              ai: "AI chatbots (e.g., simple responses), decision trees (e.g., yes/no logic), sorting algorithms.",
            },
            {
              class: "Class 8",
              python: "Dictionaries ({'age': 13}), try-except, file handling (e.g., reading files), nested loops.",
              ai: "ML concepts (e.g., data labels), classification (e.g., spam emails), simple predictive models.",
            },
            {
              class: "Class 9",
              python: "Modules (e.g., import random), OOP (e.g., class Student), NumPy arrays, list comprehensions.",
              ai: "Supervised learning, neural networks (e.g., neuron basics), AI ethics (e.g., fairness in AI).",
            },
            {
              class: "Class 10",
              python: "Lambda functions, regex (e.g., phone numbers), APIs (e.g., JSON data), data structures (e.g., stacks).",
              ai: "Deep learning basics (e.g., layers), model training, real-world AI (e.g., face recognition).",
            },
          ].map((item, index) => (
            <Accordion
              key={index}
              className="bg-gray-900/80 border border-gray-700 rounded-lg mt-4 transition-all hover:bg-gray-800/80"
              sx={{
                backdropFilter: "blur(4px)",
                "&.Mui-expanded": { bgcolor: "rgba(17, 24, 39, 0.8)" },
                "&:before": { bgcolor: "transparent" },
                "& .MuiAccordionSummary-root": { bgcolor: "rgba(17, 24, 39, 0.8)" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-gray-200" />}
                className="bg-gray-900/80 hover:bg-gray-800/80"
              >
                <Typography className="text-gray-200 font-semibold">{item.class}</Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-gray-900/80">
                <Typography className="text-gray-300">
                  <strong>Python:</strong> {item.python}<br />
                  <strong>AI Basics:</strong> {item.ai}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

      {/* Awards */}
      <Box
        className="backdrop-blur-sm bg-gray-900/80 rounded-xl border border-gray-700 p-8 shadow-lg font-inter"
        sx={{ backdropFilter: "blur(4px)" }}
        data-aos="fade-up"
      >
        <Typography
          variant="h4"
          className="text-3xl font-bold text-center mb-6 flex items-center justify-center"
          sx={{ color: '#f9fafb' }}
        >
          <span className="mr-2">🏆</span> Awards
        </Typography>

        {/* Prizes for Classes 6th–8th */}
        <Typography
          variant="h5"
          className="text-xl font-semibold"
          sx={{ color: '#f9fafb', mb: 2 }}
        >
          Prizes for Classes 6th–8th
        </Typography>
        <TableContainer
          className="bg-gray-900/80 border border-gray-700 rounded-lg mb-6"
          sx={{ backdropFilter: "blur(4px)", mt: 1 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#f9fafb', fontWeight: '600' }}>
                  Position
                </TableCell>
                <TableCell sx={{ color: '#f9fafb', fontWeight: '600' }} align="right">
                  Awards
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { position: "1st", award: "₹4,000 + Trophy + Medal" },
                { position: "2nd", award: "₹3,000 + Trophy + Medal" },
                { position: "3rd", award: "₹2,000 + Trophy + Medal" },
              ].map((row, index) => (
                <TableRow
                  key={index}
                  className={`hover:bg-gray-800/80 transition-all ${index % 2 === 0 ? "bg-gray-800/50" : ""}`}
                >
                  <TableCell sx={{ color: '#f9fafb' }}>{row.position}</TableCell>
                  <TableCell sx={{ color: '#f9fafb' }} align="right">
                    {row.award}{" "}
                    <EmojiEventsIcon className="inline text-yellow-500" />{" "}
                    <MilitaryTechIcon className="inline text-yellow-500" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Prizes for Classes 9th–10th */}
        <Typography
          variant="h5"
          className="text-xl font-semibold"
          sx={{ color: '#f9fafb', mb: 2 }}
        >
          Prizes for Classes 9th–10th
        </Typography>
        <TableContainer
          className="bg-gray-900/80 border border-gray-700 rounded-lg mb-6"
          sx={{ backdropFilter: "blur(4px)", mt: 1 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#f9fafb', fontWeight: '600' }}>
                  Position
                </TableCell>
                <TableCell sx={{ color: '#f9fafb', fontWeight: '600' }} align="right">
                  Awards
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { position: "1st", award: "₹6,000 + Trophy + Medal" },
                { position: "2nd", award: "₹4,000 + Trophy + Medal" },
                { position: "3rd", award: "₹3,000 + Trophy + Medal" },
              ].map((row, index) => (
                <TableRow
                  key={index}
                  className={`hover:bg-gray-800/80 transition-all ${index % 2 === 0 ? "bg-gray-800/50" : ""}`}
                >
                  <TableCell sx={{ color: '#f9fafb' }}>{row.position}</TableCell>
                  <TableCell sx={{ color: '#f9fafb' }} align="right">
                    {row.award}{" "}
                    <EmojiEventsIcon className="inline text-yellow-500" />{" "}
                    <MilitaryTechIcon className="inline text-yellow-500" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

  {/* Footer Call-to-Action */}
    <div className="flex flex-col items-center py-12 border-t border-gray-700 font-inter px-4 md:px-8" data-aos="zoom-in">
      <a
        href="https://forms.gle/1X2s81LZocPSbYc66"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-3 px-10 rounded-lg hover:opacity-90 transition duration-300 text-base md:text-lg w-full max-w-xs md:max-w-sm">
          Register Your School Today
        </button>
      </a>
      <div className="text-gray-500 mt-4 italic text-sm md:text-base text-center">
        Think. Solve. Code. Win. — Your logic today, your AI future tomorrow!
      </div>
    </div>
      </section>
    </Box>
  );
};

export default Stem;