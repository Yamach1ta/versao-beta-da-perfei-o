import React from "react";

export const Textarea = ({ className = "", ...props }) => {
  return (
    <textarea
      className={`border border-gray-300 rounded px-3 py-2 w-full resize-none focus:outline-pink-400 ${className}`}
      {...props}
    />
  );
};
