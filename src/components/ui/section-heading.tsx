"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const isCenter = align === "center";
  const isDark = theme === "dark";

  if (shouldReduceMotion) {
    return (
      <div className={cn("max-w-3xl", isCenter && "mx-auto text-center", className)}>
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-3">
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.2em]",
                isDark ? "text-[#C87535]" : "text-[#00504A]"
              )}
            >
              {eyebrow}
            </span>
            <span
              className={cn(
                "h-px w-6",
                isDark ? "bg-[#C87535]/50" : "bg-[#00504A]/40"
              )}
            />
          </div>
        )}
        <h2
          className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12]",
            isDark ? "text-white" : "text-[#1D2322]"
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 text-base sm:text-lg leading-relaxed font-normal",
              isDark ? "text-white/80" : "text-[#5A6361]",
              isCenter && "max-w-2xl mx-auto"
            )}
          >
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={cn("max-w-3xl", isCenter && "mx-auto text-center", className)}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="inline-flex items-center gap-2 mb-3"
        >
          <span
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.2em]",
              isDark ? "text-[#C87535]" : "text-[#00504A]"
            )}
          >
            {eyebrow}
          </span>
          <span
            className={cn(
              "h-px w-6",
              isDark ? "bg-[#C87535]/50" : "bg-[#00504A]/40"
            )}
          />
        </motion.div>
  )
}
  <motion.h2
        initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
  className={cn(
    "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12]",
    isDark ? "text-white" : "text-[#1D2322]"
  )}
>
  {title}
      </motion.h2 >
  { description && (
      <motion.p
          initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mt-4 text-base sm:text-lg leading-relaxed font-normal",
        isDark ? "text-white/80" : "text-[#5A6361]",
        isCenter && "max-w-2xl mx-auto"
      )}
    >
      {description}
        </motion.p >
      )}
    </motion.div >
  );
}
