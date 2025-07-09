import React, { useState } from "react";
import { productsData } from "../constants";
import { ArrowLeft } from "lucide-react";
// import { productsData } from "./productsData";

const ProductsDropdown = ({ isMobile = false, onBack }) => {
  const categories = Object.keys(productsData);
  const [activeCategoryForDesktop, setActiveCategoryForDesktop] =
    useState("Featured");
  const [activeCategory, setActiveCategory] = useState(null);
  return isMobile ? (
    <div className="px-4 pb-4">
      <button
        onClick={activeCategory ? () => setActiveCategory(null) : onBack}
        className="text-sm text-blue-600 mb-4 flex items-center gap-2"
      >
        <div className="flex items-center gap-2">
          <ArrowLeft className="w-3 h-3 mt-1" />
          <p>Back</p>
        </div>
      </button>

      {!activeCategory && (
        <ul className="flex flex-col gap-3">
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => setActiveCategory(category)}
              className="cursor-pointer hover:bg-gray-100 p-3 rounded flex justify-between items-center"
            >
              <span>{category}</span>
              <span>→</span>
            </li>
          ))}
        </ul>
      )}

      {/* Sub-Items View */}
      {activeCategory && (
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {activeCategory}
          </h2>
          <ul className="space-y-3">
            {productsData[activeCategory]?.map((item, index) => (
              <li key={index}>
                <h4 className="font-bold text-gray-700">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ) : (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t z-40">
      <div className="max-w-screen-xl mx-auto flex">
        {/* Sidebar Categories */}
        <div className="w-1/4 max-h-[400px] overflow-y-auto border-r p-6">
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li
                key={index}
                 onClick={() => setActiveCategoryForDesktop(category)}
                className={`cursor-pointer px-3 py-2 rounded hover:bg-gray-200 ${
                  activeCategoryForDesktop === category
                    ? "bg-gray-100 font-bold"
                    : ""
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Items */}
        <div className="w-3/4 p-6">
          {/* Category Heading */}
          <div className="flex mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              {activeCategoryForDesktop}
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {productsData[activeCategoryForDesktop]?.map((item, index) => (
              <div key={index}>
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDropdown;
