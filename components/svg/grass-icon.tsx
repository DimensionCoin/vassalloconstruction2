import React from "react";

const GrassIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3v18" />
    <path d="M7 6v15" />
    <path d="M17 6v15" />
    <path d="M3 12c4-3 6-3 9-1" />
    <path d="M21 12c-4-3-6-3-9-1" />
  </svg>
);

export default GrassIcon;
