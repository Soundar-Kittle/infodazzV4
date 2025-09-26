// "use client";

// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { IoHomeOutline } from "react-icons/io5";
// import { BsChevronDown } from "react-icons/bs";
// import menu_data from "./menu-data";

// const NavMenu = () => {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const toggleSubMenu = (menu) => {
//     setActiveMenu(activeMenu === menu ? null : menu);
//   };

//   if (!mounted) return null;

//   return (
//     <ul className="flex space-x-6 items-center">
//       {/* Home */}
//       <li>
//         <Link href="/" aria-label="Home">
//           <IoHomeOutline size={22} className="text-gray-800 hover:text-[#76a527] transition  duration-500" />
//         </Link>
//       </li>

//       {menu_data.map((item, i) => (
//         <li key={i} className="relative group">
//           {/* Normal link (no dropdown) */}
//           {!item.has_dropdown ? (
//             <Link
//               href={item.link || "/"}
//               className="text-gray-900 font-semibold uppercase hover:text-[#76a527] transition duration-700"
//             >
//               {item.title}
//             </Link>
//           ) : (
//             <div
//               className="flex items-center space-x-1 cursor-pointer"
//               onClick={() => toggleSubMenu(item.title)}
//             >
//               <span className="text-gray-900 font-semibold uppercase hover:text-[#76a527] transition duration-700">
//                 {item.title}
//               </span>
//               <span className="text-lg font-bold text-gray-900">
//                 <BsChevronDown />
//               </span>
//             </div>
//           )}

//           {/* Submenus */}
//           {item.has_dropdown && item.sub_menus && (
//             <ul
//               className={`absolute left-0 mt-2 w-72 bg-white shadow-lg rounded-md p-2 transition-all duration-300 z-20 ${
//                 activeMenu === item.title
//                   ? "opacity-100 visible scale-100"
//                   : "opacity-0 invisible scale-95"
//               }`}
//             >
//               {item.sub_menus.map((sub_item, sub_i) => (
//                 <li key={sub_i}>
//                   {sub_item.target === "_blank" ? (
//                     <a
//                       href={sub_item.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="block px-4 py-3 text-gray-900 font-medium hover:bg-gray-100 hover:text-[#76a527] transition"
//                     >
//                       {sub_item.title}
//                     </a>
//                   ) : (
//                     <Link
//                       href={sub_item.link}
//                       className="block px-4 py-3 text-gray-900 font-medium hover:bg-gray-100 hover:text-[#76a527] transition"
//                     >
//                       {sub_item.title}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default NavMenu;

"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import menu_data from "./menu-data";

export default function NavMenu() {
  const [open, setOpen] = useState(null);

  return (
    <ul className="flex flex-nowrap items-center whitespace-nowrap">
      {menu_data.map((item) => {
        const isMega = item.has_dropdown && item.mega_menu;
        const isOpen = open === item.title;

        return (
          <li
            key={item.id}
            className="relative shrink-0"
            onMouseEnter={() => setOpen(item.title)}
            onMouseLeave={() => setOpen(null)}
          >
            {/* Top-level */}
            {item.has_dropdown ? (
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : item.title)}
                aria-expanded={isOpen}
                className="shrink-0 flex items-center gap-1 uppercase font-semibold text-gray-900 hover:text-blue-600 transition px-2"
              >
                <span>{item.title}</span>
                <BsChevronDown className="text-base" />
              </button>
            ) : (
              <Link
                href={item.link || "/"}
                className="shrink-0 flex items-center gap-2 uppercase font-semibold text-gray-900 hover:text-blue-600 transition px-2"
              >
                {item.icon ? (
                  <item.icon className="hidden 2xl:inline-block w-4 h-4" strokeWidth={1.8} />
                ) : null}
                {item.title}
              </Link>
            )}

            {/* Mega menu */}
            {isMega && item.sections && (() => {
              const cols = item.sections.length;
              const isSingle = cols === 1;

              const containerPos = isSingle ? "left-0 translate-x-0" : "left-1/2 -translate-x-1/2";
              const containerWidth = isSingle ? "w-[420px] max-w-[90vw]" : "w-[980px] max-w-[95vw]";
              const containerPad = isSingle ? "p-3" : "p-5";
              const gridCols =
                cols >= 4 ? "grid-cols-4" :
                cols === 3 ? "grid-cols-3" :
                cols === 2 ? "grid-cols-2" : "grid-cols-1";

              return (
                <div
                  className={`absolute top-full mt-2 ${containerPos} ${containerWidth} ${containerPad}
                              bg-white rounded-xl shadow-xl border border-gray-100 z-30
                              transition-all duration-200
                              ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}
                >
                  <div className={`grid ${gridCols} gap-6`}>
                    {item.sections.map((sec, si) => (
                      <div key={si}>
                        {sec.heading && (
                          <h4 className="text-[12px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                            {sec.heading}
                          </h4>
                        )}
                        <ul className="space-y-1.5">
                          {sec.items.map((link, li) => {
                            const Icon = link.icon;
                            return (
                              <li key={li}>
                                <Link
                                  href={link.link}
                                  className="flex items-start gap-2.5 group rounded-md px-1 py-1 hover:bg-gray-50"
                                >
                                  {Icon ? (
                                    <Icon className="w-4 h-4 text-blue-500 mt-[3px] shrink-0" strokeWidth={1.8} />
                                  ) : (
                                    <span className="w-4 h-4 mt-[3px] shrink-0" />
                                  )}
                                  <div className="leading-snug">
                                    <div className="text-gray-900 font-medium group-hover:text-blue-600">
                                      {link.title}
                                    </div>
                                    {link.desc && (
                                      <div className="text-[12px] text-gray-500">
                                        {link.desc}
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </li>
        );
      })}
    </ul>
  );
}
