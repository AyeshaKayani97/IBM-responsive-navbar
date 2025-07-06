import React from "react";
import UserButton from "../UserButton";
import { useState, useEffect, useRef } from "react";
import ProductsDropdown from "../ProductsDropdown";
import AIDropdown from "../AIDropdown";
import HybridCloudDropdown from "../HybridCloudDropdown";
import SupportDropdown from "../SupportDropdown";
import {
  Search,
  MessageSquare,
  Globe,
  User,
  Menu,
  ArrowRight,
} from "lucide-react";
const TopBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <nav className="bg-white shadow fixed top-0 left-0 right-0 z-50">
      <div className="w-full flex items-center justify-between px-4 py-2">
        {/* Left side: Logo and Menu */}
        <div className="flex items-center gap-5">
          {/* Hamburger for mobile */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

          {/* IBM Logo */}
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold cursor-pointer hover:bg-gray-200">
              IBM
            </h1>
            <span className="text-gray-400 hidden sm:block">|</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 items-center">
            {[
              { label: "AI", hasDropdown: true },
              { label: "Hybrid Cloud", hasDropdown: true },
              { label: "Products", hasDropdown: true },
              { label: "Consulting", hasDropdown: false },
              { label: "Support", hasDropdown: true },
              { label: "Think", hasDropdown: false },
            ].map(({ label, hasDropdown }) => (
              <li
                key={label}
                className="relative hover:bg-gray-200 cursor-pointer px-2 py-1 rounded"
              >
                {hasDropdown ? (
                  <button
                    onClick={() => toggleMenu(label)}
                    className="flex cursor-pointer items-center gap-1 focus:outline-none whitespace-nowrap"
                  >
                    {label} <span>▾</span>
                  </button>
                ) : (
                  <span className="whitespace-nowrap">{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: Icons */}
        <div className="flex items-center justify-between">
          {[Search, MessageSquare, Globe, User].map((Icon, i) => (
            <div
              key={i}
              className="rounded-full p-2 hover:bg-gray-200 cursor-pointer"
            >
              <Icon className="w-4 h-4 text-gray-700" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 w-full h-screen mt-3">
          {mobileSubMenu === null && (
            <ul className="w-full h-full flex flex-col gap-3">
              {[
                { label: "AI", hasDropdown: true },
                { label: "Hybrid Cloud", hasDropdown: true },
                { label: "Products", hasDropdown: true },
                { label: "Consulting", hasDropdown: false },
                { label: "Support", hasDropdown: true },
                { label: "Think", hasDropdown: false },
              ].map(({ label, hasDropdown }) => (
                <li
                  key={label}
                  className="relative cursor-pointer hover:bg-gray-100 p-2 rounded"
                >
                  {hasDropdown ? (
                    <button
                      onClick={() => setMobileSubMenu(label)}
                      className="w-full cursor-pointer flex items-center justify-between focus:outline-none"
                    >
                      <span className="cursor-pointer">{label}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <span>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          )}

          {mobileSubMenu === "AI" && (
            <AIDropdown isMobile onBack={() => setMobileSubMenu(null)} />
          )}
          {mobileSubMenu === "Hybrid Cloud" && (
            <HybridCloudDropdown
              isMobile
              onBack={() => setMobileSubMenu(null)}
            />
          )}
          {mobileSubMenu === "Products" && (
            <ProductsDropdown isMobile onBack={() => setMobileSubMenu(null)} />
          )}
          {mobileSubMenu === "Support" && (
            <SupportDropdown isMobile onBack={() => setMobileSubMenu(null)} />
          )}
        </div>
      )}

      {/* Dropdowns */}
      <div ref={dropdownRef}>
        {activeMenu === "AI" && <AIDropdown mobileSubMenu={mobileSubMenu} />}
        {activeMenu === "Hybrid Cloud" && (
          <HybridCloudDropdown mobileSubMenu={mobileSubMenu} />
        )}
        {activeMenu === "Products" && (
          <ProductsDropdown mobileSubMenu={mobileSubMenu} />
        )}
        {activeMenu === "Support" && (
          <SupportDropdown mobileSubMenu={mobileSubMenu} />
        )}
      </div>
    </nav>
  );
};

export default TopBar;
