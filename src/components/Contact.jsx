import React from "react";
import Header from "./helpers/Header";

const Contact = ({ heading, tagline, formLabels, action }) => {
  return (
    <div
      name="contact"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white p-4 "
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <Header heading={heading} tagline={tagline}></Header>
        </div>
        <div className="flex justify-center items-center">
          <form
            action={action.ACTION}
            method={action.METHOD}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder={formLabels.NAME}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder={formLabels.EMAIL}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder={formLabels.MESSAGES}
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="z-10 text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover: scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
