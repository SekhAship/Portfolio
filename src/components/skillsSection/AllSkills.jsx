import SingleSkill from "./SingleSkill";
import { FaJava, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiJavascript, SiDjango, SiSolidity } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "SpringBoot",
    icon: SiSpringboot,
  },
  {
    skill: "TailwindCSS",
    icon: SiTailwindcss,
  },
  {
    skill: "JavaScript",
    icon: SiJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "NodeJS",
    icon: FaNodeJs,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "Django",
    icon: SiDjango,
  },
  {
    skill: "Solidity",
    icon: SiSolidity,
  },
];



const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;