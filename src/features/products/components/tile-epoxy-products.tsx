"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Droplets,
  Layers,
  ArrowRight,
  Palette,
  FlaskConical,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { tileEpoxyProducts } from "../data/products";

const SHADE_PALETTE = [
  { name: "Pure White", hex: "#F8F9FA", border: "border-gray-300" },
  { name: "Classic Ivory", hex: "#F1ECE1", border: "border-amber-200" },
  { name: "Titanium Grey", hex: "#9E9E9E", border: "border-gray-400" },
  { name: "Anthracite", hex: "#424242", border: "border-gray-600" },
  { name: "Jet Black", hex: "#1A1A1A", border: "border-black" },
  { name: "Desert Beige", hex: "#D7C4A5", border: "border-amber-300" },
  { name: "Mocha Brown", hex: "#6D4C41", border: "border-stone-500" },
  { name: "LIVORA Teal", hex: "#00504A", border: "border-[#003C3A]" },
];

export function TileEpoxyProducts() {
  const [showFullSpecs, setShowFullSpecs] = useState(false);
  const [activeShade, setActiveShade] = useState(SHADE_PALETTE[0].name);

  const product = tileEpoxyProducts[0];

  return (
    <section id="commercial-epoxy-products" className="py-16 sm:py-24 bg-white border-b border-[#DFE3DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#00504A]/10 text-xs font-bold uppercase tracking-wider text-[#00504A] mb-3">
                <FlaskConical className="w-4 h-4 text-[#C87535]" />
                Official Commercial Formulation
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D2322]">
                Tile Epoxy Solutions & Grout Systems
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#5A6361] max-w-2xl leading-relaxed">
                High-performance two-component reaction resin epoxy grouts formulated for impervious, stain-proof, and chemical-resistant joint finishing in luxury and hygiene-critical environments.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-semibold text-[#5A6361] uppercase tracking-wider">
                Classification:
              </span>
              <span className="px-2.5 py-1 rounded-xs bg-[#00504A] text-white text-xs font-bold">
                EN 13888 Class RG
              </span>
            </div>
          </div>
        </Reveal>

        {/* Feature Showcase Card */}
        <Reveal>
          <div className="rounded-3xl bg-[#F6F7F4] border border-[#DFE3DF] shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
              
              {/* Product Packaging Display (5 cols) */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="w-full max-w-[340px] bg-linear-to-b from-white via-white to-[#EAECE8] rounded-2xl p-6 sm:p-8 border border-[#DFE3DF] shadow-sm relative group">
                  
                  {/* Badges */}
                  <div className="flex items-center justify-between mb-4 w-full">
                    <span className="px-2.5 py-1 rounded-xs bg-[#00504A] text-white text-[11px] font-bold uppercase tracking-wider">
                      {product.gradeBadge}
                    </span>
                    <span className="text-xs font-bold text-[#C87535] bg-[#C87535]/10 px-2.5 py-1 rounded-xs">
                      {product.packSize}
                    </span>
                  </div>

                  {/* 3D Bucket Image */}
                  <div
                    className="relative h-64 sm:h-72 w-full mx-auto my-2 flex items-center justify-center"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={product.packagingImage}
                      alt={`${product.name} Packaging Bucket`}
                      fill
                      className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 35vw"
                      priority
                      unoptimized
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1D2322] font-heading mt-3">
                    {product.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#00504A] uppercase tracking-wider mt-0.5">
                    Two-Component (2K) Reaction Resin Grout
                  </p>
                  <p className="text-[11px] text-[#5A6361] mt-2">
                    Standard Compliance: {product.standardCompliance}
                  </p>
                </div>

                {/* Shade Selector Strip */}
                <div className="mt-5 w-full max-w-[340px] bg-white p-4 rounded-xl border border-[#DFE3DF]">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1D2322] mb-2">
                    <span className="flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-[#C87535]" />
                      Selected Shade:
                    </span>
                    <span className="text-[#00504A]">{activeShade}</span>
                  </div>
                  <div className="flex items-center justify-between gap-1.5">
                    {SHADE_PALETTE.map((shade) => (
                      <button
                        key={shade.name}
                        type="button"
                        onClick={() => setActiveShade(shade.name)}
                        title={shade.name}
                        className={`w-6 h-6 rounded-full transition-all border ${shade.border} ${
                          activeShade === shade.name
                            ? "ring-2 ring-[#00504A] ring-offset-2 scale-110"
                            : "hover:scale-105 opacity-85 hover:opacity-100"
                        }`}
                        style={{ backgroundColor: shade.hex }}
                      />
                    ))}
                  </div>
                  <div className="text-[10px] text-[#5A6361] text-center mt-2">
                    Available in 20+ architectural colors • Non-yellowing UV stable
                  </div>
                </div>
              </div>

              {/* Product Specifications & Details (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C87535] uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4" />
                    Specialised Joint Chemistry
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1D2322] font-heading">
                    Engineered for Impervious, Zero-Maintenance Joints
                  </h3>
                  <p className="text-sm sm:text-base text-[#5A6361] mt-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Key Pillars Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                  <div className="p-3.5 rounded-xl bg-white border border-[#DFE3DF]">
                    <div className="flex items-center gap-1 text-[#00504A] text-xs font-bold mb-1">
                      <ShieldCheck className="w-4 h-4 text-[#C87535]" />
                      Stain Proof
                    </div>
                    <div className="text-xs text-[#5A6361]">100% non-absorbent to oils, tea, wine & chemicals</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#DFE3DF]">
                    <div className="flex items-center gap-1 text-[#00504A] text-xs font-bold mb-1">
                      <Droplets className="w-4 h-4 text-[#C87535]" />
                      Zero Seepage
                    </div>
                    <div className="text-xs text-[#5A6361]">Nil water absorption for wet areas & pools</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#DFE3DF]">
                    <div className="flex items-center gap-1 text-[#00504A] text-xs font-bold mb-1">
                      <Layers className="w-4 h-4 text-[#C87535]" />
                      High Strength
                    </div>
                    <div className="text-xs text-[#5A6361]">Compressive strength ≥ 45 N/mm² at 28d</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#DFE3DF]">
                    <div className="flex items-center gap-1 text-[#00504A] text-xs font-bold mb-1">
                      <Sparkles className="w-4 h-4 text-[#C87535]" />
                      Anti-Fungal
                    </div>
                    <div className="text-xs text-[#5A6361]">Zero mold or black bacteria proliferation</div>
                  </div>
                </div>

                {/* Scope & Application List */}
                <div className="p-4 rounded-xl bg-white border border-[#DFE3DF]">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1D2322] mb-2.5">
                    Recommended Architectural Scope:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5A6361]">
                    {product.applications.map((app) => (
                      <div key={app} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00504A] shrink-0 mt-0.5" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href={`/contact?subject=LIVORA+Epo+Color%2B+Enquiry&product=Epo+Color+Plus&shade=${encodeURIComponent(activeShade)}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00504A] text-white font-bold text-sm hover:bg-[#003C3A] transition-all shadow-md group"
                  >
                    <span>Request Shade Card & Sample Kit</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setShowFullSpecs(!showFullSpecs)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white text-[#1D2322] font-semibold text-xs border border-[#DFE3DF] hover:border-[#00504A] transition-colors"
                  >
                    <span>{showFullSpecs ? "Hide Technical Data" : "View Laboratory Test Data"}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-[#C87535] transition-transform ${showFullSpecs ? "rotate-180" : ""}`} />
                  </button>
                </div>

              </div>

            </div>

            {/* Expandable Technical Properties */}
            {showFullSpecs && (
              <div className="px-6 sm:px-10 pb-8 pt-4 border-t border-[#DFE3DF] bg-white">
                <div className="text-xs font-bold uppercase tracking-wider text-[#00504A] mb-3">
                  Laboratory Test Specifications (EN 13888 Class RG / IS 15477)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {product.technicalSpecifications?.map((spec) => (
                    <div key={spec.property} className="p-3 rounded-lg bg-[#F6F7F4] border border-[#DFE3DF] text-xs">
                      <div className="text-[#5A6361] text-[11px] font-medium">{spec.property}</div>
                      <div className="font-bold text-[#1D2322] mt-0.5">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </Reveal>

      </div>
    </section>
  );
}

