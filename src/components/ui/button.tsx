import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "secondary" | "outline" | "outline-white" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      external = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none rounded-sm select-none cursor-pointer";

    const variants = {
      primary:
        "bg-[#00504A] text-white hover:bg-[#003C3A] shadow-sm hover:shadow-md focus-visible:ring-[#00504A]",
      accent:
        "bg-[#C87535] text-white hover:bg-[#B46429] shadow-sm hover:shadow-md focus-visible:ring-[#C87535]",
      secondary:
        "bg-[#003C3A] text-white hover:bg-[#002826] shadow-sm focus-visible:ring-[#003C3A]",
      outline:
        "border border-[#00504A] text-[#00504A] bg-transparent hover:bg-[#00504A] hover:text-white focus-visible:ring-[#00504A]",
      "outline-white":
        "border border-white/40 text-white bg-transparent hover:bg-white hover:text-[#003C3A] focus-visible:ring-white",
      ghost:
        "text-[#1D2322] hover:text-[#00504A] hover:bg-black/5 focus-visible:ring-[#00504A]",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5 uppercase tracking-wider font-semibold",
      md: "text-sm px-5 py-2.5 gap-2 font-medium",
      lg: "text-base px-6 py-3.5 gap-2.5 font-medium",
    };

    const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} disabled={disabled} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

