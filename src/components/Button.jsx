import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-4 py-2 m-2 bg-zinc-300 rounded-lg w-fit h-10 text-nowrap break-words max-w-fit whitespace-normal overflow-hidden font-semibold text-xs ">
        {name}
      </button>
    </div>
  );
};

export default Button;
