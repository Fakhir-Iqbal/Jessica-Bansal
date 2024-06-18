"use client";
import React from "react";

const AnimatedButton = ({
  children,
  className,
  onClick,
  type,
  disabled,
  hoverType,
}) => {
  return (
    // <button
    //   disabled={disabled}
    //   onClick={onClick}
    //   type={type}
    //   className={`focus:ring-green hover:scale-110 transition-all button duration-300
    //    text-black font-inter py-3 px-10
    //    bg-green  w-[fit-content] rounded-full ${className}`}
    // >
    //   {children}
    // </button>
    <button
      className={`relative inline-flex items-center bg-green  border-green  w-[fit-content] justify-center px-4 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white   group ${className}`}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
