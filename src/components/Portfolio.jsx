import React from "react";
import Header from "./helpers/Header";

const Portfolio = ({ heading, tagline, portfolios }) => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 px-4">
          <Header heading={heading} tagline={tagline}></Header>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 md:px-6 sm:px-0">
          {portfolios.map(({ src }, index) => {
            return (
              <div key={index} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-100 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
