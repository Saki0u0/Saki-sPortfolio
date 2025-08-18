"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoAirplaneSharp } from "react-icons/io5";

const items = [
  { href: "/about", label: "Profile" },
  { href: "/background", label: "Background" },
  { href: "/skills", label: "Skills" },
  { href: "/my-strengths", label: "My Strengths" },
  { href: "/my-vision", label: "My Vision" },
];

export default function AboutSubnavResponsive() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav className="hidden lg:flex lg:items-center lg:justify-between lg:gap-4 lg:mx-auto lg:max-w-6xl lg:px-4 lg:w-[70%] lg:mb-10 lg:mt-10">
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="flex items-center gap-2 text-2xl lg:text-3xl leading-none hover:scale-105 transition">
            <IoAirplaneSharp size={20} className="text-[#FB9AA3] shrink-0" />
            <span className="text-[#03005D] whitespace-nowrap">{it.label}</span>
          </Link>
        ))}
      </nav>

      <button
        type="button"
        aria-expanded={open}
        aria-controls="about-mobile-sheet"
        onClick={() => setOpen(true)}
        className="lg:hidden fixed bottom-4 inset-x-0 mx-auto w-[88%] max-w-sm 
                   rounded-full bg-[#03005D] text-white shadow-lg
                   py-3 text-base font-semibold
                   pb-[calc(12px+env(safe-area-inset-bottom))]"
      >
        私について
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-[1px] z-50"
        />
      )}

      <div
        id="about-mobile-sheet"
        role="dialog"
        aria-modal="true"
        className={`lg:hidden fixed inset-x-0 bottom-0 z-50
                    rounded-t-2xl bg-white shadow-2xl
                    pb-[env(safe-area-inset-bottom)]
                    transition-transform duration-200
                    ${open ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="mx-auto max-w-sm px-5 pt-4 pb-3">
          <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-black/15" />
          <ul className="grid grid-cols-1 gap-3">
            {items.map((it) => (
              <li key={it.href}>
                <Link
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl border border-black/10
                             px-4 py-3 hover:bg-[#FB9AA3]/10 active:scale-[0.99] transition"
                >
                  <IoAirplaneSharp size={20} className="text-[#FB9AA3] shrink-0" />
                  <span className="text-[#03005D] text-lg">{it.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setOpen(false)}
            className="mt-4 w-full rounded-xl border border-black/10 px-4 py-2 text-sm text-[#03005D]/70"
          >
            閉じる
          </button>
        </div>
      </div>
    </>
  );
}
