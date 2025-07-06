import React from "react";
import { hybridComputingData } from "../constants";

const HybridCloudDropdown = () => {
  return (
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
