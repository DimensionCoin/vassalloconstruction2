import React from "react";

interface BollardIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const BollardIcon: React.FC<BollardIconProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Bollard body */}
      <path d="M12 3v18" />
      <path d="M12 5c1.5 0 2.5 1 2.5 3v8c0 2-1 3-2.5 3s-2.5-1-2.5-3v-8c0-2 1-3 2.5-3z" />

      {/* Reflective strips */}
      <path d="M10 8h4" />
      <path d="M10 12h4" />
      <path d="M10 16h4" />

      {/* Base */}
      <path d="M7 21h10" />
    </svg>
  );
};

export default BollardIcon;
