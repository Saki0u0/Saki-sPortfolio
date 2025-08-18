import React from "react";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";
import type { Work } from "@/app/data/worksData";


type Props = {
  isOpen: boolean;
  onClose: () => void;
  work: Work | null;
};

const Modal: React.FC<Props> = ({ isOpen, onClose, work  }) => {
  if (!isOpen || !work) return null;

  return (
    <div className="fixed inset-0 bg-black/40 bg-opacity-30 flex items-center justify-center z-50 p-4">

      <div className="bg-white py-6 px-12 rounded-lg w-full lg:max-w-xl md:w-[80%] max-w-[90%] shadow-lg relative overflow-y-scroll lg:h-[75%] h-[80%] items-center">

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black
          cursor-pointer"
          onClick={onClose}
        >
          <IoIosClose size={32}/>
        </button>

        {/* Modal Content */}
        <div className="my-3 items-center justify-center">
          <div className="md:flex-row flex flex-col">
            <Image 
              src={work.image}
              width={320}
              height={200}
              alt={work.title}
              className="mb-4 rounded lg:w-[420x] mx-auto border border-gray-200" />
              
            {work.modalImage && (
            <Image 
            src={work.modalImage}
            width={180}
            height={200}
            alt={work.title}
            className="mb-4 rounded mx-auto lg:w-[180x]" />
            )}
          </div>
        
          <h2 className="text-2xl font-semibold mb-2 font-sans">{work.title}</h2>
          <p className="mb-4 text-sm font-sans">{work.category}</p>
          <p className="text-sm text-gray-700 mb-4 font-sans">
           {work.description}
          </p>
          {work.url ? (
            <Link href={work.url} target="_blank" rel="noopener noreferrer" className="font-sans">
              {work.url}
            </Link>
          ) : (
            <p className="text-sm text-gray-500 italic">より良い形で公開するため、現在調整中です。</p>
          )}
          <a
            href={`/works/${work.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#03005D] text-xl font-semibold flex float-right mt-8" 
          >
            More Detail
            <FaRegArrowAltCircleRight  size={32} color="#03005D" className="ml-3 mb-8"/>
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Modal;

