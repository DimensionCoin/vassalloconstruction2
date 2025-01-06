import React from "react";

const ConcreteMixerIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Mixer drum */}
      <path d="M8 8 A 8 8 0 0 1 16 8" />
      <path d="M5 16 L19 16" />

      {/* Drum supports */}
      <line x1="8" y1="8" x2="5" y2="16" />
      <line x1="16" y1="8" x2="19" y2="16" />

      {/* Wheels */}
      <circle cx="7" cy="21" r="2" />
      <circle cx="17" cy="21" r="2" />

      {/* Axle */}
      <line x1="7" y1="21" x2="17" y2="21" />

      {/* Mixer stand */}
      <line x1="12" y1="16" x2="12" y2="21" />

      {/* Drum opening */}
      <path d="M10 8 L14 8" />
    </svg>
  );
};

export default ConcreteMixerIcon;
