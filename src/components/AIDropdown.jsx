import React from "react";
import { AiData } from "../constants";
import { ArrowLeft, ArrowRight } from "lucide-react";

const AIDropdown = ({ isMobile = false, onBack }) => {
  return isMobile ? (
    <div className="px-4 pb-4">
      <button
        onClick={onBack}
        className="text-sm text-blue-600 mb-4 flex items-center gap-2"
      >
        <div className="flex gap-2 items-center">
          <ArrowLeft className="text-[18px]" />
          <h1>Back</h1>
        </div>
      </button>
      <ul className="flex flex-col gap-3">
        {AiData.map((item, i) => (
          <li
            key={i}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded flex justify-between"
          >
            <span>{item}</span>
            <ArrowRight className="text-[18px]" />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t z-40">
      <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-6 p-8">
        {AiData.map((item, i) => (
          <div
            key={i}
            className="relative group cursor-pointer text-gray-800 font-medium"
          >
            <span className="hover:underline">
              {item} <span className="ml-1">→</span>
            </span>
            <div
              className="absolute left-1/2 transform -translate-x-1/2 mb-2 
              bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition 
              pointer-events-none whitespace-nowrap z-10"
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIDropdown;
