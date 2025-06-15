import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && dotRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
        dotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border border-gray-500 rounded-full pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      ></div>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-4 h-4 bg-blue-600 rounded-full pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      ></div>
    </>
  );
};

export default CustomCursor;
