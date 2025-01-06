import React from "react";

interface RetainingWallIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const RetainingWallIcon: React.FC<RetainingWallIconProps> = ({
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
      {/* Ground level */}
      <line x1="2" y1="22" x2="22" y2="22" />

      {/* Retaining wall blocks */}
      <rect x="4" y="16" width="4" height="6" />
      <rect x="8" y="16" width="4" height="6" />
      <rect x="12" y="16" width="4" height="6" />
      <rect x="16" y="16" width="4" height="6" />

      <rect x="6" y="10" width="4" height="6" />
      <rect x="10" y="10" width="4" height="6" />
      <rect x="14" y="10" width="4" height="6" />

      <rect x="8" y="4" width="4" height="6" />
      <rect x="12" y="4" width="4" height="6" />
    </svg>
  );
};

export default RetainingWallIcon;
