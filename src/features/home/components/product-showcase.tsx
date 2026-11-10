import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { productCategories } from "@/features/products/data/categories";
import { Reveal, StaggerContainer, StaggerItem, TextReveal } from "@/components/motion/reveal";
import { ArrowRight, Check } from "lucide-react";

export function ProductShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-[#F6F7F4] relative">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="Core Portfolios"
            title="Solutions Built Around Every Application."
            description="Four specialised chemical divisions addressing surface preparation, moisture protection, tile bonding, and architectural natural stone finishes."
          />
          <TextReveal delay={0.2}>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#00504A] hover:text-[#003C3A] transition-colors shrink-0 group py-1"
            >
              <span>View Full Directory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </TextReveal>
        </div>

        {/* 4 Editorial Product Division Cards with Scroll Animation */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {productCategories.map((cat, index) => (
            <StaggerItem key={cat.slug} hoverLift={true} className="h-full">
              <Link
                href={`/products/${cat.slug}`}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-[#DFE3DF] hover:border-[#00504A] shadow-xs hover:shadow-2xl transition-all duration-300 relative"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#EAECE8]">
                  <Image
                    src={cat.heroImage}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Division Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-2.5 py-1 rounded-xs bg-white/95 backdrop-blur-xs text-[11px] font-bold uppercase tracking-wider text-[#00504A] shadow-xs group-hover:bg-[#00504A] group-hover:text-white transition-colors duration-300">
                      Division 0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1D2322] group-hover:text-[#00504A] transition-colors duration-200 leading-tight">
                      {cat.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A6361] mt-2 line-clamp-3 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-3 border-t border-[#EAECE8]">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C87535]">
                      {cat.slug === "tile-adhesives"
                        ? "Verified Grades (TDS Available)"
                        : cat.slug === "tile-epoxy"
                          ? "Featured Product & Formulation"
                          : "Key Applications"}
                    </div>
                    {cat.slug === "tile-adhesives" ? (
                      <div className="space-y-1 text-[11px] text-[#1D2322]">
                        <div className="flex items-center gap-1.5 font-semibold text-[#00504A]">
                          <Check className="w-3.5 h-3.5 text-[#00504A] shrink-0" />
                          <span>LIVO-FIX • Type 2T / Class C2TE</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-semibold text-[#00504A]">
                          <Check className="w-3.5 h-3.5 text-[#00504A] shrink-0" />
                          <span>LIVO-SET • Type 2T / Class C2T</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-semibold text-[#00504A]">
                          <Check className="w-3.5 h-3.5 text-[#00504A] shrink-0" />
                          <span>LIVO-FLEX • Type 3T / C2TE S1</span>
                        </div>
                      </div>
                    ) : cat.slug === "tile-epoxy" ? (
                      <div className="space-y-1 text-[11px] text-[#1D2322]">
                        <div className="flex items-center gap-1.5 font-semibold text-[#00504A]">
                          <Check className="w-3.5 h-3.5 text-[#00504A] shrink-0" />
                          <span>LIVORA Epo Color+ (1 kg Bucket)</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#5A6361]">
                          <Check className="w-3.5 h-3.5 text-[#00504A] shrink-0" />
                          <span>2K Reaction Resin • EN 13888 Class RG</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#5A6361]">
                          <Check className="w-3.5 h-3.5 text-[#00504A] shrink-0" />
                          <span>100% Stain-Proof & Chemical Resistant</span>
                        </div>
                      </div>
                    ) : (
                      <ul className="space-y-1.5 text-xs text-[#1D2322]">
                        {cat.materialsAndApplications.slice(0, 3).map((item) => (
                          <li key={item} className="flex items-center gap-1.5 truncate">
                            <Check className="w-3.5 h-3.5 text-[#00504A] shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Card Footer Link */}
                  <div className="pt-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#00504A] group-hover:text-[#003C3A]">
                    <span>Explore Division</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section >
  );
}
