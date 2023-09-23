import React from "react";

const Header = ({ heading, tagline }) => {
  return (
    <>
      <p className="text-4xl font-bold border-b-4 border-gray-500 py-1 inline">
        {heading}
      </p>
      {tagline && <p className="py-6">{tagline}</p>}
    </>
  );
};

export default Header;
