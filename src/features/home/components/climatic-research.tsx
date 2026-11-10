"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { climaticRegions } from "@/features/company/data/company";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Compass, Thermometer, CloudRain, Sun, Wind } from "lucide-react";

export function ClimaticResearch() {
  const [selectedRegionId, setSelectedRegionId] = useState<string>("north");
  const currentRegion = climaticRegions.find((r) => r.id === selectedRegionId) || climaticRegions[0];

  const regionIcons: Record<string, any> = {
    north: Thermometer,
    south: CloudRain,
    east: CloudRain,
    west: Sun,
    central: Wind,
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F6F7F4] border-b border-[#DFE3DF]">
      <Container size="wide">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
            <SectionHeading
              eyebrow="Geographic Formulation Insights"
              title="Built on Research. Informed by Every Climate."
              description="India's geographic diversity demands construction chemicals tuned to distinct regional stresses—from Himalayan sub-zero cold to coastal monsoons and desert heat."
            />
            <Button href="/research-development" variant="outline" size="md" className="shrink-0">
              <span>Explore R&D Framework</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </Reveal>

        {/* Interactive Regional Editorial Visualizer */}
        <div className="bg-white rounded-3xl border border-[#DFE3DF] overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Region Selector Column (5 Regions) */}
            <div className="lg:col-span-4 p-6 sm:p-8 bg-[#F6F7F4]/80 border-b lg:border-b-0 lg:border-r border-[#DFE3DF] space-y-2">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#5A6361] pb-2 border-b border-[#DFE3DF] flex items-center justify-between">
                <span>Select Geographic Zone</span>
                <Compass className="w-4 h-4 text-[#00504A]" />
              </div>

              {climaticRegions.map((region) => {
                const Icon = regionIcons[region.id] || MapPin;
                const isSelected = region.id === selectedRegionId;
                return (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => setSelectedRegionId(region.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-[#00504A] text-white shadow-md"
                        : "bg-white hover:bg-[#EAECE8] text-[#1D2322] border border-[#DFE3DF]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? "bg-white/20 text-white" : "bg-[#00504A]/10 text-[#00504A]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-sm">{region.name}</div>
                        <div
                          className={`text-xs truncate max-w-[170px] sm:max-w-xs ${
                            isSelected ? "text-white/80" : "text-[#5A6361]"
                          }`}
                        >
                          {region.states}
                        </div>
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? "translate-x-1 text-[#C87535]" : "opacity-40"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Region Details Display Panel */}
            <div className="lg:col-span-8 p-6 sm:p-10 lg:p-12 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EAECE8]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C87535] block">
                      Region Study • India
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1D2322] mt-0.5">
                      {currentRegion.name}
                    </h3>
                  </div>
                  <span className="px-3 py-1.5 rounded-xs bg-[#00504A]/10 text-[#00504A] text-xs font-semibold">
                    States: {currentRegion.states}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#5A6361] mb-2">
                    Climatic & Environmental Profile
                  </h4>
                  <p className="text-base text-[#1D2322] leading-relaxed">
                    {currentRegion.climateProfile}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#5A6361]">
                    Key Field Challenges Observed:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentRegion.challenges.map((challenge, i) => (
                      <div
                        key={challenge}
                        className="p-3.5 rounded-xl bg-[#F6F7F4] border border-[#DFE3DF] text-xs text-[#1D2322] leading-relaxed flex items-start gap-2"
                      >
                        <span className="font-bold text-[#00504A]">0{i + 1}.</span>
                        <span>{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#00504A]/5 border border-[#00504A]/20">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00504A] block mb-1">
                    LIVORA Formulation Approach:
                  </span>
                  <p className="text-sm font-medium text-[#1D2322] leading-relaxed">
                    {currentRegion.formulationFocus}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAECE8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#5A6361]">
                <p>
                  *Understanding regional environmental diversity supports application-oriented formulation development and on-site decision making.
                </p>
                <Link
                  href="/research-development"
                  className="font-bold text-[#00504A] hover:underline uppercase tracking-wider shrink-0"
                >
                  Read Full R&D Methodology &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}

