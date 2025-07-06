import React, { useState } from "react";
import { productsData } from '../constants';
// import { productsData } from "./productsData";

const ProductsDropdown = () => {
     const categories = Object.keys(productsData);
  const [activeCategory, setActiveCategory] = useState("Featured");
  return (
      <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t z-40">
      <div className="max-w-screen-xl mx-auto flex">
        {/* Sidebar Categories */}
        <div className="w-1/4 max-h-[400px] overflow-y-auto border-r p-6">

          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer px-3 py-2 rounded hover:bg-gray-200 ${
                  activeCategory === category ? "bg-gray-100 font-bold" : ""
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
    <h2 className="text-lg font-semibold text-gray-700">{activeCategory}</h2>
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-3 gap-6">
    {productsData[activeCategory]?.map((item, index) => (
      <div key={index}>
        <h4 className="font-bold">{item.name}</h4>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  )
}

export default ProductsDropdown