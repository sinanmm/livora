"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28 bg-[#F6F7F4]">
      {/* Background Architectural Geometry & Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#00504A]/5 to-transparent pointer-events-none" />
      <div className="absolute -top-32 right-12 w-96 h-96 rounded-full bg-[#C87535]/5 blur-3xl pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Statement & Action */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 max-w-2xl">
            {/* Category Eyebrow */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs bg-[#00504A]/10 border border-[#00504A]/20"
            >
              <span className="w-2 h-2 rounded-full bg-[#00504A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#00504A]">
                Advanced Construction Chemical Solutions
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#1D2322] leading-[1.08]">
                Smart Solutions.{" "}
                <span className="text-[#00504A] block sm:inline">Stronger Structures.</span>
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#5A6361] leading-relaxed font-normal"
            >
              Performance-driven construction chemical solutions, backed by decades of chemical engineering expertise and research-led product development.
            </motion.p>

            {/* Credibility Statement */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-3 py-1 text-sm font-semibold text-[#00504A]"
            >
              <ShieldCheck className="w-5 h-5 text-[#C87535] shrink-0" />
              <span>Engineered with expertise. Focused on performance.</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button href="/products" variant="primary" size="lg" className="group">
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Talk to Our Team
              </Button>
            </motion.div>

            {/* Key Division Quick Anchors */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6 border-t border-[#DFE3DF] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs"
            >
              {[
                { title: "Tile Adhesives", href: "/products/tile-adhesives" },
                { title: "Waterproofing", href: "/products/waterproofing" },
                { title: "Tile Epoxy", href: "/products/tile-epoxy" },
                { title: "Stone & Marble", href: "/products/stone-marble" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-1.5 text-[#5A6361] hover:text-[#00504A] transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00504A] shrink-0" />
                  <span className="font-medium truncate">{item.title}</span>
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Art-Directed Campaign Mascot & Architectural Material Staging */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Architectural Backdrop Frame */}
              <div className="relative aspect-4/3 sm:aspect-1/1 w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-[#EAECE8]">
                <Image
                  src="/images/architecture/hero-bg.jpg"
                  alt="LIVORA Architectural Material Pavilion"
                  fill
                  priority
                  className="object-cover object-center filter brightness-[0.98] contrast-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                
                {/* Architectural gradient overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-[#003C3A]/60 via-transparent to-transparent" />
                
                {/* Floating Technical Plaque in Hero Visual */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[#00504A] text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-[#C87535]" />
                      Specialised Chemistry
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#1D2322] mt-0.5">
                      Substrate • Hydration • Bond Strength
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-xs bg-[#00504A] text-white text-[11px] font-bold">
                      Grade S1 / C2
                    </span>
                  </div>
                </div>
              </div>

              {/* The Isolated LIVORA Bull Mascot Layer */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 w-64 sm:w-80 md:w-96 z-20 pointer-events-none drop-shadow-2xl"
              >
                <div className="relative aspect-1024/682 w-full">
                  <Image
                    src="/images/mascot/mascot-transparent.webp"
                    alt="LIVORA Chemicals Bull Mascot"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  />
                </div>
              </motion.div>

              {/* Floating Engineering Badge on Top Right */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-4 -right-2 sm:-right-4 px-3.5 py-2 rounded-lg bg-[#003C3A] text-white shadow-xl border border-white/20 z-30"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C87535] animate-pulse" />
                  <span className="text-xs font-semibold tracking-wide">
                    Research-Backed Formulations
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}

