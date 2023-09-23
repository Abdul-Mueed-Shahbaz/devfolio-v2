import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin
          <FaLinkedin size={30}></FaLinkedin>
        </>
      ),
      href: "https://linkedin.com/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <FaGithub size={30}></FaGithub>
        </>
      ),
      href: "https://github.com/",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={30}></HiOutlineMail>
        </>
      ),
      href: "mailto:abdulmueedshahbaz@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
        </>
      ),
      href: "/Abdul's Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, href, style, download, child }) => {
          return (
            <li
              className={
                "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
                " " +
                style
              }
              key={id}
            >
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex justify-between items-center w-full text-white"
                download={download}
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
