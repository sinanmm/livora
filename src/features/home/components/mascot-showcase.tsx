"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal, TextReveal } from "@/components/motion/reveal";
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function MascotShowcase() {
  const [activeTab, setActiveTab] = useState<"tile" | "waterproof" | "epoxy" | "stone">("tile");

  const discoveryGuides = {
    tile: {
      title: "Tile & Slab Installation",
      question: "What tile format and substrate are you bonding?",
      recommendation: "Polymer-modified C2/S1 grade adhesive for large porcelain and vitrified formats.",
      factors: [
        "Porcelain, vitrified, or ceramic tile water absorption rate",
        "Substrate condition: screed, concrete, or tile-on-tile",
        "Interior living floor vs high-rise exterior facade wind load",
      ],
      slug: "tile-adhesives",
    },
    waterproof: {
      title: "Moisture Protection",
      question: "Which building zone requires hydrostatic defence?",
      recommendation: "Multi-layer elastomeric barrier with reinforced coved corners.",
      factors: [
        "Positive water pressure in sumps vs negative in basements",
        "UV exposure and thermal movement on rooftop terraces",
        "Continuous immersion vs intermittent splash zones in bathrooms",
      ],
      slug: "waterproofing",
    },
    epoxy: {
      title: "Joint Finishing & Grouting",
      question: "What chemical or hygienic exposure will the joints endure?",
      recommendation: "Impervious 100% solids epoxy grout with zero moisture absorption.",
      factors: [
        "Aggressive acid cleaners, oils, or food-grade standards",
        "Swimming pool immersion and chemical dosing resilience",
        "Stain prevention in designer residential marble/porcelain",
      ],
      slug: "tile-epoxy",
    },
    stone: {
      title: "Natural Stone & Marble",
      question: "Are you installing translucent Italian marble or heavy stone?",
      recommendation: "Non-staining white polymer-modified adhesive & hydrophobic sealer.",
      factors: [
        "Mineral sensitivity and water-shadow prevention in light marble",
        "Fiberglass mesh-backing compatibility on imported slabs",
        "Structural shear load on high vertical cladding walls",
      ],
      slug: "stone-marble",
    },
  };

  const current = discoveryGuides[activeTab];

  return (
      <section className="py-12 sm:py-20 lg:py-24 bg-[#F6F7F4] relative overflow-hidden border-b border-[#DFE3DF]">
        <Container size="wide">
          <div className="bg-white rounded-3xl border border-[#DFE3DF] p-6 sm:p-10 lg:p-14 shadow-xl relative overflow-hidden">

            {/* Subtle background branding */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00504A]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

              {/* Left: Mascot Art Direction with Subtle Floating Movement */}
              <div className="lg:col-span-5 relative flex flex-col items-center">
                <Reveal direction="up" duration={0.8}>
                  <div
                    className="relative w-64 sm:w-80 md:w-96 aspect-1024/682 mx-auto drop-shadow-2xl transition-transform duration-500 hover:scale-103"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src="/images/mascot/mascot-transparent.webp"
                      alt="LIVORA Mascot providing application guidance"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 256px, 384px"
                    />
                  </div>
                </Reveal>

                {/* Speech bubble / Mascot advice banner with entrance */}
                <Reveal delay={0.2}>
                  <div className="mt-4 p-4 rounded-xl bg-[#00504A] text-white text-xs max-w-sm text-center shadow-lg border border-white/20 transition-transform duration-300 hover:-translate-y-1">
                    <span className="font-bold text-[#C87535] uppercase tracking-wider block mb-1">
                      LIVORA On-Site Wisdom
                    </span>
                    <p className="text-white/90">
                      &ldquo;A great tile or stone slab is only as durable as the chemical bond beneath it. Match the formulation to the substrate!&rdquo;
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Right: Interactive Product Discovery Guidance */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <Reveal>
                    <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-widest text-[#00504A]">
                      <HelpCircle className="w-4 h-4 text-[#C87535]" />
                      Product Selection Guidance
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2322] leading-tight">
                      The Right Chemistry for the Right Application.
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-[#5A6361] leading-relaxed">
                      Every building substrate and tile material behaves differently. LIVORA helps architects, engineers, and applicators select appropriate grades based on project parameters rather than generic guesswork.
                    </p>
                  </Reveal>
                </div>

                {/* Selector Tabs */}
                <Reveal delay={0.15}>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {[
                      { key: "tile", label: "Tile Adhesives" },
                      { key: "waterproof", label: "Waterproofing" },
                      { key: "epoxy", label: "Tile Epoxy" },
                      { key: "stone", label: "Stone & Marble" },
                    ].map((tab) => (
                      <button
                        key={tab.key}
                        type="button"
                        onClick={() => setActiveTab(tab.key as any)}
                        className={`px-4 py-2 rounded-xs text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === tab.key
                          ? "bg-[#00504A] text-white shadow-sm scale-102"
                          : "bg-[#F6F7F4] text-[#1D2322] hover:bg-[#EAECE8] border border-[#DFE3DF]"
                          }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </Reveal>

                {/* Dynamic Discovery Box with Animated Transitions */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="p-6 rounded-2xl bg-[#F6F7F4] border border-[#DFE3DF] space-y-4 shadow-sm"
                  >
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#C87535]">
                        {current.title} Consideration
                      </span>
                      <h3 className="text-lg font-bold text-[#1D2322] mt-0.5">
                        {current.question}
                      </h3>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#5A6361]">
                        Key Technical Factors:
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#1D2322]">
                        {current.factors.map((factor) => (
                          <li key={factor} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#00504A] shrink-0 mt-0.5" />
                            <span>{factor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-[#DFE3DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="text-xs text-[#5A6361]">
                        <span className="font-semibold text-[#1D2322]">Technical Approach: </span>
                        {current.recommendation}
                      </div>
                      <Button
                        href={`/products/${current.slug}`}
                        variant="primary"
                        size="sm"
                        className="shrink-0"
                      >
                        <span>Find Your Solution</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>

            </div>

          </div>
        </Container>
      </section>
      );
}
