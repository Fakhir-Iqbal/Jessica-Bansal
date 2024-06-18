"use client";
import React from "react";

const Button = ({ children, className, onClick, type, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      // className={`focus:ring-green   transition-all   hover:text-gray-300  py-2 px-6  text-white bg-green   ${className}`}
      // className={`focus:ring-green transition-all hover:text-gray-300 hover:transition-colors duration-1000 py-2 px-6 text-white bg-green ${className}`}
      className={`transition-colors duration-500 uppercase text-sm tracking-widest  hover:text-gray-300 py-2 px-6 text-white bg-green ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
