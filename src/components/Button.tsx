"use client";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 cursor-pointer px-4 py-2 rounded-full text-white max-w-fit flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors duration-300 ${className}`}
    >
      {children}
      {icon && <span className="inline-block">{icon}</span>}
    </button>
  );
};

export default Button;
