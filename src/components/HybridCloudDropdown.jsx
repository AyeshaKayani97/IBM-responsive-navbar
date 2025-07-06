import React from "react";
import { hybridComputingData } from "../constants";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HybridCloudDropdown = ({ isMobile = false, onBack }) => {
  return isMobile ? (
    <div className="px-4 pb-4">
      <button
        onClick={onBack}
        className="text-sm text-blue-600 mb-4 flex items-center gap-2"
      >
        <div className="flex gap-2 justify-center items-center">
          <ArrowLeft className="w-3 h-3 mt-1" />
          <p className="">Back</p>
        </div>
      </button>
      <ul className="flex flex-col gap-3">
        {hybridComputingData.map((item, i) => (
          <div key={i} className="relative group cursor-pointer text-gray-800 ">
            {/* Item Text */}
            <div className="flex items-center justify-between">
              <h2 className="font-bol text-[18px]"> {item}</h2>
              <ArrowRight className="w-3 h-3" />
            </div>

            {/* Tooltip */}
            <div
              className="absolute  left-1/2 transform -translate-x-1/2 mb-2 
                              bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition 
                              pointer-events-none whitespace-nowrap z-10"
            >
              {item}
            </div>
          </div>
        ))}
      </ul>
    </div>
  ) : (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t z-40">
      <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-6 p-8">
        {hybridComputingData.map((item, i) => (
          <div
            key={i}
            className="relative group cursor-pointer text-gray-800 font-medium"
          >
            {/* Item Text */}
            <span className="hover:underline">
              {item} <span className="ml-1">→</span>
            </span>
            {/* Tooltip */}
            <div
              className="absolute  left-1/2 transform -translate-x-1/2 mb-2 
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

export default HybridCloudDropdown;
