import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { StaggerContainer, StaggerItem, TextReveal } from "@/components/motion/reveal";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";

export function InstagramSection() {
  const brandVisuals = [
    {
      src: "/images/products/tile-adhesives.jpg",
      title: "Tile Adhesive Craftsmanship",
      category: "Application Focus",
    },
    {
      src: "/images/products/waterproofing.jpg",
      title: "Moisture Protection Barrier",
      category: "Field Chemistry",
    },
    {
      src: "/images/products/tile-epoxy.jpg",
      title: "Epoxy Precision Finishing",
      category: "Joint Architecture",
    },
    {
      src: "/images/products/stone-marble.jpg",
      title: "Italian Marble Bonding",
      category: "Material Science",
    },
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-white border-b border-[#DFE3DF]">
      <Container size="wide">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <SectionHeading
                eyebrow="Community & Brand"
                title="Inside LIVORA."
                description="Follow our official channel for field application highlights, chemical science insights, and modern construction techniques."
              />

              <TextReveal delay={0.2}>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-sm bg-[#00504A] text-white hover:bg-[#003C3A] text-xs font-bold uppercase tracking-wider transition-all duration-200 shrink-0 shadow-sm hover:shadow-md group"
                >
                  <InstagramIcon className="w-4 h-4 text-[#C87535]" />
                  <span>Follow @livorachemicals</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
      </TextReveal>
    </div>

        {/* Brand Editorial Mosaic with Staggered Scroll Animation */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {brandVisuals.map((visual) => (
            <StaggerItem key={visual.title} hoverLift={true}>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden block bg-[#EAECE8] border border-[#DFE3DF] shadow-xs hover:shadow-2xl transition-all duration-300"
                style={{ position: "relative" }}
              >
                <Image
                  src={visual.src}
                  alt={visual.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                  <div className="absolute inset-0 bg-linear-to-t from-[#003C3A]/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C87535]">
                      {visual.category}
                    </span>
                      <div className="text-xs sm:text-sm font-semibold truncate mt-0.5">
                        {visual.title}
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-white/80 mt-1">
                        <InstagramIcon className="w-3 h-3" />
                        <span>View on Instagram</span>
                      </div>
                    </div>
                  </a>
            </StaggerItem>
          ))}
      </StaggerContainer>
      </Container>
    </section >
  );
}
