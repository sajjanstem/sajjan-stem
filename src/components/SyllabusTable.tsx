import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const syllabusData = [
  {
    class: "Class 6",
    units: [
      { unit: "Series", chapters: "Analogy (word/numerical), Odd one out (word/numerical), English dictionary word arrangements, Missing letters" },
      { unit: "Coding", chapters: "Coding and decoding, Symbols, Maths operations" },
      { unit: "Arrangement", chapters: "Sitting arrangement, Blood relations, Direction test" },
      { unit: "Analytical", chapters: "Ranking and missing characters, Find the missing number, Time and clock" },
      { unit: "Non-verbal", chapters: "Mirrors and water reflection, Sequence of figures, Configuration, Fitting pieces, Odd pieces" },
      { unit: "Quantitative Aptitude", chapters: "Number system, Algebra, Geometry, Mensuration, Data handling" },
    ],
  },
  {
    class: "Class 7",
    units: [
      { unit: "Series", chapters: "Analogy (word/numerical), Odd one out (word/numerical), English dictionary word arrangements, Missing letters" },
      { unit: "Coding", chapters: "Coding and decoding, Symbols, Maths operations" },
      { unit: "Arrangement", chapters: "Sitting arrangement, Blood relations, Direction test" },
      { unit: "Analytical", chapters: "Ranking and missing characters, Find the missing number, Cubes and dices, Time, Clock and calendar" },
      { unit: "Non-verbal", chapters: "Mirrors and water reflection, Sequence of figures, Configuration, Fitting pieces, Odd pieces" },
      { unit: "Quantitative Aptitude", chapters: "Number system, Algebra, Geometry, Mensuration, Data handling" },
    ],
  },
  {
    class: "Class 8",
    units: [
      { unit: "Series", chapters: "Analogy (word/numerical), Odd one out (word/numerical), English dictionary word arrangements, Missing letters" },
      { unit: "Coding", chapters: "Coding and decoding, Symbols, Maths operations" },
      { unit: "Arrangement", chapters: "Sitting arrangement, Blood relations, Direction test" },
      { unit: "Analytical", chapters: "Ranking and missing characters, Find the missing number, Statement analysis, Statement and conclusion" },
      { unit: "Non-verbal", chapters: "Mirrors and water reflection, Sequence of figures, Configuration, Fitting pieces, Odd pieces, Rule detection" },
      { unit: "Quantitative Aptitude", chapters: "Number system, Algebra, Geometry, Mensuration, Data handling" },
    ],
  },
  {
    class: "Class 9",
    units: [
      { unit: "Series", chapters: "Analogy (word/numerical), Odd one out (word/numerical), English dictionary word arrangements, Missing letters, Ranking and missing characters" },
      { unit: "Coding", chapters: "Coding and decoding, Symbols, Maths operations" },
      { unit: "Arrangement", chapters: "Sitting arrangement, Blood relations, Direction test" },
      { unit: "Logical", chapters: "Statement and argument, Syllogism, Data interpretation" },
      { unit: "Non-verbal", chapters: "Mirrors and water reflection, Sequence of figures, Configuration, Fitting pieces, Odd pieces" },
      { unit: "Grammar", chapters: "English grammar" },
      { unit: "Quantitative Aptitude", chapters: "Number system, Algebra, Geometry, Mensuration, Permutation and combinations, Probability" },
    ],
  },
  {
    class: "Class 10",
    units: [
      { unit: "Series", chapters: "Analogy (word/numerical), Odd one out (word/numerical), Ranking and missing characters" },
      { unit: "Coding", chapters: "Coding and decoding, Symbols, Maths operations" },
      { unit: "Arrangement", chapters: "Sitting arrangement, Blood relations, Direction test" },
      { unit: "Logical", chapters: "Statement and argument, Syllogism, Statement and assumption, Statement – courses of action, Situation reaction test, Verification of truth of statement" },
      { unit: "Non-verbal", chapters: "Mirror and water image, Configuration, Fitting pieces, Odd pieces, Dot situation" },
      { unit: "Qualitative Aptitude", chapters: "English grammar" },
      { unit: "Quantitative Aptitude", chapters: "Number system, Algebra, Geometry, Mensuration, Permutation and combinations, Probability" },
    ],
  },
];

export default function SyllabusTable() {
  return (
    <Box
      className="backdrop-blur-sm bg-gray-900/80 rounded-xl border border-gray-700 p-6 shadow-lg"
      data-aos="fade-up"
    >
      <Typography variant="h5" className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-gray-200  text-center flex items-center justify-center">
        Level 1 Syllabus: Reasoning & Aptitude
      </Typography>
      <Typography className="text-sm text-gray-400 mb-4 italic text-center flex items-center justify-center">
        (As per NTSE / Olympiad standards)
      </Typography>

      {syllabusData.map((item, index) => (
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
          >
            <Typography className="text-gray-200 font-semibold">
              {item.class}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-700 px-2 py-1 text-gray-300">Units</th>
                  <th className="border border-gray-700 px-2 py-1 text-gray-300">Chapters</th>
                </tr>
              </thead>
              <tbody>
                {item.units.map((u, i) => (
                  <tr key={i}>
                    <td className="border border-gray-700 px-2 py-1 text-gray-400">{u.unit}</td>
                    <td className="border border-gray-700 px-2 py-1 text-gray-400">{u.chapters}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
