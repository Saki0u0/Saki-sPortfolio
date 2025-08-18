import Link from "next/link";
import { IoAirplaneSharp } from "react-icons/io5";

export default function AboutMenu() {
  return (
    <div>
      <footer className="fixed inset-x-0 bottom-0 z-50 
                   bg-[#03005D] backdrop-blur border-t border-black/10
                   pb-[env(safe-area-inset-bottom)]">
          <nav className="mx-auto max-w-6xl px-4 py-3  flex items-center justify-between gap-4 text-xl md:text-2xl md:w-[80%]">
          <Link href="/about" className="title hover:scale-110 transition-transform flex items-center ">
            <IoAirplaneSharp className="text-[#FB9AA3] mr-3" />
            <span className="text-white">Profile</span>
          </Link>
          <Link href="/background" className="title hover:scale-110 transition-transform flex items-center">
            <IoAirplaneSharp className="text-[#FB9AA3] mr-3" />
            <span className="text-white">Background</span>
          </Link>
          <Link href="/my-strengths" className="title hover:scale-110 transition-transform flex items-center">
            <IoAirplaneSharp className="text-[#FB9AA3] mr-3" />
            <span className="text-white">My Strengths</span>
          </Link>
          <Link href="/my-vision" className="title hover:scale-110 transition-transform flex items-center">
            <IoAirplaneSharp className="text-[#FB9AA3] mr-3" />
            <span className="text-white">My Vision</span>
          </Link>
        </nav>
     </footer>
    </div>
  )}