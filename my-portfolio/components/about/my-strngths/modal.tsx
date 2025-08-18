"use client";
import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";

export default function ModalCard({
  open,
  onClose,
  icon,
  title,
  subtitle,
  summary,
  children,
}: {
  open: boolean;
  onClose: () => void;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  summary:string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
  {/* overlay */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" onClick={onClose} />

  {/* dialog */}
  <div
    role="dialog"
    aria-modal="true"
    className="relative w-[min(92vw,42rem)]
               max-h-[85vh] rounded-2xl bg-white shadow-lg
               md:p-16 p-8 overflow-y-auto"
  >
    <button
      aria-label="閉じる"
      onClick={onClose}
      className="absolute top-3 right-3 text-gray-600 hover:text-black cursor-pointer"
    >
      <IoIosClose size={32} />
    </button>

    {/* ヘッダー：中央寄せ */}
    <div className="flex flex-col items-center justify-center gap-3 md:gap-4">
      <div className="grid place-items-center w-[90px] h-[90px]">
        {icon}
      </div>
      <div className="mx-auto text-center">
        <h3 className="text-3xl font-bold text-[#03005D]">{title}</h3>
        {subtitle && <p className="text-base text-black/60 mt-1">{subtitle}</p>}
        {summary && <p className="text-xl mt-4 leading-loose">{summary}</p>}
      </div>
    </div>

    {/* 本文：ここだけスクロール */}
    <div className="mt-5 max-h-[60vh] overflow-y-auto">
      <div className="prose max-w-none prose-p:leading-7 prose-ul:my-3">
        {children}
      </div>
    </div>
  </div>
</div>
  );
}

