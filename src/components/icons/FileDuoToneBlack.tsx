// src/components/icons/FileDuoToneBlack.tsx
import React from "react";

const FileDuoToneBlack: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Main file body */}
    <path
      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
      fill="#666666"
    />
    {/* Folded-over corner */}
    <path d="M14 2v6h6" fill="#999999" />
  </svg>
);

export default FileDuoToneBlack;
