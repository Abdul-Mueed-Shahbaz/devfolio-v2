import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      link: "home",
    },
    {
      link: "about",
    },
    {
      link: "portfolio",
    },
    {
      link: "experience",
    },
    {
      link: "contact",
    },
  ];
  return (
    <div className="bg-black px-4 flex justify-between items-center w-full h-20 text-white fixed z-20">
      <div>
        <h1 className="text-5xl font-signature ml-2">Mueed</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ link }, index) => (
          <li
            key={index}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-150 duration-200"
          >
            <Link to={link} duration={500} smooth>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer pr-4 z-30 text-gray-500 hover:scale-125 duration-200"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }, index) => (
            <li
              key={index}
              className="px-4 py-6 text-4xl cursor-pointer capitalize hover:scale-150 duration-200"
            >
              <Link to={link} duration={500} smooth>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
