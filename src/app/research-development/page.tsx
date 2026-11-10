import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { climaticRegions } from "@/features/company/data/company";
import { constructMetadata } from "@/lib/seo";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import {
  FlaskConical,
  Compass,
  Thermometer,
  CloudRain,
  Sun,
  Wind,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Beaker,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Research & Development | Climatic Engineering",
  description:
    "Explore LIVORA CHEMICALS' R&D methodology: chemical engineering expertise shaped by regional climatic diversity across North, South, East, West, and Central India.",
  path: "/research-development",
});

export default function ResearchDevelopmentPage() {
  const regionIcons: Record<string, any> = {
    north: Thermometer,
    south: CloudRain,
    east: CloudRain,
    west: Sun,
    central: Wind,
  };

  return (
    <div className="py-12 sm:py-20 bg-[#F6F7F4]">
      {/* Header */}
      <Container size="wide" className="mb-14 sm:mb-20">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#00504A]/10 border border-[#00504A]/20 text-xs font-bold uppercase tracking-wider text-[#00504A] mb-4">
              <FlaskConical className="w-4 h-4 text-[#C87535]" />
              Formulation Science & Regional Research
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1D2322] leading-[1.08]">
              Engineering Solutions Through{" "}
              <span className="text-[#00504A]">Specialised R&D.</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-[#5A6361] leading-relaxed font-normal">
              LIVORA&apos;s specialised R&D approach combines chemical engineering expertise, product knowledge, and an acute understanding of climatic diversity across the Indian subcontinent.
            </p>
          </div>
        </Reveal>
      </Container>

      {/* R&D Core Philosophy */}
      <section className="bg-white py-16 sm:py-24 border-y border-[#DFE3DF]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <SectionHeading
                  eyebrow="Scientific Approach"
                  title="Formulation Grounded in Real-World Substrates"
                  description="Construction chemicals cannot be evaluated in sterile theoretical isolation. Our engineering team studies the actual interaction between cementitious binders, polymer modifiers, and modern dense substrates."
                />
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-4 text-sm sm:text-base text-[#5A6361] leading-relaxed">
                  <p>
                    As building technologies evolve toward large-format, low-porosity vitrified tiles and imported marbles, the chemical demands on adhesion, deformability, and moisture exclusion multiply exponentially.
                  </p>
                  <p>
                    Our research approach systematically assesses polymer modification ratios, water retention polymers, anti-sag rheology, and hydration kinetics to ensure that adhesives and waterproofing barriers maintain predictable tensile and shear strength on active job sites.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="p-4 rounded-xl bg-[#F6F7F4] border border-[#DFE3DF] text-xs text-[#5A6361] italic">
                  *Our research methodology focuses on application realities, material compatibility, and geographic climatic diversity to inform formulation design.
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.15}>
                <div className="p-8 rounded-3xl bg-[#003C3A] text-white shadow-xl border border-white/10 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-[#C87535] flex items-center justify-center">
                      <Beaker className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Core Investigation Parameters
                      </h3>
                      <p className="text-xs text-white/70">Key chemical and physical dynamics</p>
                    </div>
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-sm text-white/85">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <strong className="text-white block mb-0.5">Polymer Dispersion & Cross-Linking:</strong>
                      Optimising redispersible polymer powder grades for enhanced flexural strength and substrate deformability (S1/S2 grade suitability).
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <strong className="text-white block mb-0.5">Hydration Retardation in High Heat:</strong>
                      Extending open and adjustment times so tile setters can place large slabs without premature skinning.
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <strong className="text-white block mb-0.5">Hydrostatic Pressure Resistance:</strong>
                      Formulating continuous crystalline and elastomeric barriers capable of resisting high positive and negative heads of water.
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <strong className="text-white block mb-0.5">Non-Yellowing Stone Epoxies:</strong>
                      Selected amine adduct hardeners that prevent dark shadowing or oxidation behind delicate translucent white marbles.
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 5 Climatic Regions of India Deep Dive */}
      <section className="py-16 sm:py-24 bg-[#F6F7F4] border-b border-[#DFE3DF]">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Geographic Diversity"
              title="Formulation Informed by Five Indian Climates"
              description="India encompasses diverse microclimates. Understanding regional conditions allows construction professionals to make informed, durable chemical selections."
              className="mb-14"
            />
          </Reveal>

          <div className="space-y-8">
            {climaticRegions.map((region, idx) => {
              const Icon = regionIcons[region.id] || Compass;
              return (
                <Reveal key={region.id} delay={idx * 0.08}>
                  <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#DFE3DF] shadow-xs hover:shadow-md transition-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Region Badge & States */}
                      <div className="lg:col-span-4 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#00504A]/10 text-[#00504A] flex items-center justify-center">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#C87535]">
                              Climatic Zone 0{idx + 1}
                            </span>
                            <h3 className="text-2xl font-bold text-[#1D2322]">
                              {region.name}
                            </h3>
                          </div>
                        </div>

                        <div className="text-xs text-[#5A6361] p-3 rounded-xl bg-[#F6F7F4] border border-[#DFE3DF]">
                          <strong className="text-[#1D2322] block mb-0.5">Key States:</strong>
                          {region.states}
                        </div>

                        <p className="text-sm text-[#1D2322] leading-relaxed">
                          {region.climateProfile}
                        </p>
                      </div>

                      {/* Observed Challenges */}
                      <div className="lg:col-span-4 space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#5A6361]">
                          Observed Site Challenges:
                        </div>
                        <ul className="space-y-2 text-xs sm:text-sm text-[#1D2322]">
                          {region.challenges.map((c) => (
                            <li key={c} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C87535] shrink-0 mt-1.5" />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Formulation Approach */}
                      <div className="lg:col-span-4 space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#00504A]">
                          LIVORA Formulation Focus:
                        </div>
                        <div className="p-4 rounded-xl bg-[#00504A]/5 border border-[#00504A]/20 text-xs sm:text-sm text-[#1D2322] leading-relaxed">
                          {region.formulationFocus}
                        </div>
                      </div>

                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Bottom Technical CTA */}
      <section className="py-16 bg-[#003C3A] text-white">
        <Container size="narrow" className="text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Consult Our Chemical Engineering Team
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
              Have specific climatic or substrate questions regarding an upcoming infrastructure or residential project? Connect with our technical desk.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Button href="/contact?type=Technical+Guidance" variant="accent" size="lg">
                <span>Request Project Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}

