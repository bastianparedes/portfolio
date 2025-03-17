import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import picture1 from './images/jpg/picture-1.jpg';
import Image from "next/image";

const Component = () => {
  return (
    <header className="flex px-20 py-10 relative -top-5">
      <Image src={picture1} alt={"wallpaper1"} className="absolute -z-10 right-96 blur-sm top-0 left-0"></Image>
      <span className="text-3xl">Bastián Paredes</span>
      <div className="ml-auto flex gap-5 h-10">
        <a
          href="https://github.com/BastianParedes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-full h-full" />
        </a>
        <a
          href="https://www.linkedin.com/in/bastianparedes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-full h-full" />
        </a>
        <a
          href="mailto:bastian.p@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMail className="w-full h-full" />
        </a>
      </div>
    </header>
  );
};

export default Component;
