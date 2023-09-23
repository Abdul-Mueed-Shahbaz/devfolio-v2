import React from "react";

import Header from "./helpers/Header";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <Header heading="About"></Header>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ea modi
          obcaecati quam, hic alias. Nulla nostrum inventore sint voluptatibus
          dolore repellat debitis rerum error voluptate. Deleniti ut ipsam
          tempora!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in
          nesciunt, consequuntur adipisci beatae nulla eius. Nobis ipsam tenetur
          quo suscipit praesentium odio repudiandae, eum provident laborum
          voluptatem? Recusandae, dicta?
        </p>
      </div>
    </div>
  );
};

export default About;
