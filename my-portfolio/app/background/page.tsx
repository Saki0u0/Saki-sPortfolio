"use client";

import Section2020 from "@/components/about/background/2020";
import Section2024 from "@/components/about/background/2024";
import Section2025 from "@/components/about/background/2025";
import AutoDashedLine from "@/components/about/background/AutoDash";
import AboutSubnavResponsive from "@/components/about/profile/AboutSubnavResponsive";
import Header from "@/components/ui/header";
import { useState } from "react";
import { FaMapPin } from "react-icons/fa";

export default function Background() {
  const [year, setYear] = useState<2020 | 2024 | 2025>(2020);

  return (
    <div>
      <Header />
      <div className="mt-24 mb-10 md:w-[80%] w-[96%] mx-auto">
        <h2 className="title text-5xl my-10 tracking-widest ">Background</h2>
        <div className="md:w-[90%] w-[96%] mx-auto font-sans">
          <div className="flex justify-center gap-6 mb-8 text-2xl items-center">
            <button
              onClick={() => setYear(2020)}
              className={`${year === 2020 ? "font-bold text-[#FB9AA3]" : "text-gray-300"} flex items-center gap-2 cursor-pointer`}
            >
              {year === 2020 && <FaMapPin />}
              <span>2020</span>
            </button>

            <AutoDashedLine />
            
            <button
              onClick={() => setYear(2024)}
              className={`${year === 2024 ? "font-bold text-[#FB9AA3]" : "text-gray-300"} flex items-center gap-2 cursor-pointer`}
            >
              {year === 2024 && <FaMapPin />}
              <span>2024</span>
            </button>

            <AutoDashedLine />
      
            <button
              onClick={() => setYear(2025)}
              className={`${year === 2025 ? "font-bold text-[#FB9AA3]" : "text-gray-300"} flex items-center gap-2 cursor-pointer`}
            >
              {year === 2025 && <FaMapPin />}
              <span>2025</span>
            </button>
          </div>
          
          <div className="p-4 overflow-y-scroll h-[54vh]">
            {year === 2020 && (
              <Section2020 />
            )}

            {year === 2024 && (
              <Section2024 />
            )}

            {year === 2025 && (
              <Section2025 />
            )}
          </div>
        </div>
      </div>
      <AboutSubnavResponsive />
    </div>
  );
}