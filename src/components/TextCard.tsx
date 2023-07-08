import React from "react";
import { cardTextProps } from "../pages//Home";

const TextCard: React.FC<cardTextProps> = ({ category, description }) => {
  return (
    <div>
      {/* card1 */}
      <div className="card w-96 bg-primary text-primary-content ">
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
