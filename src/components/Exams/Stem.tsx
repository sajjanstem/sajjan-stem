import React, { useEffect } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const Stem = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-200 font-[Inter] relative overflow-hidden p-4">
      <Helmet>
        <title>Junior Coder Hunt - Yuva STEM Organisation</title>
        <meta
          name="description"
          content="Join the Junior Coder Hunt by Yuva STEM Organisation to test reasoning, aptitude, and coding skills. Get mentored by alumni of premier institutes and win exciting cash prizes!"
        />
        <meta
          name="keywords"
          content="Junior Coder Hunt, Yuva STEM, coding competition, school coding contest, reasoning, aptitude, Python, AI, school students"
        />
        <meta name="author" content="Yuva STEM Organisation" />
      </Helmet>

      {/* Banner Section */}
      <div className="relative text-center py-12 border-b border-gray-700" data-aos="fade-down">
        <div className="stem-image-container relative">
          <img
            src={process.env.PUBLIC_URL + "/assets/coder-hunt-banner.png"}
            alt="Junior Coder Hunt"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div className="stem-image-overlay absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-4">Junior Coder Hunt</h1>
      </div>

      {/* Main Content Section */}
      <section className="max-w-5xl mx-auto py-12 px-4 space-y-8">
        {/* Introduction */}
        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <Typography variant="body1" className="text-gray-400">
            The Junior Coder Hunt is designed to inspire and challenge students of classes 6 to 12. This exam evaluates reasoning, aptitude, and foundational coding skills, promoting problem-solving, logical thinking, and creativity. Successful participants will gain access to masterclasses delivered by alumni from premier institutes like IITs and IIITs, equipping them with essential skills in Python, AI, and more.
          </Typography>
          <Typography variant="body1" className="text-gray-400 mt-4">
            Top performers in this competition not only win exciting cash prizes from a total pool of ₹50,000 but also earn the chance to showcase their projects before expert panels. This journey is aimed at nurturing the next generation of coding prodigies.
          </Typography>
        </div>

        {/* Level 1 Exam Pattern */}
        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <Typography variant="h4" className="text-2xl font-bold mb-2 text-gray-200">
            Level 1: Exam Pattern
          </Typography>
          <Typography className="font-semibold text-gray-400 mb-4">Duration: 50 minutes</Typography>
          <TableContainer
            component={Paper}
            className="backdrop-blur-sm bg-white bg-opacity-5 border border-gray-700"
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="text-gray-200 font-semibold">Section</TableCell>
                  <TableCell className="text-gray-200 font-semibold" align="right">
                    No. of Questions
                  </TableCell>
                  <TableCell className="text-gray-200 font-semibold" align="right">
                    Marks (per question)
                  </TableCell>
                  <TableCell className="text-gray-200 font-semibold" align="right">
                    Total Marks
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="text-gray-400">Reasoning & Aptitude</TableCell>
                  <TableCell className="text-gray-400" align="right">20</TableCell>
                  <TableCell className="text-gray-400" align="right">1</TableCell>
                  <TableCell className="text-gray-400" align="right">20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-gray-400">Basic Coding Logic</TableCell>
                  <TableCell className="text-gray-400" align="right">15</TableCell>
                  <TableCell className="text-gray-400" align="right">2</TableCell>
                  <TableCell className="text-gray-400" align="right">30</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-gray-200 font-semibold">Total</TableCell>
                  <TableCell className="text-gray-200 font-semibold" align="right">35</TableCell>
                  <TableCell className="text-gray-200"></TableCell>
                  <TableCell className="text-gray-200 font-semibold" align="right">50</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body1" className="text-gray-400 mt-4">
            <ul className="list-disc pl-5">
              <li>The exam is objective (OMR based).</li>
              <li>Recommended prep: reasoning books, aptitude books, coding puzzles.</li>
              <li>Exam schedule: Tentatively October.</li>
              <li>Venue: Student's school.</li>
            </ul>
          </Typography>
        </div>

        {/* Level 1 Syllabus */}
        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <Typography variant="h4" className="text-2xl font-bold mb-2 text-gray-200">
            Level 1: Syllabus
          </Typography>
          <Accordion className="bg-transparent border border-gray-700 rounded-lg">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-gray-200" />}
              className="bg-white bg-opacity-5"
            >
              <Typography className="text-gray-200">Classes 6 to 8</Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white bg-opacity-5">
              <Typography className="text-gray-400">
                <strong>Reasoning & Aptitude:</strong> Number series, patterns, puzzles, basic arithmetic logic.<br /><br />
                <strong>Basic Coding Logic:</strong> Algorithms, flowcharts, pattern-based problems, basics of Python logic (loops, conditions), block-based coding concepts (Scratch/Blockly).
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="bg-transparent border border-gray-700 rounded-lg mt-4">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-gray-200" />}
              className="bg-white bg-opacity-5"
            >
              <Typography className="text-gray-200">Classes 9 to 12</Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white bg-opacity-5">
              <Typography className="text-gray-400">
                <strong>Reasoning & Aptitude:</strong> Number series, coding-decoding, direction sense, puzzles, data interpretation, logical Venn diagrams.<br /><br />
                <strong>Basic Coding Logic:</strong> Python fundamentals, pseudo-code, loops, conditions, functions, basic AI concepts (if-else models), introductory algorithms.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* Level 2 */}
        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <div className="flex items-center space-x-4">
            <img
              src={process.env.PUBLIC_URL + "/assets/iiit-dwd-logo.jpg"}
              alt="IIIT Dharwad"
              className="w-16 h-16 rounded-full"
            />
            <Typography variant="h4" className="text-2xl font-bold text-gray-200">
              Level 2: Masterclasses & Projects
            </Typography>
          </div>
          <Typography variant="body1" className="text-gray-400 mt-4">
            <ul className="list-disc pl-5">
              <li>Qualified students will receive masterclasses on Python, AI, IoT, Web Dev, Arduino, and more.</li>
              <li>Top projects will be presented at IIIT Dharwad and other premier institutes for expert evaluation.</li>
              <li>Winners will receive cash prizes and national-level recognition.</li>
            </ul>
          </Typography>
        </div>

        {/* Level 2 Awards */}
        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <Typography variant="h4" className="text-2xl font-bold mb-2 text-gray-200">
            Awards
          </Typography>
          <TableContainer
            component={Paper}
            className="backdrop-blur-sm bg-white bg-opacity-5 border border-gray-700"
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="text-gray-200 font-semibold">Position</TableCell>
                  <TableCell className="text-gray-200 font-semibold" align="right">
                    Awards
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="text-gray-400">1st</TableCell>
                  <TableCell className="text-gray-400" align="right">
                    ₹25,000 + Trophy <EmojiEventsIcon className="inline text-yellow-500" /> + Medal{" "}
                    <MilitaryTechIcon className="inline text-yellow-500" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-gray-400">2nd</TableCell>
                  <TableCell className="text-gray-400" align="right">
                    ₹15,000 + Trophy <EmojiEventsIcon className="inline text-yellow-500" /> + Medal{" "}
                    <MilitaryTechIcon className="inline text-yellow-500" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-gray-400">3rd</TableCell>
                  <TableCell className="text-gray-400" align="right">
                    ₹10,000 + Trophy <EmojiEventsIcon className="inline text-yellow-500" /> + Medal{" "}
                    <MilitaryTechIcon className="inline text-yellow-500" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body1" className="text-gray-400 mt-4">
            <ul className="list-disc pl-5">
              <li>All Level 2 participants receive a completion certificate.</li>
            </ul>
          </Typography>
        </div>

        {/* Level 1 School Awards */}
        <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <Typography variant="h4" className="text-2xl font-bold mb-2 text-gray-200">
            Level 1 School Awards
          </Typography>
          <TableContainer
            component={Paper}
            className="backdrop-blur-sm bg-white bg-opacity-5 border border-gray-700"
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="text-gray-200 font-semibold">Level 1 School Awards</TableCell>
                  <TableCell className="text-gray-200 font-semibold">Classes</TableCell>
                  <TableCell className="text-gray-200 font-semibold">Awards</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="text-gray-400">1st Rank</TableCell>
                  <TableCell className="text-gray-400">6-12</TableCell>
                  <TableCell className="text-gray-400">
                    Gold Medal <MilitaryTechIcon className="inline text-yellow-500" /> + Achievement Certificate
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-gray-400">2nd Rank</TableCell>
                  <TableCell className="text-gray-400">6-12</TableCell>
                  <TableCell className="text-gray-400">
                    Silver Medal <MilitaryTechIcon className="inline text-yellow-500" /> + Achievement Certificate
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-gray-400">3rd Rank</TableCell>
                  <TableCell className="text-gray-400">6-12</TableCell>
                  <TableCell className="text-gray-400">
                    Bronze Medal <MilitaryTechIcon className="inline text-yellow-500" /> + Achievement Certificate
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body1" className="text-gray-400 mt-4">
            <ul className="list-disc pl-5">
              <li>Every Level 1 participant will receive a participation certificate.</li>
            </ul>
          </Typography>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center py-12 border-t border-gray-700" data-aos="zoom-in">
        <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-3 px-10 rounded-lg hover:opacity-90 transition text-lg">
          Join the ₹50,000+ Challenge
        </button>
        <p className="text-gray-500 mt-4 italic">
          Think. Solve. Code. Win. — Your logic today, your AI future tomorrow!
        </p>
      </div>
    </Box>
  );
};

export default Stem;