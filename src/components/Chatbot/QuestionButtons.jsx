import React from "react";

const QuestionButtons = ({ options, actionProvider }) => {
  return (
    <div className="bg-[#f3f3f3] px-4 py-3 mt-3 rounded-xl w-fit text-left shadow">
      <p className="text-sm text-gray-700 mb-2 font-medium">
        What are you looking for?
      </p>
      <div className="flex flex-wrap gap-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => actionProvider.handleAnswer(option.answer)}
            className="flex items-center gap-2 px-4 py-1.5 border border-gray-400 text-sm rounded-full bg-white hover:bg-gray-100 transition-all shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionButtons;
