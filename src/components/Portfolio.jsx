import React from "react";
import Header from "./helpers/Header";

const Portfolio = ({ heading, tagline, portfolios }) => {
  const buttonClasses =
    "w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex justify-center items-center";

  const buttonDisabled =
    "cursor-not-allowed opacity-50 disabled:opacity-50 disabled:cursor-not";

  const handleClick = (e, href) => {
    if (!href) {
      e.preventDefault();
    }
  };

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
          {portfolios.map(({ src, demo, code }, index) => {
            return (
              <div key={index} className="shadow-md shadow-gray-600 rounded-lg">
                <div>
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-100 hover:scale-105 h-full md:min-h-[174px]"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <a
                    className={
                      demo
                        ? buttonClasses
                        : buttonClasses + " " + buttonDisabled
                    }
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => handleClick(e, demo)}
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      code
                        ? buttonClasses
                        : buttonClasses + " " + buttonDisabled
                    }
                    onClick={(e) => handleClick(e, code)}
                  >
                    Code
                  </a>
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
