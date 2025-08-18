import { useEffect, useRef, useState } from "react";
import { CgBorderStyleSolid } from "react-icons/cg";

export default function AutoDashedLine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const iconWidth = 16; 

      const newCount = Math.floor(containerWidth / iconWidth);
      setCount(newCount);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        flex gap-2 overflow-hidden
        w-full
        sm:max-w-[150px]
        md:max-w-[300px]
        lg:max-w-[500px]
      "
    >
      {Array.from({ length: count }).map((_, i) => (
        <CgBorderStyleSolid
          key={i}
          className="h-4 w-4 shrink-0 m-0 p-0 text-gray-300"
        />
      ))}
    </div>
  );
}
