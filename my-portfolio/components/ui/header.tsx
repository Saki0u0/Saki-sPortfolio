// components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [language, setLanguage] = useState<'eng' | 'jpn'>('eng');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[rgb(3,0,93)] text-white z-60 header tracking-widest">
      <div className="container mx-auto flex items-center px-2 py-2">
        <Link href="/" className="text-2xl font-bold">
          SAKI EBINA
        </Link>

        <button
          className="md:hidden flex ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <IoMenu size={32} className="text-white"/>
        </button>

        {/* PC Menu */}
        <div className='hidden md:flex ml-auto text-xl'>
        <nav>
          <ul className="container flex gap-6 py-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/works" className="hover:underline">
                Works
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
         </nav>

          {/* <div className="flex ml-10">
            <button
              className={`${language === 'eng' ? 'underline' : ''} mr-3`}
              onClick={() => setLanguage('eng')}
            >
              ENG
            </button>
            <button
              className={`${language === 'jpn' ? 'underline' : ''}`}
              onClick={() => setLanguage('jpn')}
            >
              JPN
            </button>
          </div> */}
        </div>

        {menuOpen && (
        <MobileMenu
          language={language}
          setLanguage={setLanguage}
          onClose={() => setMenuOpen(false)}
        />
        )}
      </div>
    </header>
  );
}
