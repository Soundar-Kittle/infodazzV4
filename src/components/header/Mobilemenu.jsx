"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiPlus, FiChevronDown } from "react-icons/fi";
import menu_data from "./menu-data";

const MobileMenus = ({ isOpen, setIsOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState("");

  const toggleDropdown = (title) => {
    setActiveDropdown(activeDropdown === title ? "" : title);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full">
      <ul className="space-y-3">
        {menu_data.map((menu) => (
          <React.Fragment key={menu.id}>
            {/* Regular Menu Items */}
            {!menu.has_dropdown && (
              <li>
                <Link
                  href={menu.link}
                  className="block py-2 px-4 text-gray-900 font-bold hover:bg-gray-100 hover:text-[#76a527] rounded duration-300"
                  onClick={closeMenu}
                >
                  {menu.title}
                </Link>
              </li>
            )}

            {/* Dropdown Menu Items */}
            {menu.has_dropdown && (
              <li className="relative">
<button
  type="button"
  onClick={() => toggleDropdown(menu.title)}
  className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 rounded duration-300 group"
  aria-expanded={activeDropdown === menu.title}
  aria-label={`Toggle ${menu.title} submenu`}
>
  <span className="font-bold text-gray-900 group-hover:text-[#76a527] duration-300">
    {menu.title}
  </span>
  <FiChevronDown
    className={`text-lg font-bold text-gray-900 group-hover:text-[#76a527] transform transition-transform duration-300 ${
      activeDropdown === menu.title ? "rotate-180" : "rotate-0"
    }`}
  />
</button>

                {/* Dropdown Content */}
                <ul
                  className={`mt-2 pl-6 space-y-2 overflow-hidden transition-all duration-300 ${
                    activeDropdown === menu.title
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {menu.sub_menus?.map((sub) => (
                    <li key={sub.title}>
                      <Link
                        href={sub.link}
                        className="block py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-[#76a527] rounded"
                        onClick={closeMenu}
                        target={sub.target || "_self"}
                      >
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenus;
