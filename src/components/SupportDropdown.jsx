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
          <ArrowLeft className="w-3 h-3 mt-1" />
          <p>Back</p>
        </div>
      </button>
      <ul className="flex flex-col gap-3">
        {megaMenuData.map((section, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <h3 className="">{section.title}</h3>
              <ArrowRight className="w-4 h-4 text-gray-700 ml-2" />
            </div>

            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
