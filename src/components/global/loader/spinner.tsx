import React from "react";

type SpinnerProps = {
  color?: string;
};

const Spinner = ({ color }: { color: string }) => {
  return (
    <svg
      className={`animate-spin h-8 w-8 `}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke={color || "#000"}
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill={color || "#000"}
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  );
};

export default Spinner;
