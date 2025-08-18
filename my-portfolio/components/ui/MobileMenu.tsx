'use client';

import Link from 'next/link';

type MobileMenuProps = {
  language: 'eng' | 'jpn';
  setLanguage: (lang: 'eng' | 'jpn') => void;
  onClose: () => void;
};

export default function MobileMenu({
  language,
  setLanguage,
  onClose,
}: MobileMenuProps) {
  return (
    <div className="fixed inset-0 bg-[#03005D] flex flex-col items-center justify-center gap-8 z-50">
      <button
        className="absolute top-4 right-4 text-4xl text-white"
        onClick={onClose}
      >
        ×
      </button>

      <nav>
        <ul className="flex flex-col items-center gap-8 text-2xl text-white">
          <li>
            <Link href="/about" onClick={onClose} className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/works" onClick={onClose} className="hover:underline">
              Works
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={onClose} className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-4 text-white">
        <button
          className={`${language === 'eng' ? 'underline' : ''}`}
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
      </div>
    </div>
  );
}
