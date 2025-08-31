import React from "react";

const ResearchCard = ({ title, description, icon, handleClick }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition" onClick={handleClick}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ResearchCard;