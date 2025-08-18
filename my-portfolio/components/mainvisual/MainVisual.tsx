'use client'

import Link from "next/link";
import { useState } from "react";
import Window from "./Window";
import { IoMenu } from "react-icons/io5";
import MobileMenu from "../ui/MobileMenu";
import { IoAirplaneSharp } from "react-icons/io5";

export default function MainVisual() {

  const [language, setLanguage] = useState<'eng' | 'jpn'>('eng');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-[96vh]">
      <button
      className="md:hidden flex ml-auto p-4"
      onClick={() => setMenuOpen(!menuOpen)}
      >
        <IoMenu size={32} className="text-[#03005D]"/>
      </button>

      <Window/>
      
        <div className="hidden md:flex pt-10 mx-auto my-0 justify-between text-3xl w-[65%]">
          <Link href="/" className="flex items-center title hover:scale-110 transition-transform">
          <IoAirplaneSharp className="text-[#FB9AA3] mr-4"/>Home</Link>

          <Link href="/about" className="flex items-center title hover:scale-110 transition-transform">
          <IoAirplaneSharp className="text-[#FB9AA3] mr-4"/>About</Link>

          <Link href="/works" className="flex items-center title hover:scale-110 transition-transform">
          <IoAirplaneSharp className="text-[#FB9AA3] mr-4"/>Works</Link>

          <Link href="/contact" className="flex items-center title hover:scale-110 transition-transform">
          <IoAirplaneSharp className="text-[#FB9AA3] mr-4"/>Contact</Link>
        </div>

         {menuOpen && (
          <MobileMenu
            language={language}
            setLanguage={setLanguage}
            onClose={() => setMenuOpen(false)}
            />
          )}
    </div>
  )
}

