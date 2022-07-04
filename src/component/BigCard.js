import React from "react";

const BigCard = (props) => {

  return (
    <div className="flex flex-wrap items-center justify-center w-full md:mt-20 h-full">
      {props.comp}
    </div>
  );
};

export default BigCard;
