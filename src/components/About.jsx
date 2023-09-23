import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
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
