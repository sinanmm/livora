import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem, TextReveal } from "@/components/motion/reveal";
import { ArrowRight, Home, Building2, Droplets, Sparkles, Gem, Layers } from "lucide-react";

export function ApplicationsGrid() {
  const applications = [
    {
      icon: Home,
      title: "Interior Tile Installation",
      desc: "Bedding solutions for living rooms, kitchens, vitrified floors, and wall cladding where slip resistance and extended open times are paramount.",
      link: "/products/tile-adhesives",
    },
    {
      icon: Building2,
      title: "Exterior Tile & Facades",
      desc: "Formulations engineered to absorb wind loads, thermal shocks, and seasonal freeze-thaw deflection without debonding.",
      link: "/products/tile-adhesives",
    },
    {
      icon: Droplets,
      title: "Wet & Moisture-Prone Areas",
      desc: "Hydrophobic barriers and waterproofing membranes for bathrooms, balconies, podiums, swimming pools, and utility sumps.",
      link: "/products/waterproofing",
    },
    {
      icon: Sparkles,
      title: "Professional Tile Finishing",
      desc: "Epoxy-based precision joint fillers engineered to resist bacterial growth, heavy cleaning chemicals, and persistent staining.",
      link: "/products/tile-epoxy",
    },
    {
      icon: Gem,
      title: "Stone & Marble Applications",
      desc: "Specialised non-staining white mortars and impregnating sealers tailored for delicate natural stones and Italian marble.",
      link: "/products/stone-marble",
    },
    {
      icon: Layers,
      title: "Substrate Compatibility",
      desc: "Chemical primers and bonding agents that bridge smooth cast concrete, AAC blockwork, existing tiles, and cementitious screeds.",
      link: "/solutions",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#DFE3DF]">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="Targeted Engineering"
            title="Application Areas Across the Built Environment."
            description="Construction demands vary by exposure, moisture, and structural mechanics. Explore LIVORA's targeted application contexts."
          />
          <TextReveal delay={0.2}>
            <div className="text-xs text-[#5A6361] max-w-xs shrink-0 italic">
              *Described as specific application contexts; final product selection depends on project parameters and verified specifications.
            </div>
          </TextReveal>
        </div>

        {/* 6 Applications Cards with Staggered Scroll Animation */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {applications.map((app) => {
            const Icon = app.icon;
            return (
              <StaggerItem key={app.title} hoverLift={true} className="h-full">
                <Link
                  href={app.link}
                  className="group flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-[#F6F7F4] border border-[#DFE3DF] hover:border-[#00504A] hover:bg-white shadow-xs hover:shadow-xl transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00504A]/10 text-[#00504A] group-hover:bg-[#00504A] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-[#1D2322] group-hover:text-[#00504A] transition-colors leading-snug">
                      {app.title}
                    </h3>

                    <p className="text-sm text-[#5A6361] leading-relaxed">
                      {app.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#DFE3DF] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#00504A]">
                    <span>Explore Context</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
