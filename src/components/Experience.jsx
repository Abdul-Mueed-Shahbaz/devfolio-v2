import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

import Header from "./helpers/Header";

const Experience = () => {
  const techs = [
    {
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      src: reactImg,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      src: nextjs,
      title: "Next Js",
      style: "shadow-white",
    },
    {
      src: graphql,
      title: "GraphQl",
      style: "shadow-pink-400",
    },
    {
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full sm:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <Header
            heading="Experience"
            tagline="These are the technologies I've worked with"
          ></Header>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ src, title, style }, index) => (
            <div
              key={index}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
