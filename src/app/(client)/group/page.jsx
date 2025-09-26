// import React from 'react';
// import { Building2, Brain, Lightbulb, Heart, Globe } from 'lucide-react';
// import Herosection from '@/components/Heroslider/Business/Herosection';

// export default function page() {
//   const groups = [
//     {
//       name: 'Kittle Private Limited',
//       icon: <Building2 className="w-8 h-8" />,
//       href: '#',
//       description: 'Leading innovation in private enterprise solutions',
//       iconColor: 'text-blue-400',
//       glowColor: 'from-blue-600/20',
//       angle: -90, // Top center
//     },
//     {
//       name: 'Seventh Sense Research Group',
//       icon: <Brain className="w-8 h-8" />,
//       href: '#',
//       description: 'Advancing research and development in cutting-edge technologies',
//       iconColor: 'text-purple-400',
//       glowColor: 'from-purple-600/20',
//       angle: -18, // Top-right
//     },
//     {
//       name: 'Dream Science Foundation',
//       icon: <Lightbulb className="w-8 h-8" />,
//       href: '#',
//       description: 'Fostering innovation and scientific advancement',
//       iconColor: 'text-amber-400',
//       glowColor: 'from-amber-600/20',
//       angle: 54, // Bottom-right
//     },
//     {
//       name: 'KASTER Charitable Trust',
//       icon: <Heart className="w-8 h-8" />,
//       href: '#',
//       description: 'Making a difference through charitable initiatives',
//       iconColor: 'text-red-400',
//       glowColor: 'from-red-600/20',
//       angle: 126, // Bottom-left
//     },
//     {
//       name: 'Infodazz',
//       icon: <Globe className="w-8 h-8" />,
//       href: '#',
//       description: 'Connecting the world through digital innovation',
//       iconColor: 'text-emerald-400',
//       glowColor: 'from-emerald-600/20',
//       angle: -162, // Top-left
//     },
//   ];

//   return (
//     <>
//      <section className="mt-40 py-24 px-4 bg-white relative overflow-hidden">
//         <Herosection />

//   <div className="max-w-7xl mx-auto text-center mb-20">
//     <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
//       Our Group Companies
//     </h2>
//   </div>

//   <div className="relative min-h-[650px] flex items-center justify-center">
//     {/* Orbit Ring */}
//     <div className="absolute w-[640px] h-[640px] border border-gray-200/50 rounded-full"></div>

//     {/* Center Core */}
//     <div className="absolute z-10 w-40 h-40 flex items-center justify-center">
//       <div className="absolute inset-0 rounded-full bg-white border border-gray-200 shadow-lg"></div>
//       <div className="relative z-10 text-center">
//         <Globe className="w-8 h-8 mx-auto mb-2 text-blue-500" />
//         <h3 className="text-sm font-semibold text-gray-700">
//           Global Innovation
//         </h3>
//       </div>
//     </div>

//     {/* Cards in Circular Orbit */}
//     {groups.map((group, index) => (
//       <div
//         key={index}
//         className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//         style={{
//           transform: `rotate(${group.angle}deg) translateY(-380px) rotate(-${group.angle}deg)`,
//         }}
//       >
//         <a
//           href={group.href}
//           className="block w-64 -translate-x-1/2 transition-transform duration-300 hover:scale-105"
//         >
//           <div className={`rounded-xl bg-white p-4 shadow-md border border-gray-200`}>
//             <div className={`${group.iconColor} mb-3`}>{group.icon}</div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-1">{group.name}</h3>
//             <p className="text-sm text-gray-600">{group.description}</p>
//             <div className="mt-3 text-xs font-medium text-blue-500">
//               Learn more →
//             </div>
//           </div>
//         </a>
//       </div>
//     ))}
//   </div>
// </section>
//     </>
//   );
// }

"use client";

// import React, { useEffect, useState } from "react";
// import { Building2, Brain, Lightbulb, Heart, Globe } from "lucide-react";
// import Herosection from "@/components/Heroslider/Group/Herosection";
// import Ctasectionbtm from "@/components/cta/landingpage/Ctasectionbtm";
// // import infodazz from '../../../../public/logo/logo_blue.png';
// // import kittle from '../../../../public/logo/kittle.png';
// // import dream from '../../../../public/logo/dreamscience.png';
// // import ssrg from '../../../../public/logo/ssrg.png';

// const groups = [
//   {
//     name: "Kittle Private Limited",
//     iconColor: "text-blue-500",
//     image: "/logo/kittle.png",
//   },
//   {
//     name: "Seventh Sense Research Group",
//     iconColor: "text-purple-500",
//     image: "/logo/ssrg.png",
//   },
//   {
//     name: "Dream Science Foundation",
//     iconColor: "text-amber-500",
//     image: "/logo/dreamscience.png",
//   },
//   {
//     name: "KASTER Charitable Trust",
//     iconColor: "text-red-500",
//     image: "/logo/kaster_logo.png",
//   },
//   {
//     name: "Infodazz",
//     iconColor: "text-emerald-500",
//     image: "/logo/logo_blue.png",
//   },
// ];

// const renderCircleNode = (group) => (
//   <div className="relative w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 overflow-hidden rounded shadow-md border border-gray-300 bg-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200">
//     <img
//       src={group.image}
//       alt={group.name}
//       className="max-w-[80%] max-h-[70%] object-contain"
//     />
//   </div>
// );

// export default function Page() {
//   const [mounted, setMounted] = useState(false);
//   const circleColors = ["#facc15", "#0ea5e9", "#4ade80", "#f43f5e", "#a855f7"];

//   useEffect(() => setMounted(true), []);

//   const getCirclePosition = (index, total, radius = outerRadius) => {
//     const angle = -Math.PI / 2 + (index / total) * 2 * Math.PI;
//     return {
//       x: radius * Math.cos(angle),
//       y: radius * Math.sin(angle),
//     };
//   };

//   return (
//     <>
//       <Herosection />
//         <section className="py-24 px-4 bg-white">
//           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
//             {/* Left Text Content */}
//             <div className="relative w-[90vw] max-w-[500px] h-[90vw] max-h-[500px] mx-auto lg:mx-0">
//               <svg
//                 className="absolute w-full h-full z-0 pointer-events-none"
//                 viewBox="0 0 420 420"
//               >
//                 <g transform="translate(210, 210)">
//                   {groups.map((_, i) => {
//                     const angle = 360 / groups.length;
//                     const offset = i * angle;
//                     const radius = 115;
//                     const arcLen = (2 * Math.PI * radius * angle) / 360;
//                     return (
//                       <circle
//                         key={`arc-${i}`}
//                         r={radius}
//                         cx="0"
//                         cy="0"
//                         fill="none"
//                         stroke={circleColors[i]}
//                         strokeWidth="10"
//                         strokeDasharray={`${arcLen} 999`}
//                         transform={`rotate(${offset - 90})`}
//                         strokeLinecap="butt"
//                       />
//                     );
//                   })}
//                 </g>

//                 {/* Connector Lines */}
//                 {mounted &&
//                   groups.map((_, i) => {
//                     const angle = (i / groups.length) * 2 * Math.PI - Math.PI / 2;
//                     const outerRadius = 180;
//                     const arcRadius = 115;
//                     const dotRadius = arcRadius + 5;
//                     const lineStartRadius = arcRadius + 10;
//                     const nodeRadius = 255;
//                     const endDotRadius = nodeRadius - 15;

//                     const dotX = 210 + dotRadius * Math.cos(angle);
//                     const dotY = 210 + dotRadius * Math.sin(angle);
//                     const lineStartX = 210 + lineStartRadius * Math.cos(angle);
//                     const lineStartY = 210 + lineStartRadius * Math.sin(angle);
//                     const lineEndX = 210 + endDotRadius * Math.cos(angle);
//                     const lineEndY = 210 + endDotRadius * Math.sin(angle);

//                     return (
//                       <g key={`line-${i}`}>
//                         <circle
//                           cx={dotX}
//                           cy={dotY}
//                           r="5"
//                           fill={circleColors[i]}
//                         />
//                         <line
//                           x1={lineStartX}
//                           y1={lineStartY}
//                           x2={lineEndX}
//                           y2={lineEndY}
//                           stroke="#CBD5E1"
//                           strokeWidth="2"
//                           strokeDasharray="4 4"
//                           className="animated-line"
//                         />
//                         <circle
//                           cx={lineEndX}
//                           cy={lineEndY}
//                           r="4"
//                           fill="#CBD5E1"
//                         />
//                       </g>
//                     );
//                   })}
//               </svg>

//               {/* Center Node */}
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer">
//                 <div className="w-50 h-50 bg-gray-100 rounded-full shadow-md border border-gray-200 flex items-center justify-center text-center">
//                   <div>
//                     <Globe className="w-24 h-24 mx-auto text-gray-700 mb-2" />
//                     <h3 className="text-sm font-semibold text-gray-800">
//                       Business Network
//                     </h3>
//                   </div>
//                 </div>
//               </div>

//               {/* Outer Nodes */}
//               {mounted &&
//                 groups.map((group, i) => {
//                   const { x, y } = getCirclePosition(i, groups.length, 250);
//                   return (
//                     <div
//                       key={i}
//                       className="absolute animate-scale-in cursor-pointer"
//                       style={{
//                         left: `calc(50% + ${x}px)`,
//                         top: `calc(50% + ${y}px)`,
//                         transform: "translate(-50%, -50%)",
//                         animationDelay: `${i * 0.2}s`,
//                       }}
//                     >
//                       {renderCircleNode(group)}
//                     </div>
//                   );
//                 })}
//             </div>

//             {/* Right Circular Network */}
//             <div className="w-full lg:max-w-xl text-center lg:text-left mt-10 lg:mt-0 lg:pr-10">
//               <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
//                 Our Expanding <br />
//                 <span className="text-purple-600">Global Business Network</span>
//               </h2>
//               <p className="mt-6 text-gray-600 text-lg">
//                 Our business spans across diverse industries — from media and
//                 research to education and tech. Each brand under our umbrella
//                 contributes to a powerful ecosystem of innovation, impact, and
//                 global reach.
//               </p>
//             </div>
//           </div>

//           <style>{`
//         @keyframes flowing-dash {
//           0% { stroke-dashoffset: 0; }
//           100% { stroke-dashoffset: -100; }
//         }
//         .animated-line {
//           stroke-linecap: round;
//           animation: flowing-dash 2s linear infinite;
//           opacity: 0.8;
//         }
//         @keyframes scale-in {
//           0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
//           100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
//         }
//         .animate-scale-in {
//           animation: scale-in 0.8s ease-out forwards;
//         }
//       `}</style>
//         </section>

//       <Ctasectionbtm />
//     </>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { Building2, Brain, Lightbulb, Heart, Globe } from "lucide-react";
// import Herosection from "@/components/Heroslider/Group/Herosection";
// import Ctasectionbtm from "@/components/cta/landingpage/Ctasectionbtm";
// import Image from 'next/image'; // Assuming you're using Next.js for Image optimization

// const groups = [
//   { name: "Kittle Private Limited", image: "/logo/kittle.png" },
//   { name: "Seventh Sense Research Group", image: "/logo/ssrg.png" },
//   { name: "Dream Science Foundation", image: "/logo/dreamscience.png" },
//   { name: "KASTER Charitable Trust", image: "/logo/kaster_logo.png" },
//   { name: "Infodazz", image: "/logo/logo_blue.png" },
// ];

// const circleColors = [
//   "#facc15", "#0ea5e9", "#4ade80", "#f43f5e", "#a855f7"
// ];

// const renderCircleNode = (group) => (
//   <div className="relative w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-18 lg:w-28 lg:h-20 overflow-hidden rounded shadow-md border border-gray-300 bg-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200">
//     <img
//       src={group.image}
//       alt={group.name}
//       className="max-w-[80%] max-h-[70%] object-contain"
//     />
//   </div>
// );



// export default function Page() {
//   const [mounted, setMounted] = useState(false);
//   const [dimensions, setDimensions] = useState({
//     outerRadius: 250,
//     arcRadius: 115,
//   });

//   // Resize logic to make the orbit size responsive
//   useEffect(() => {
//     setMounted(true);

//     const handleResize = () => {
//       const containerSize = Math.min(window.innerWidth * 0.85, 500);
//       const scale = containerSize / 500; // Base size is 500px

//       setDimensions({
//         outerRadius: 250 * scale,
//         arcRadius: 115 * scale,
//       });
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const getCirclePosition = (index, total) => {
//     const angle = -Math.PI / 2 + (index / total) * 2 * Math.PI;
//     return {
//       x: dimensions.outerRadius * Math.cos(angle),
//       y: dimensions.outerRadius * Math.sin(angle),
//     };
//   };

//   return (
//     <>
//       <Herosection />

//       <section className="py-12 md:py-24 px-4 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight text-center lg:text-left lg:hidden mb-8">
//           Our Expanding{" "}
//           <span className="text-purple-600">Global Business Network</span>
//         </h2>

//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
//           {/* Network Visualization */}
//           <div className="relative w-full max-w-[320px] xs:max-w-[400px] sm:max-w-[450px] h-[320px] xs:h-[400px] sm:h-[450px] mx-auto lg:mx-0 order-2 lg:order-1">
//             <svg
//               className="absolute w-full h-full z-0 pointer-events-none"
//               viewBox="0 0 420 420"
//               preserveAspectRatio="xMidYMid meet"
//             >
//               <g transform="translate(210, 210)">
//                 {groups.map((_, i) => {
//                   const angle = 360 / groups.length;
//                   const offset = i * angle;
//                   const radius = dimensions.arcRadius;
//                   const arcLen = (2 * Math.PI * radius * angle) / 360;
//                   return (
//                     <circle
//                       key={`arc-${i}`}
//                       r={radius}
//                       cx="0"
//                       cy="0"
//                       fill="none"
//                       stroke={circleColors[i]}
//                       strokeWidth="10"
//                       strokeDasharray={`${arcLen} 999`}
//                       transform={`rotate(${offset - 90})`}
//                       strokeLinecap="butt"
//                     />
//                   );
//                 })}
//               </g>

//               {/* Connector Lines */}
//               {mounted &&
//                 groups.map((_, i) => {
//                   const angle = (i / groups.length) * 2 * Math.PI - Math.PI / 2;
//                   const dotRadius = dimensions.arcRadius + 5;
//                   const lineStartRadius = dimensions.arcRadius + 10;
//                   const nodeRadius = dimensions.outerRadius + 5;
//                   const endDotRadius = nodeRadius - 15;

//                   const dotX = 210 + dotRadius * Math.cos(angle);
//                   const dotY = 210 + dotRadius * Math.sin(angle);
//                   const lineStartX = 210 + lineStartRadius * Math.cos(angle);
//                   const lineStartY = 210 + lineStartRadius * Math.sin(angle);
//                   const lineEndX = 210 + endDotRadius * Math.cos(angle);
//                   const lineEndY = 210 + endDotRadius * Math.sin(angle);

//                   return (
//                     <g key={`line-${i}`}>
//                       <circle cx={dotX} cy={dotY} r="5" fill={circleColors[i]} />
//                       <line
//                         x1={lineStartX}
//                         y1={lineStartY}
//                         x2={lineEndX}
//                         y2={lineEndY}
//                         stroke="#CBD5E1"
//                         strokeWidth="2"
//                         strokeDasharray="4 4"
//                         className="animated-line"
//                       />
//                       <circle cx={lineEndX} cy={lineEndY} r="4" fill="#CBD5E1" />
//                     </g>
//                   );
//                 })}
//             </svg>

//             {/* Center Node */}
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer">
//               <div className="w-40 h-40 sm:w-44 sm:h-44 bg-gray-100 rounded-full shadow-md border border-gray-200 flex items-center justify-center text-center p-4">
//                 <div>
//                   <Globe className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-gray-700 mb-2" />
//                   <h3 className="text-sm font-semibold text-gray-800">
//                     Business Network
//                   </h3>
//                 </div>
//               </div>
//             </div>

//             {/* Outer Nodes */}
//             {mounted &&
//               groups.map((group, i) => {
//                 const { x, y } = getCirclePosition(i, groups.length);
//                 return (
//                   <div
//                     key={i}
//                     className="absolute animate-scale-in cursor-pointer"
//                     style={{
//                       left: `calc(50% + ${x}px)`,
//                       top: `calc(50% + ${y}px)`,
//                       transform: "translate(-50%, -50%)",
//                       animationDelay: `${i * 0.2}s`,
//                     }}
//                   >
//                     {renderCircleNode(group)}
//                   </div>
//                 );
//               })}
//           </div>

//           {/* Text Content */}
//           <div className="w-full lg:max-w-xl text-center lg:text-left order-1 lg:order-2">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight hidden lg:block">
//               Our Expanding <br />
//               <span className="text-purple-600">Global Business Network</span>
//             </h2>
//             <p className="mt-4 lg:mt-6 text-gray-600 text-base lg:text-lg">
//               Our business spans across diverse industries — from media and
//               research to education and tech. Each brand under our umbrella
//               contributes to a powerful ecosystem of innovation, impact, and
//               global reach.
//             </p>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes flowing-dash {
//           0% { stroke-dashoffset: 0; }
//           100% { stroke-dashoffset: -100; }
//         }
//         .animated-line {
//           stroke-linecap: round;
//           animation: flowing-dash 2s linear infinite;
//           opacity: 0.8;
//         }
//         @keyframes scale-in {
//           0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
//           100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
//         }
//         .animate-scale-in {
//           animation: scale-in 0.8s ease-out forwards;
//         }

//         /* Custom breakpoint for extra small devices */
//         @media (max-width: 768px) {
//           .xs\\:max-w-[400px] {
//             max-width: 400px;
//           }
//           .xs\\:h-[400px] {
//             height: 400px;
//           }
//         }
//       `}</style>
//     </section>


//       <Ctasectionbtm />
//     </>
//   );
// }

// 'use client';

// import React, { useEffect, useState } from "react";
// import { Globe } from "lucide-react";
// import Herosection from "@/components/Heroslider/Group/Herosection";
// import Ctasectionbtm from "@/components/cta/landingpage/Ctasectionbtm";
// import Image from 'next/image'; // Assuming you're using Next.js for Image optimization

// const groups = [
//   { name: "Kittle Private Limited", image: "/logo/kittle.png" },
//   { name: "Seventh Sense Research Group", image: "/logo/ssrg.png" },
//   { name: "Dream Science Foundation", image: "/logo/dreamscience.png" },
//   { name: "KASTER Charitable Trust", image: "/logo/kaster_logo.png" },
//   { name: "Infodazz", image: "/logo/logo_blue.png" },
// ];

// const renderCircleNode = (group) => (
//   <div className="relative w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-18 lg:w-28 lg:h-20 overflow-hidden rounded shadow-md border border-gray-300 bg-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200">
//     <img
//       src={group.image}
//       alt={group.name}
//       className="max-w-[80%] max-h-[70%] object-contain"
//     />
//   </div>
// );

// export default function Page() {
//   const [mounted, setMounted] = useState(false);
//   const [dimensions, setDimensions] = useState({
//     outerRadius: 250,
//     arcRadius: 115,
//   });

//   // Resize logic to make the orbit size responsive
//   useEffect(() => {
//     setMounted(true);

//     const handleResize = () => {
//       const containerSize = Math.min(window.innerWidth * 0.85, 500);
//       const scale = containerSize / 500; // Base size is 500px

//       setDimensions({
//         outerRadius: 250 * scale,
//         arcRadius: 115 * scale,
//       });
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const getCirclePosition = (index, total) => {
//     const angle = -Math.PI / 2 + (index / total) * 2 * Math.PI;
//     return {
//       x: dimensions.outerRadius * Math.cos(angle),
//       y: dimensions.outerRadius * Math.sin(angle),
//     };
//   };

//   return (
//     <>
//       <Herosection />

//       <section className="py-12 md:py-24 px-4 bg-white overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight text-center lg:text-left lg:hidden mb-8">
//             Our Expanding{" "}
//             <span className="text-purple-600">Global Business Network</span>
//           </h2>

//           <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
//             {/* Orbit container */}
//             <div className="relative w-full max-w-[320px] xs:max-w-[400px] sm:max-w-[450px] h-[320px] xs:h-[400px] sm:h-[450px] mx-auto lg:mx-0 orbit-container">
//               {/* Center Node */}
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer">
//                 <div className="w-40 h-40 sm:w-44 sm:h-44 bg-gray-100 rounded-full shadow-md border border-gray-200 flex items-center justify-center text-center p-4">
//                   <div>
//                     <Globe className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-gray-700 mb-2" />
//                     <h3 className="text-sm font-semibold text-gray-800">
//                       Business Network
//                     </h3>
//                   </div>
//                 </div>
//               </div>

//               {/* Lines connecting the center node to each outer node */}
//               <svg
//                 className="absolute w-full h-full z-0 pointer-events-none"
//                 viewBox="0 0 420 420"
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <g transform="translate(210, 210)">
//                   {mounted &&
//                     groups.map((_, i) => {
//                       const { x, y } = getCirclePosition(i, groups.length);
//                       return (
//                         <line
//                           key={i}
//                           x1="0"
//                           y1="0"
//                           x2={x}
//                           y2={y}
//                           stroke="#CBD5E1"
//                           strokeWidth="2"
//                           strokeDasharray="4 4"
//                           className="animated-line"
//                         />
//                       );
//                     })}
//                 </g>
//               </svg>

//               {/* Outer Nodes */}
//               {mounted &&
//                 groups.map((group, i) => {
//                   const { x, y } = getCirclePosition(i, groups.length);
//                   return (
//                     <div
//                       key={i}
//                       className="absolute animate-scale-in cursor-pointer"
//                       style={{
//                         left: `calc(50% + ${x}px)`,
//                         top: `calc(50% + ${y}px)`,
//                         transform: "translate(-50%, -50%)",
//                         animationDelay: `${i * 0.2}s`,
//                       }}
//                     >
//                       {renderCircleNode(group)}
//                     </div>
//                   );
//                 })}
//             </div>

//             {/* Text Content */}
//             <div className="w-full lg:max-w-xl text-center lg:text-left order-1 lg:order-2">
//               <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight hidden lg:block">
//                 Our Expanding <br />
//                 <span className="text-purple-600">Global Business Network</span>
//               </h2>
//               <p className="mt-4 lg:mt-6 text-gray-600 text-base lg:text-lg">
//                 Our business spans across diverse industries — from media and
//                 research to education and tech. Each brand under our umbrella
//                 contributes to a powerful ecosystem of innovation, impact, and
//                 global reach.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Ctasectionbtm />
//       <style>
//         {
//           ` 
//           @keyframes rotateOrbit {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }

//           // .orbit-container {
//           //   position: relative;
//           //   width: 100%;
//           //   height: 100%;
           
//           // }

//           .center-node {
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             // transform: translate(-50%, -50%);
//              animation: rotateOrbit 20s linear infinite;
//             transform-origin: center;
//             z-index: 10;
//           }

//           .animated-line {
//             stroke-linecap: round;
//             animation: flowing-dash 2s linear infinite;
//             opacity: 0.8;
//           }

//           @keyframes flowing-dash {
//             0% { stroke-dashoffset: 0; }
//             100% { stroke-dashoffset: -100; }
//           }
//           `
//         }
//       </style>
//     </>
//   );
// }

// "use client";

// import React, { useEffect, useState } from "react";
// import { Globe } from "lucide-react";
// import Herosection from "@/components/Heroslider/Group/Herosection";
// import Ctasectionbtm from "@/components/cta/landingpage/Ctasectionbtm";

// const groups = [
//   { name: "Kittle Private Limited", image: "/logo/kittle.png" },
//   { name: "Seventh Sense Research Group", image: "/logo/ssrg.png" },
//   { name: "Dream Science Foundation", image: "/logo/dreamscience.png" },
//   { name: "KASTER Charitable Trust", image: "/logo/kaster_logo.png" },
//   { name: "Infodazz", image: "/logo/logo_blue.png" },
// ];

// const renderCircleNode = (group) => (
//   <div className="fixed w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-18 lg:w-28 lg:h-20 overflow-hidden rounded shadow-md border border-gray-300 bg-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200">
//     <img
//       src={group.image}
//       alt={group.name}
//       className="max-w-[80%] max-h-[70%] object-contain"
//     />
//   </div>
// );

// export default function Page() {
//   const [mounted, setMounted] = useState(false);
//   const [dimensions, setDimensions] = useState({
//     outerRadius: 250,
//     arcRadius: 115,
//   });
//   const orbitRadius = 180; // Instead of 160
//   const radius = 160;



//   useEffect(() => {
//     setMounted(true);
//     const handleResize = () => {
//       const containerSize = Math.min(window.innerWidth * 0.85, 500);
//       const scale = containerSize / 500;
//       setDimensions({
//         outerRadius: 250 * scale,
//         arcRadius: 115 * scale,
//       });
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const getCirclePosition = (index, total) => {
//     const angle = (-Math.PI / 2) + (index / total) * 2 * Math.PI;
//     return {
//       x: dimensions.outerRadius * Math.cos(angle),
//       y: dimensions.outerRadius * Math.sin(angle),
//     };
//   };

//   return (
//     <>
//       <Herosection />
//       <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
//         {/* Center Node */}
//         <div className="w-44 h-44 bg-gray-100 rounded-full shadow-md border border-gray-200 z-10 flex items-center justify-center text-center">
//           <div>
//             <Globe className="w-20 h-20 mx-auto text-gray-700 mb-2" />
//             <h3 className="text-sm font-semibold text-gray-800">
//               Business Network
//             </h3>
//           </div>
//         </div>

//         {/* Rotating Cards */}
//         {mounted &&
//           groups.map((group, index) => {
//             const angle = (360 / groups.length) * index;

//             return (
//               <div
//   key={index}
//   className="absolute top-1/2 left-1/2"
//   style={{
//     transform: `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`,
//     transformOrigin: 'center',
//     animation: `orbitCard${index} ${20 + index * 2}s linear infinite`,
//   }}
// >
//   {renderCircleNode(group)}
// </div>
//             );
//           })}
//       </section>
//       <Ctasectionbtm />

//       <style jsx>{`
//        ${groups
//     .map(
//       (_, i) => `
//     @keyframes orbitCard${i} {
//       0% {
//         transform: rotate(0deg) translate(200px) rotate(0deg);
//       }
//       100% {
//         transform: rotate(360deg) translate(200px) rotate(-360deg);
//       }
//     }
//   `
//     )
//     .join('\n')}
//       `}</style>
//     </>
//   );
// }

'use client';

import React, { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import Herosection from "@/components/Heroslider/Group/Herosection";
import Ctasectionbtm from "@/components/cta/landingpage/Ctasectionbtm";
import Image from 'next/image'; // Assuming you're using Next.js for Image optimization

const groups = [
  { name: "Kittle Private Limited", image: "/logo/kittle.png" },
  { name: "Seventh Sense Research Group", image: "/logo/ssrg.png" },
  { name: "Dream Science Foundation", image: "/logo/dreamscience.png" },
  { name: "KASTER Charitable Trust", image: "/logo/kaster_logo.png" },
  { name: "Infodazz", image: "/logo/logo_blue.png" },
];

const renderCircleNode = (group) => (
  <div className="relative w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-18 lg:w-28 lg:h-20 overflow-hidden rounded shadow-md border border-gray-300 bg-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200">
    <img
      src={group.image}
      alt={group.name}
      className="max-w-[80%] max-h-[70%] object-contain"
    />
  </div>
);

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [dimensions, setDimensions] = useState({
    outerRadius: 250,
    arcRadius: 115,
  });

  // Resize logic to make the orbit size responsive
  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      const containerSize = Math.min(window.innerWidth * 0.85, 500);
      const scale = containerSize / 500; // Base size is 500px

      setDimensions({
        outerRadius: 250 * scale,
        arcRadius: 115 * scale,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCirclePosition = (index, total) => {
    const angle = -Math.PI / 2 + (index / total) * 2 * Math.PI;
    return {
      x: dimensions.outerRadius * Math.cos(angle),
      y: dimensions.outerRadius * Math.sin(angle),
    };
  };

  const getWheelPosition = (index, total) => {
    const angleIncrement = (2 * Math.PI) / total;
    const angle = -Math.PI / 2 + index * angleIncrement; // Start from top (minus PI/2)
    
    return {
      x: dimensions.wheelRadius * Math.cos(angle),
      y: dimensions.wheelRadius * Math.sin(angle),
      angle: (angle * 180) / Math.PI, // Convert to degrees for CSS rotation
    };
  };

  return (
    <>
      <Herosection />

      <section className="w-full py-20 flex flex-col items-center justify-center relative">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Business Network</h1>
        <p className="text-lg text-gray-600 max-w-2xl text-center mb-16 px-4">
          Connect with our partners within our extensive business ecosystem
        </p>
        
        <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
          {/* Rotating Wheel */}
          <div className="absolute w-[440px] h-[440px] rounded-full border-2 border-dashed border-gray-300 animate-spin" 
               style={{ animationDuration: '60s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}>
          </div>
          
          {/* Center Node */}
          <div className="w-44 h-44 bg-white rounded-full shadow-lg border border-gray-200 z-10 flex items-center justify-center text-center transition-all hover:shadow-xl">
            <div>
              <Globe className="w-20 h-20 mx-auto text-gray-700 mb-2" />
              <h3 className="text-sm font-semibold text-gray-800">
                Business Network
              </h3>
            </div>
          </div>

          {/* Wheel-positioned Cards */}
          {mounted &&
            groups.map((group, index) => {
              const position = getWheelPosition(index, groups.length);
              
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 animate-spin-slow"
                  style={{
                    transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) rotate(${position.angle}deg)`,
                    animationDuration: '60s',
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite',
                    zIndex: 5,
                  }}
                >
                  {renderCircleNode(group)}
                </div>
              );
            })}
        </div>
      </section>
      <Ctasectionbtm />
      <style>
        {
          ` 
          @keyframes rotateOrbit {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

         .center-node {
            position: absolute;
            top: 50%;
            left: 50%;
            // transform: translate(-50%, -50%);
             animation: rotateOrbit 20s linear infinite;
            transform-origin: center;
            z-index: 10;
          }

          @keyframes flowing-dash {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -100; }
          }
          `
        }
      </style>
    </>
  );
}
