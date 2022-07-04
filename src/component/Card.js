import React from "react";

const Card = (props) => {

  const handleHover = () => props.hoverDisplay();
  const handleHovOut = () => props.defaultDisplay();

  return (
    <div
      onMouseOver={handleHover}
      onMouseOut={handleHovOut}
      className="m-1 text-white bg-gradient-to-tr from-blue-600 to-red-900 ring-2 ring-black ring-insets p-0.5 md:p-6"
    >
      <div className="flex justify-center items-center">{props.logo}</div>
      <div className="text-center text-xs md:text-base hidden md:block">
        {props.name}
      </div>
    </div>
  );
};

export default Card;
