import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Data Science Intern",
    company: "Celebal Technologies",
    date: "May 2024 - Aug 2024",
    responsibilities: [
      "Conducted data analysis and built predictive models using Python",
      "Leveraged machine learning algorithms to derive actionable insights from large datasets.",
      "Presented findings to stakeholders to support decision-making.",
    ],
  },
  {
    job: "Web Development Intern",
    company: "Himmel Infotel Pvt. Ltd",
    date: "May 2023 - July 2023",
    responsibilities: [
      "Developed and maintained responsive front-end interfaces using HTML, CSS, and Bootstrap",
      "Collaborated with teams to integrate seamless features and conducted code reviews.",
      // "Resolved bugs and optimized website performance.",
    ],
  },
  {
    job: "Data Science Intern",
    company: "Acmegrade",
    date: "May 2023 - June 2023",
    responsibilities: [
      "Gained hands-on experience in data science, including statistical analysis, machine learning, and visualization techniques",
      "Completed projects that analyzed complex datasets to deliver actionable insights",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperience experience={experience} />
          {index < 2 && (
            <motion.div 
              variants={fadeIn("right", 0.2)} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: false, amount: 0 }}
            >
              <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperience;
