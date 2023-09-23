import React from "react";
import Header from "./helpers/Header";

const Experience = ({ techs, heading, tagline }) => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full sm:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <Header heading={heading} tagline={tagline}></Header>
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
