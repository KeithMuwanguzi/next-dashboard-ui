import React from "react";

interface BadgeProps {
  variant: "success" | "destructive" | "secondary";
  children: React.ReactNode;
}

const badgeStyles = {
  success: "bg-green-100 text-green-800",
  destructive: "bg-red-100 text-red-800",
  secondary: "bg-blue-100 text-blue-800",
};

export const Badge: React.FC<BadgeProps> = ({ variant, children }) => {
  return (
    <span
      className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${badgeStyles[variant]}`}
    >
      {children}
    </span>
  );
};
