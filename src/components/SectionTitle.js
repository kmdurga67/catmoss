import React from "react";

const SectionTitle = ({ title, subtitle, align = "center" }) => {
  const alignmentClasses = {
    center: "text-center",
    left: "text-left",
    right: "text-right"
  };

  return (
    <div className={`${alignmentClasses[align]} mb-12`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{title}</h2>
      {subtitle && (
        <p className="text-lg text-blue-600 font-medium">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;