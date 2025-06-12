import React from "react";

export const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`border border-gray-300 rounded px-3 py-2 w-full focus:outline-pink-400 ${className}`}
      {...props}
    />
  );
};
