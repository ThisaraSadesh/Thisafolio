'use client'

import React from "react";

interface MagicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  type?: "button" | "submit" | "reset";
  icon: React.ReactNode;
  position: "left" | "right"; // restrict to left/right for clarity
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton = React.forwardRef<HTMLButtonElement, MagicButtonProps>(
  (
    {
      type = "button",
      title,
      icon,
      position,
      handleClick,
      otherClasses = "",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        onClick={handleClick}
        {...props} // important for Radix UI accessibility & event handling
        className={`w-full relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 ${props.className || ""}`}
      >
        {/* Gradient border animation */}
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        
        {/* Inner button content */}
        <span
          className={`inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </button>
    );
  }
);

MagicButton.displayName = "MagicButton";

export default MagicButton;
