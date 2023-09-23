import React from "react";

const SocialLinks = ({ links }) => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ href, style, download, child }, index) => {
          return (
            <li
              className={
                "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
                " " +
                style
              }
              key={index}
            >
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex justify-between items-center w-full text-white"
                download={download}
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
