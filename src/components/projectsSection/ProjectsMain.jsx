import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
   {
    name: "Library Management System",
    year: "May2024",
    align: "right",
    image: "../../public/images/website-img-2.jpg",
    link: "https://library-management-system-eight-sigma.vercel.app/",
  },
  {
    name: "Organ Donation Camp",
    year: "Aug2024",
    align: "left",
    image: "../../public/images/website-img-1.jpg",
    link: "https://organ-donation-camp.vercel.app/",
  },
 
  {
    name: "Balance Board",
    year: "Dec2024",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "https://balance-board-beta.vercel.app/",
  },
  {
    name: "Brain Tumor Predictor",
    year: "Jun2025",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "https://www.kaggle.com/code/sekhaship097/braintumor",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;