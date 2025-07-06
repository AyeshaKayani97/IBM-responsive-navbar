import React from "react";
import { megaMenuData, supportData } from "../constants";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SupportDropdown = ({ isMobile = false, onBack }) => {
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
        {supportData.map((item, i) => (
          <li
            key={i}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded flex justify-between"
          >
            <span>{item}</span>
            {/* <span>→</span> */}
            <ArrowRight className="text-[18px]" />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t z-40">
      <div className="max-w-screen-xl mx-auto grid grid-cols-5 gap-8 p-8 text-gray-800 text-sm">
        {megaMenuData.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-3">
              {section.title} <span className="ml-1">→</span>
            </h3>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportDropdown;
