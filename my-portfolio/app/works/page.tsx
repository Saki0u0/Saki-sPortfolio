"use client"

import Header from "@/components/ui/header";
// import Footer from "@/components/ui/footer";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/works/ModalWorkCard";
import { works } from "../data/worksData";
import type { Work } from "../data/worksData";


export default function Works() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (work:Work) => {
    setSelectedWork(work as Work);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="h-[80vh]  mb-8">
      <Header/>
        <div className="mt-20 w-[80%] mx-auto mb-12">
          <h2 className="title text-5xl mb-10 tracking-widest">Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          
          {works.map((work) => (
            <div key={work.id} className="w-full cursor-pointer hover:scale-110 transition-transform"
            onClick={() => handleClick(work)}
            >
              <Image
                src={work.pcImage}
                alt={work.title}
                width={280}
                height={200}
                className="mx-auto"
              />
              <p className="mt-2 text-center font-semibold text-[#03005D]">{work.title}</p>
            </div>
          ))}
        </div>

          {/* モーダル */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} work={selectedWork} />

          <Pagination className="text-3xl">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      {/* <Footer/> */}
     </div>
    </div>
  );
}