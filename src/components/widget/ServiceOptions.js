// Chatbot/Widgets/ServiceOptions.js
import React from "react";

const ServiceOptions = ({ actionProvider }) => {
  const options = [
    { label: "SEO", value: "seo" },
    { label: "Digital Marketing", value: "digital" },
    { label: "Software Development", value: "software" },
  ];

  const handleClick = (value) => {
    actionProvider.handleServiceSelection(value);
  };

  return (
    <div className="flex flex-col gap-2 mt-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => handleClick(opt.value)}
          className="px-3 py-1 text-sm bg-yellow-400 text-black rounded shadow hover:bg-yellow-500"
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default ServiceOptions;
