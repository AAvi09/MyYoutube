import React from "react";
import Button from "./Button";
const list = [
  "All",
  "Music",
  "Cricket",
  "Soccer",
  "Physics",
  "Podcasts",
  "Indian cricket",
  "ISRO",
  "spaceX",
  "Live",
  "Thriller",
  "Test cricket",
  "Jasprit Bumrah",
  "Indian Army",
  "R&AW",
  "Union Public Service Commision",
];
const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto scrollbar-hide  ">
      <div className="flex w-[1000px]">
        {list.map((category, index) => (
          <Button key={index} name={category} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
