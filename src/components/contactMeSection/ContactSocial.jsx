import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/sekh-aship-217a93259/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/SekhAship" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/sekh._.aship/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;