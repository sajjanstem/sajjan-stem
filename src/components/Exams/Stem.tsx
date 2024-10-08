import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import "./Stem.css";
import { Height } from "@mui/icons-material";
import { Helmet } from "react-helmet";

const Stem = () => {
  return (
    <Box className="p-4">
      <Helmet>
        <title>STEM Genius Hunt - Yuva STEM Organisation</title>
        <meta name="description" content="Learn about the STEM Genius Hunt Examination organized by Yuva STEM Organisation. Enhance critical thinking and problem-solving skills in school students through STEM education." />
        <meta name="keywords" content="STEM Genius Hunt, Yuva STEM, Yuva STEM Organisation, STEM education, Yuva stem, school competitions, science, technology, engineering, mathematics" />
        <meta name="author" content="Yuva STEM Organisation" />
      </Helmet>
      <div className="stem-image-container">
        <img
          src={process.env.PUBLIC_URL + "/assets/stem.png"}
          alt="STEM"
          className="stem-image"
        />
        <div className="stem-image-overlay"></div>
      </div>
      <div className="heading-section">
        <h1>STEM Genius Hunt</h1>
      </div>
      <Typography variant="body1" paragraph>
        Stem Genius Hunt Examinations are beneficial for school students because they promote critical thinking, problem-solving skills, and a deeper understanding of STEM (Science, Technology, Engineering, and Mathematics) concepts beyond the regular curriculum. These competitions challenge students to apply their knowledge in innovative ways, fostering intellectual growth and encouraging a love for STEM subjects. Additionally, participating in such exams can boost students' confidence, provide recognition for their abilities.
      </Typography>
      <Typography variant="body1" paragraph>
        The STEM Genius Hunt Examination goes beyond traditional assessments by encouraging students to engage in hands-on projects and real-world problem-solving. This approach allows students to showcase their creativity and innovation, further deepening their understanding of STEM principles. By working on projects, students develop practical skills and gain experience in applying theoretical knowledge to tangible outcomes, preparing them for future challenges in academia and professional careers.
      </Typography>
      <Typography variant="body1" paragraph>
      The top projects from Level 2 of the examination will be given an invaluable opportunity to present at premier institutes, such as our collaboration this year with IIIT Dharwad. This exposure provides students with a platform to interact with faculty of premier institutions, receive feedback, and inspire further innovation, fostering a community of young STEM enthusiasts ready to make significant contributions to the field. Additionally, the best projects will receive further cash prizes, recognizing their exceptional contribution and ingenuity.
        </Typography>

      <Box mt={4}>
      <Typography variant="h4" gutterBottom>Leve 1: Exam Pattern </Typography>
      <div className="font-bold">Duration of the exam is 50 minutes</div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Classes 6 to 10</b></TableCell>
                <TableCell align="right"><b>No. Of Questions</b></TableCell>
                <TableCell align="right"><b>Marks (per question)</b></TableCell>
                <TableCell align="right"><b>Total Marks</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Section 1: Science </TableCell>
                <TableCell align="right">10</TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Section 2: Technology & Engineering</TableCell>
                <TableCell align="right">15</TableCell>
                <TableCell align="right">2</TableCell>
                <TableCell align="right">30</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Section 3: Mathematics </TableCell>
                <TableCell align="right">10</TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><b>Total</b></TableCell>
                <TableCell align="right">35</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">50</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="body1" mt={2}>
    <ul>
    <li>The Level 1 Exam is objective in nature, with responses required to be marked on an OMR sheet.</li>
      <li>Please refer to Olympiad books for preparation.</li>
      <li>The Level 1 exam is tentatively scheduled in the month of October.</li>
      <li>The venue of the examination for Level 1 will be the school only.</li>
    </ul>
  </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h4" gutterBottom>Leve 1: Exam Syllabus</Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Class 6</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Section 1: Science </b><br />
              Components of Food, Sorting Materials into Groups, Separation of Substances, Getting to Know Plants, Body Movements, The Living Organisms — Characteristics and Habitats, Motion and Measurement of Distances, Light, Shadows and Reflections, Electricity and Circuits, Fun with Magnets, Air Around Us.
              <br /><br />
              <b>Section 2: Technology & Engineering</b><br />
              Reasoning & Aptitude.
              <br /><br />
              History and Generation of Computers, Types of Computers, MS-Windows 10, MSWord(Working with Charts and Tables, Using Layout tab, Arranging multiple
windows of a document), MS-PowerPoint(Creating presentation using Animation,
Working with Animations and Transitions, Creating new slides using Slides pane,
Working with Handouts and Notes Master, Arranging multiple windows of a
presentations, Working with Charts and Tables), Networking and Cyber Safety,
Hardware, Software, Input & Output Devices, Memory & Storage Devices.
              <br /><br />
              Introduction to Block Based coding.
              <br /><br />
              <b>Section 3: Mathematics</b> <br />
              Knowing Our Numbers, Whole Numbers, Playing with Numbers, Basic Geometrical Ideas, Understanding Elementary Shapes, Integers, Fractions, Decimals, Data Handling, Mensuration, Algebra, Ratio and Proportion.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Class 7</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Section 1: Science </b><br />
              Nutrition in Plants, Nutrition in Animals, Heat, Acids, Bases and Salts, Physical and Chemical Changes, Respiration in Organisms, Transportation in Animals and Plants, Reproduction in Plants, Motion and Time, Electric Current and its Effects, Light, Forests: Our Lifeline, Wastewater Story.
              <br /><br />
              <b>Section 2: Technology & Engineering</b><br />
              Reasoning & Aptitude
              <br /><br />
              Fundamentals of Computer, Evolution of Computers, Memory & Storage Devices,
Algorithms & Flowcharts (Introduction and Basic Symbols), Using Windows 10, MSWord(Links, Mail Merge, Macros, Exploring Styles group), MS-PowerPoint (Working with
Slides Master and Themes, Advancing slides using Hyperlink and Actions, Customizing
Slide Shows), MS-Excel (Components of MS-Excel window, Editing and formatting cells in
a worksheet, Introduction to Formulas, Sorting and filtering data, Macros, Features of
Insert and Page layout tabs).
              <br /><br />
              Programming in Block based coding.
              <br /><br />
              <b>Section 3: Mathematics</b> <br />
              Integers, Fractions and Decimals, Data Handling, Simple Equations, Lines and Angles, The Triangle and its Properties, Comparing Quantities, Rational Numbers, Perimeter and Area, Algebraic Expressions, Exponents and Powers, Symmetry, Visualising Solid Shapes.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Class 8</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Section 1: Science </b><br />
              Crop Production and Management, Microorganisms: Friend and Foe, Coal and Petroleum, Combustion and Flame, Conservation of Plants and Animals, Reproduction in Animals, Reaching the Age of Adolescence, Force and Pressure, Friction, Sound, Chemical effects of electric current, Some natural phenomena, Light.
              <br /><br />
              <b>Section 2: Technology & Engineering</b><br />
              Reasoning & Aptitude.
              <br /><br />
              Fundamentals of Computers, Algorithms & Flowcharts (Advanced symbols), HTML & CSS
[Html, Head, Title, Body (Attributes: Background, Bgcolor, Text, Link, Alink, Vlink), Font
(Attributes: Color, Size, Face), Center, BR, HR (Attributes: Size, Width, Align, Noshade, Color),
Html tags, Html Elements: A, Ul and Ol
(Attributes: Type, Start), Li], Flash CS6, MS-Access, Networking, MS-Word (Exploring File tab,
Language and Translate options, Tracking features -Comments, Reviewing Pane, Tracking
Changes, Comparing, Combining and Protecting documents, Working with References), MSPowerPoint (Exploring File tab and Slide Show tab, Comparing, Combining and Protecting
presentations), MS-Excel(Exploring File tab, Useful Formulas and Functions - IF,Even, Odd,
LCM, GCD, Power, Product, Round, Sqrt, Sum, Min, Max, Average, Count, Upper, Lower And
Replace, Cell referencing, Using Defined Names group ), Memory & Storage Devices, Number
System (Introduction), Cyber Safety, Operating Systems(Introduction, Features, Types-single
user and multi-user).
              <br /><br />
              Introduction to Python and Basic applications of AI.
              <br /><br />
              <b>Section 3: Mathematics</b> <br />
              Rational Numbers, Linear Equations in One Variable, Understanding Quadrilaterals, Data Handling, Squares and Square Roots, Cubes and Cube Roots, Comparing Quantities, Algebraic Expressions and Identities, Mensuration, Exponents and Powers, Direct and Inverse Proportions, Factorisation, Introduction to Graphs.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Class 9</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Section 1: Science </b><br />
              Matter in Our Surroundings, Is Matter Around Us Pure?, Atoms and Molecules, Structure of the Atom, The Fundamental Unit of Life, Tissues, Motion, Force and Laws of Motion, Gravitation, Work and Energy, Sound, Improvement in Food Resources.
              <br /><br />
              <b>Section 2: Technology & Engineering</b><br />
              Reasoning & Aptitude.
              <br /><br />
              Algorithms and Flowcharts in Programming, Number System (Binary to decimal and decimal to
binary conversion), Visual Basic, Animations, HTML & CSS (Links, Anchors and Table tags), MSWord, MS-Excel(Formula Auditing, Data Tools, Protecting and Sharing workbooks/worksheets,
Working with cell range), MS-PowerPoint, Hardware, Software, Input & Output Devices, Memory &
Storage Devices, Flash CS6, Multimedia, Networking, Cyber Safety, Operating Systems (TypesInteractive (GUI based), Real Time and Distributed, Commonly used OS), Using Windows 10.
             <br /><br />
             Coding in Python & applications of AI & robotics.
              <br /><br />
              <b>Section 3: Mathematics</b> <br />
              Number Systems, Polynomials, Coordinate Geometry, Linear Equations in Two Variables, Introduction to Euclid’s Geometry, Lines and Angles, Triangles, Quadrilaterals, Circles, Heron’s Formula, Surface Areas and Volumes, Statistics.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Class 10</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Section 1: Science </b><br />
              Chemical Reactions and Equations, Acids, Bases and Salts, Metals and Non-metals, Carbon and its Compounds, Life Processes, Control and Coordination, How do Organisms Reproduce?, Heredity, Light – Reflection and Refraction, The Human Eye and the Colourful World, Electricity, Magnetic Effects of Electric Current, Our Environment.
              <br /><br />
              <b>Section 2: Technology & Engineering</b><br />
              Reasoning & Aptitude.
              <br /><br />
              Fundamentals of Computer, Number System, Operating System, MS-Word, Networking, MSPowerPoint, MS-Excel, HTML & CSS, Cyber Safety, Database Management System(Functions, Types,
                MS-Access), Using Windows 10.
              <br /><br />
              Coding in Python & applications of AI & robotics.
              <br /><br />
              <b>Section 3: Mathematics</b> <br />
              Real Numbers, Polynomials, Pair of Linear Equations in Two Variables, Quadratic Equations, Arithmetic Progressions, Triangles, Coordinate Geometry, Introduction to Trigonometry, Some Applications of Trigonometry, Circles, Areas Related to Circles, Surface Areas and Volumes, Statistics, Probability.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box mt={4} className="level-2-section">
        <img
          src={process.env.PUBLIC_URL + "/assets/iiit-dwd-logo.jpg"}
          alt="IIIT Dharwad"
          className="iiit-dharwad-logo"
        />
        <div className="level-2-content">
          <Typography variant="h4" gutterBottom>
            Level 2: Projects and Mentorship
          </Typography>
          <Typography variant="body1" mt={2}>
            <ul>
              <li>
                Top students from Level 1 will qualify for Level 2, where they will receive master classes in Python, AI, IoT, web development, Arduino, and more to help them develop projects. The most outstanding projects will be shortlisted for presentation at premier institutions.
              </li>
              <li>
                This academic year, we are proud to collaborate with IIIT Dharwad. Esteemed faculty from this prestigious institute will evaluate the projects, encouraging students to push the boundaries of creativity and innovation. This level aims to empower students to tackle real-world problems and develop practical solutions. Exceptional projects will be awarded cash prizes in recognition of their outstanding contributions and ingenuity.
              </li>
            </ul>
          </Typography>
        </div>
      </Box>

      <Box mt={4}>
        <Typography variant="h4" gutterBottom>Awards</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead >
              <TableRow >
                <TableCell ><b>Level 2 Awards for top 10 projects</b></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableHead>
              <TableRow>
                <TableCell><b>Position</b></TableCell>
                <TableCell align="right"><b>Awards</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><b>1st</b> </TableCell>
                <TableCell align="right"><b>25,000 INR</b> + <b>Trophy </b><EmojiEventsIcon className="trophy" />+<b> Medal</b><MilitaryTechIcon className="medal" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><b>2nd</b></TableCell>
                <TableCell align="right"><b>15,000 INR</b> + <b>Trophy </b><EmojiEventsIcon className="trophy" />+<b> Medal</b><MilitaryTechIcon className="medal" /></TableCell>

              </TableRow>
              <TableRow>
                <TableCell><b>3rd </b></TableCell>
                <TableCell align="right"><b>5,000 INR</b> + <b>Trophy </b><EmojiEventsIcon className="trophy" />+<b> Medal</b><MilitaryTechIcon className="medal" /></TableCell>

              </TableRow>
              <TableRow>
                <TableCell><b>4th & 5th</b> </TableCell>
                <TableCell align="right"><b>Trophy </b><EmojiEventsIcon className="trophy" />+<b> Medal</b><MilitaryTechIcon className="medal" /></TableCell>

              </TableRow>
              <TableRow>
                <TableCell><b>6th to 10th </b></TableCell>
                <TableCell align="right"><b> Medal</b><MilitaryTechIcon className="medal" /></TableCell>

              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box mt={4}>
        <Typography variant="body1" mt={2}>
    <ul>
    <li>Level 2 students who could not make it to the top 10 will receive a course completion certificate in the domain they took the masterclass for their project.
    </li>
    </ul>
  </Typography>
      </Box>

      <Box mt={4}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead >
              <TableRow >
                <TableCell ><b>Level 1 Awards at school level</b></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableHead>
              <TableRow>
                <TableCell><b>Class Rank</b></TableCell>
                <TableCell align="right"><b>Classes</b></TableCell>
                <TableCell align="right"><b>Awards</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><b>1st</b></TableCell>
                <TableCell align="right">6th to 10th</TableCell>
                <TableCell align="right"><MilitaryTechIcon className="medal" />Gold Medal + Special Achievement certificate</TableCell>

              </TableRow>
              <TableRow>
                <TableCell><b>2nd</b></TableCell>
                <TableCell align="right">6th to 10th</TableCell>
                <TableCell align="right"><MilitaryTechIcon className="medal" />Silver Medal + Special Achievement certificate</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><b>3rd </b></TableCell>
                <TableCell align="right">6th to 10th</TableCell>
                <TableCell align="right"><MilitaryTechIcon className="medal" />Bronze Medal + Special Achievement certificate</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box mt={4}>
        <Typography variant="body1" mt={2}>
    <ul>
    <li>Every Level 1 student will receive a participation certificate.
    </li>
    </ul>
  </Typography>
      </Box>

    </Box>
  );
};

export default Stem;
