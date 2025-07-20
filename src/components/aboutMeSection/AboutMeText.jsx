import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm Sekh Aship, a passionate Computer Science undergraduate and full-stack developer
        with hands-on experience in building intelligent, secure, and scalable applications.
        I specialize in the MERN stack, machine learning, and blockchain-based systems, 
        and enjoy turning complex ideas into real-world solutions.

        I've developed impactful projects including a brain tumor classification system using
        deep learning, a blockchain-integrated organ donation platform, and a role-based
        library management system. My work emphasizes clean UI/UX, secure identity protocols,
        and performance optimization.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;