import * as React from "react";

const FolderDuotone: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Folder base (light tone) */}
    <path
      d="M3 6a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z"
      fill="#E5E7EB"
    />
    {/* Folder outline (dark tone) */}
    <path
      d="M3 6a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z"
      stroke="#4B5563"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export default FolderDuotone;
