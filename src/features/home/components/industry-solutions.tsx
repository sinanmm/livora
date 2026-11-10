import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { audienceSolutions } from "@/features/company/data/company";
import { StaggerContainer, StaggerItem, TextReveal } from "@/components/motion/reveal";
import { ArrowRight, Check, HardHat } from "lucide-react";

export function IndustrySolutions() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#DFE3DF]">
      <Container size="wide">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
              <SectionHeading
                eyebrow="Ecosystem Partnerships"
                title="Supporting the People Who Build."
                description="From tender specifications to the daily craft of tile fixing, LIVORA provides dedicated technical support across the modern construction ecosystem."
              />
              <TextReveal delay={0.2}>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#00504A] hover:text-[#003C3A] transition-colors shrink-0 group py-1"
                >
                  <span>Explore All 8 Profiles</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
      </TextReveal>
    </div>

    {/* Audience Grid - 8 Professional Segments with Staggered Scroll Animation */}
    <StaggerContainer
      staggerDelay={0.06}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {audienceSolutions.map((item) => (
            <StaggerItem key={item.id} hoverLift={true} className="h-full">
              <div className="group flex flex-col justify-between h-full p-6 rounded-2xl bg-[#F6F7F4] border border-[#DFE3DF] hover:border-[#00504A] hover:bg-white shadow-xs hover:shadow-xl transition-all duration-300">
                <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#00504A]/10 text-[#00504A] group-hover:bg-[#00504A] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                      <HardHat className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-bold text-[#1D2322] group-hover:text-[#00504A] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#5A6361] leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="pt-2">
                      <ul className="space-y-1.5 text-xs text-[#1D2322]">
                        {item.keyBenefits.slice(0, 2).map((benefit) => (
                          <li key={benefit} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#00504A] shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#DFE3DF]">
                    <Link
                      href={item.ctaHref}
                      className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#00504A] group-hover:text-[#003C3A]"
                    >
                      <span>{item.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
            </StaggerItem>
          ))}
          </StaggerContainer>
        </Container>
    </section>
    );
}
