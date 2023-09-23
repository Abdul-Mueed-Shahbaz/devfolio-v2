import React from "react";

import Header from "./helpers/Header";

const About = ({ heading, desc_1, desc_2 }) => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <Header heading={heading}></Header>
        </div>
        <p className="text-xl mt-20">{desc_1}</p>
        <br />
        <p className="text-xl">{desc_2}</p>
      </div>
    </div>
  );
};

export default About;
