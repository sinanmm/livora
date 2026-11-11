"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { tileAdhesivesProducts, TileAdhesiveProduct } from "../data/products";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/motion/reveal";
import {
  Download,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export function TileAdhesiveProducts() {
  const [activeProductId, setActiveProductId] = useState<string>("livo-fix");
  const [showFullSpecs, setShowFullSpecs] = useState<Record<string, boolean>>({});

  const toggleSpecs = (id: string) => {
    setShowFullSpecs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="commercial-products" className="py-16 sm:py-24 bg-white border-b border-[#DFE3DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#00504A]/10 text-xs font-bold uppercase tracking-wider text-[#00504A] mb-3">
                <FileCheck2 className="w-4 h-4 text-[#C87535]" />
                Official Product Range & TDS
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D2322]">
                Commercial Formulations & Downloads
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#5A6361] max-w-2xl leading-relaxed">
                Explore our certified tile adhesive grades tested to IS 15477:2019 and EN 12004 standards. Download official Technical Data Sheets (TDS) for engineering submittals.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-semibold text-[#5A6361] uppercase tracking-wider">
                Available Formulations:
              </span>
              <span className="px-2.5 py-1 rounded-xs bg-[#00504A] text-white text-xs font-bold">
                3 Products Verified
              </span>
            </div>
          </div>
        </Reveal>

        {/* 3 Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tileAdhesivesProducts.map((product, index) => {
            const isExpanded = !!showFullSpecs[product.id];

            return (
              <Reveal key={product.id} delay={index * 0.1} className="h-full">
                <div className="h-full flex flex-col justify-between rounded-3xl bg-[#F6F7F4] border border-[#DFE3DF] hover:border-[#00504A] transition-all duration-300 shadow-xs hover:shadow-xl overflow-hidden group">

                  {/* Card Header & 3D Packaging Bag Display */}
                  <div className="p-6 sm:p-7 pb-4 bg-linear-to-b from-white to-[#F6F7F4] border-b border-[#DFE3DF] relative">
                    {/* Standard Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-xs bg-[#00504A] text-white text-[11px] font-bold uppercase tracking-wider">
                        {product.gradeBadge}
                      </span>
                      <span className="text-xs font-semibold text-[#5A6361]">
                        {product.packSize}
                      </span>
                    </div>

                    {/* Packaging Visual */}
                      <div
                        className="relative h-64 sm:h-72 w-full max-w-[240px] mx-auto my-3 flex items-center justify-center rounded-2xl overflow-hidden bg-white/70 p-2 shadow-xs border border-[#DFE3DF]/70"
                        style={{ position: "relative" }}
                      >
                        <Image
                          src={product.packagingImage}
                          alt={`${product.name} Packaging Bag`}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 30vw"
                          priority
                          unoptimized
                        />
                      </div>

                      <div className="text-center pt-2">
                        <h3 className="text-2xl font-bold text-[#1D2322] font-heading group-hover:text-[#00504A] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#C87535] uppercase tracking-wider mt-0.5">
                          {product.standardIndian} • {product.standardEuropean}
                        </p>
                      </div>
                    </div>

                    {/* Card Body & Technical Highlights */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                      <div>
                        <p className="text-xs sm:text-sm text-[#5A6361] leading-relaxed">
                          {product.description}
                        </p>

                        {/* Performance Specs Matrix */}
                        <div className="mt-4 p-4 rounded-xl bg-white border border-[#DFE3DF] space-y-2 text-xs">
                          <div className="flex items-center justify-between border-b border-[#EAECE8] pb-1.5">
                            <span className="text-[#5A6361]">Tensile Adhesion (28d):</span>
                            <span className="font-bold text-[#00504A]">{product.tensileAdhesion}</span>
                          </div>
                          <div className="flex items-center justify-between border-b border-[#EAECE8] pb-1.5">
                            <span className="text-[#5A6361]">Open Time:</span>
                            <span className="font-semibold text-[#1D2322]">{product.openTime}</span>
                          </div>
                          {product.deformability && (
                            <div className="flex items-center justify-between border-b border-[#EAECE8] pb-1.5">
                              <span className="text-[#5A6361]">Deformability (S1):</span>
                              <span className="font-bold text-[#C87535]">{product.deformability}</span>
                            </div>
                          )}
                          <div className="flex items-center justify-between border-b border-[#EAECE8] pb-1.5">
                            <span className="text-[#5A6361]">Max Tile Size:</span>
                            <span className="font-semibold text-[#1D2322] text-right truncate max-w-[170px]">{product.maxTileSize}</span>
                          </div>
                          <div className="flex items-center justify-between pt-0.5">
                            <span className="text-[#5A6361]">Coverage:</span>
                            <span className="font-semibold text-[#1D2322]">{product.coverage}</span>
                          </div>
                        </div>

                        {/* Key Features List */}
                        <div className="mt-4 space-y-1.5">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#1D2322]">
                            Key Formulation Strengths:
                          </div>
                          <ul className="space-y-1 text-xs text-[#5A6361]">
                            {product.keyFeatures.map((feat) => (
                              <li key={feat} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#00504A] shrink-0 mt-0.5" />
                                <span className="line-clamp-2">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Expandable Full Test Property Table */}
                        {product.technicalSpecifications && (
                          <div className="mt-4 pt-2">
                            <button
                              type="button"
                              onClick={() => toggleSpecs(product.id)}
                              className="w-full flex items-center justify-between text-xs font-semibold text-[#00504A] hover:underline cursor-pointer py-1"
                            >
                              <span>{isExpanded ? "Hide Test Results" : "View Full Test Properties"}</span>
                              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            </button>

                            {isExpanded && (
                              <div className="mt-2 p-3 rounded-lg bg-white border border-[#DFE3DF] text-[11px] space-y-1.5 max-h-60 overflow-y-auto">
                                {product.technicalSpecifications.map((spec) => (
                                  <div key={spec.property} className="flex items-center justify-between py-0.5 border-b border-[#EAECE8] last:border-b-0">
                                    <span className="text-[#5A6361]">{spec.property}</span>
                                    <span className="font-semibold text-[#1D2322] text-right ml-2">{spec.value}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Action Buttons: DOWNLOAD TDS & ENQUIRE */}
                      <div className="pt-4 border-t border-[#DFE3DF] space-y-2.5">
                        <a
                          href={product.tdsDownloadUrl}
                          download={`${product.name}-Technical-Data-Sheet.pdf`}
                          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-[#00504A] text-white hover:bg-[#003C3A] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm hover:shadow-md group"
                        >
                          <Download className="w-4 h-4 text-[#C87535] group-hover:scale-110 transition-transform" />
                          <span>Download Technical Data Sheet (PDF)</span>
                        </a>

                        <Button
                          href={`/contact?category=tile-adhesives&type=Product+Information&product=${product.name}`}
                          variant="outline"
                          size="sm"
                          className="w-full justify-center text-xs"
                        >
                          <span>Enquire for {product.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Button>
                      </div>

                    </div>

                  </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

