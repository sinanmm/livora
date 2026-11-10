"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Calculator, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

interface TilePreset {
  name: string;
  length: number; // mm
  width: number; // mm
  recommendedGrade: string;
}

const TILE_PRESETS: TilePreset[] = [
  { name: "Standard Ceramic (300 × 300 mm)", length: 300, width: 300, recommendedGrade: "LIVO-SET (Type 2T)" },
  { name: "Vitrified Interior (600 × 600 mm)", length: 600, width: 600, recommendedGrade: "LIVO-SET / LIVO-FIX" },
  { name: "Large Vitrified (1200 × 600 mm)", length: 1200, width: 600, recommendedGrade: "LIVO-FIX (Type 2T C2TE)" },
  { name: "Large Floor Format (800 × 800 mm)", length: 800, width: 800, recommendedGrade: "LIVO-FIX (Type 2T C2TE)" },
  { name: "Mega Porcelain Slab (1200 × 1800 mm)", length: 1200, width: 1800, recommendedGrade: "LIVO-FLEX (Type 3T S1)" },
  { name: "Ultra-Format Facade (1200 × 2400 mm)", length: 1200, width: 2400, recommendedGrade: "LIVO-FLEX (Type 3T S1)" },
];

export function AdhesiveCalculator() {
  const [unit, setUnit] = useState<"sqm" | "sqft">("sqm");
  const [area, setArea] = useState<number>(50); // 50 sqm
  const [selectedPresetIndex, setSelectedPresetIndex] = useState<number>(2); // 1200x600 mm
  const [bedThickness, setBedThickness] = useState<number>(3); // 3 mm standard
  const [wastagePercent, setWastagePercent] = useState<number>(8); // 8% default
  const [productType, setProductType] = useState<"livo-fix" | "livo-set" | "livo-flex">("livo-fix");

  // Calculations
  const areaInSqm = unit === "sqm" ? area : area * 0.092903;
  
  const calculation = useMemo(() => {
    // 1.3 kg/m2 per mm bed thickness
    const consumptionPerSqmPerMm = 1.3;
    const baseKgPerSqm = bedThickness * consumptionPerSqmPerMm;
    const totalKgWithoutWastage = areaInSqm * baseKgPerSqm;
    const totalKgWithWastage = totalKgWithoutWastage * (1 + wastagePercent / 100);
    const bagsCount = Math.ceil(totalKgWithWastage / 20);
    const coveragePerBag = (20 / (baseKgPerSqm * (1 + wastagePercent / 100))).toFixed(1);

    const preset = TILE_PRESETS[selectedPresetIndex];
    let recommendedProduct = "LIVO-FIX";
    if (preset.length * preset.width > 1200 * 600 || bedThickness > 6) {
      recommendedProduct = "LIVO-FLEX";
    } else if (preset.length * preset.width <= 600 * 600 && bedThickness <= 3) {
      recommendedProduct = "LIVO-SET";
    }

    return {
      totalKg: Math.round(totalKgWithWastage),
      bagsCount,
      coveragePerBag,
      recommendedProduct,
      presetName: preset.name,
    };
  }, [areaInSqm, bedThickness, wastagePercent, selectedPresetIndex]);

  return (
    <section id="consumption-calculator" className="py-16 sm:py-24 bg-[#F6F7F4] border-b border-[#DFE3DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#00504A]/10 text-xs font-bold uppercase tracking-wider text-[#00504A] mb-3">
              <Calculator className="w-4 h-4 text-[#C87535]" />
              Engineering Quantity Estimator
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D2322]">
              Tile Adhesive Consumption Calculator
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#5A6361] leading-relaxed">
              Calculate exact 20 kg bag requirements for your project based on substrate area, tile dimensions, and notched-trowel bed thickness calibrated to IS 15477 standards.
            </p>
          </div>
        </Reveal>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <Reveal className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#DFE3DF] shadow-xs">
            <div className="space-y-6">
              
              {/* Unit Toggle & Area Input */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-[#1D2322]">
                    Total Project Tiling Area
                  </label>
                  <div className="flex items-center rounded-lg bg-[#F6F7F4] p-1 border border-[#DFE3DF]">
                    <button
                      type="button"
                      onClick={() => setUnit("sqm")}
                      className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                        unit === "sqm"
                          ? "bg-[#00504A] text-white shadow-xs"
                          : "text-[#5A6361] hover:text-[#1D2322]"
                      }`}
                    >
                      Square Metres (m²)
                    </button>
                    <button
                      type="button"
                      onClick={() => setUnit("sqft")}
                      className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                        unit === "sqft"
                          ? "bg-[#00504A] text-white shadow-xs"
                          : "text-[#5A6361] hover:text-[#1D2322]"
                      }`}
                    >
                      Square Feet (sq ft)
                    </button>
                  </div>
                </div>

                <div className="relative mt-2">
                  <input
                    type="number"
                    min="1"
                    max="100000"
                    value={area}
                    onChange={(e) => setArea(Math.max(1, Number(e.target.value)))}
                    className="w-full px-4 py-3 rounded-xl border border-[#DFE3DF] focus:border-[#00504A] focus:ring-2 focus:ring-[#00504A]/20 text-lg font-bold text-[#1D2322] bg-[#F6F7F4]/50 outline-hidden transition-all"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#5A6361]">
                    {unit === "sqm" ? "m²" : "sq ft"}
                  </div>
                </div>
              </div>

              {/* Tile Dimension Presets */}
              <div>
                <label className="block text-sm font-bold text-[#1D2322] mb-2">
                  Select Tile Format / Dimensions
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {TILE_PRESETS.map((preset, idx) => (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => setSelectedPresetIndex(idx)}
                      className={`p-3 text-left rounded-xl border transition-all text-xs ${
                        selectedPresetIndex === idx
                          ? "border-[#00504A] bg-[#00504A]/5 ring-1 ring-[#00504A] font-bold text-[#00504A]"
                          : "border-[#DFE3DF] hover:border-[#00504A]/50 text-[#5A6361] bg-[#F6F7F4]/30"
                      }`}
                    >
                      <div className="font-semibold text-[#1D2322] truncate">{preset.name}</div>
                      <div className="text-[10px] text-[#C87535] mt-0.5">{preset.recommendedGrade}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bed Thickness (Trowel notch) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-[#1D2322]">
                    Bed Thickness (Notch Depth)
                  </label>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[#00504A]/10 text-[#00504A]">
                    {bedThickness} mm bed
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { mm: 3, label: "3 mm (6×6 notch)" },
                    { mm: 4.5, label: "4.5 mm (8×8 notch)" },
                    { mm: 6, label: "6 mm (10×10 notch)" },
                    { mm: 9, label: "9 mm (Back-butter)" },
                  ].map((t) => (
                    <button
                      key={t.mm}
                      type="button"
                      onClick={() => setBedThickness(t.mm)}
                      className={`p-2.5 text-center rounded-xl border text-xs transition-all ${
                        bedThickness === t.mm
                          ? "border-[#00504A] bg-[#00504A] text-white font-bold shadow-xs"
                          : "border-[#DFE3DF] text-[#5A6361] hover:border-[#00504A]/50 bg-white"
                      }`}
                    >
                      <div className="font-bold">{t.mm} mm</div>
                      <div className="text-[10px] opacity-80 truncate">{t.label.split("(")[1]?.replace(")", "")}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Wastage & Product Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#DFE3DF]">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-[#1D2322]">
                      Wastage & Substrate Allowance
                    </label>
                    <span className="text-xs font-bold text-[#C87535]">{wastagePercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={wastagePercent}
                    onChange={(e) => setWastagePercent(Number(e.target.value))}
                    className="w-full accent-[#00504A] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#5A6361] mt-1">
                    <span>0% (Plumb slab)</span>
                    <span>5-8% (Recommended)</span>
                    <span>15% (Rough screed)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1D2322] mb-1.5">
                    Target Commercial Formulation
                  </label>
                  <select
                    value={productType}
                    onChange={(e) => setProductType(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-[#DFE3DF] bg-[#F6F7F4]/50 focus:border-[#00504A] outline-hidden text-[#1D2322]"
                  >
                    <option value="livo-fix">LIVO-FIX (Type 2T • Class C2TE)</option>
                    <option value="livo-set">LIVO-SET (Type 2T • Class C2T)</option>
                    <option value="livo-flex">LIVO-FLEX (Type 3T • Class C2TE S1)</option>
                  </select>
                </div>
              </div>

            </div>
          </Reveal>

          {/* Result Card Column (5 cols) */}
          <Reveal delay={0.2} className="lg:col-span-5 h-full">
            <div className="bg-[#00504A] text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl border border-[#003C3A] flex flex-col justify-between">
              
              {/* Decorative Glow */}
              <div className="absolute -top-16 -right-16 w-52 h-52 bg-[#C87535]/20 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#C87535]">
                    Engineering Estimate
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    IS 15477 Validated
                  </span>
                </div>

                {/* Primary Number: 20 kg bags */}
                <div className="my-6">
                  <div className="text-sm font-medium text-emerald-100">
                    Estimated 20 kg Bags Required:
                  </div>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-5xl sm:text-6xl font-bold font-heading text-white tracking-tight">
                      {calculation.bagsCount}
                    </span>
                    <span className="text-lg text-emerald-200 font-semibold">
                      Bags (20 kg each)
                    </span>
                  </div>
                  <p className="text-xs text-emerald-100/70 mt-2">
                    Equivalent to ~{calculation.totalKg.toLocaleString()} kg total powder adhesive (including {wastagePercent}% wastage).
                  </p>
                </div>

                {/* Breakdown Stats */}
                <div className="grid grid-cols-2 gap-3 py-4 border-y border-white/10 text-xs">
                  <div>
                    <div className="text-emerald-200/80">Average Coverage</div>
                    <div className="text-base font-bold text-white mt-0.5">
                      ~{calculation.coveragePerBag} m² / bag
                    </div>
                  </div>
                  <div>
                    <div className="text-emerald-200/80">Bed Depth</div>
                    <div className="text-base font-bold text-white mt-0.5">
                      {bedThickness} mm thickness
                    </div>
                  </div>
                </div>

                {/* Technical Recommendation Note */}
                <div className="mt-4 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-white mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#C87535]" />
                    Engineered Recommendation:
                  </div>
                  <p className="text-emerald-100/80 text-[11px] leading-relaxed">
                    For <span className="text-white font-semibold">{calculation.presetName}</span>, our chemical engineers recommend using <span className="text-[#C87535] font-bold">{calculation.recommendedProduct}</span> to safeguard against substrate movement and thermal deflection.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 space-y-2.5">
                <Link
                  href={`/contact?subject=Commercial+Adhesive+Quote&product=${productType}&bags=${calculation.bagsCount}&area=${area}${unit}&thickness=${bedThickness}mm`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C87535] text-white font-bold text-sm hover:bg-[#B7672B] transition-all shadow-md group"
                >
                  <span>Request Project Technical Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <p className="text-[11px] text-center text-emerald-200/60 flex items-center justify-center gap-1">
                  <HelpCircle className="w-3 h-3" />
                  Estimates assume uniform plumb substrate. Consult TDS for exact batch parameters.
                </p>
              </div>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}

