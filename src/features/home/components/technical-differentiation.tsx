import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import { Cpu, FlaskConical, Wrench, Handshake } from "lucide-react";

export function TechnicalDifferentiation() {
  const strengths = [
    {
      icon: Cpu,
      number: "01",
      title: "Technical Expertise",
      subtitle: "Decades of Chemical Science",
      description:
        "Led by chemical engineers and material scientists with deep industry experience in polymer chemistry, cementitious hydration kinetics, and substrate mechanics.",
      focus: "Material bonding, polymer dispersion, and tensile shear endurance.",
    },
    {
      icon: FlaskConical,
      number: "02",
      title: "Research-Led Thinking",
      subtitle: "Application-Oriented Formulation",
      description:
        "Continuous product evaluation shaped by real-world field feedback, evolving tile geometries, and regional climatic variables across India.",
      focus: "Extended open times, crack-bridging elasticity, and thermal shock resistance.",
    },
    {
      icon: Wrench,
      number: "03",
      title: "Application-Oriented Solutions",
      subtitle: "Purpose-Built Performance",
      description:
        "Every formulation is engineered for specific substrates, formats, and environments—from lightweight blockwork to dense porcelain and submerged swimming pools.",
      focus: "Substrate profiling, sag resistance, and balanced workability.",
    },
    {
      icon: Handshake,
      number: "04",
      title: "Partnership & Reliability",
      subtitle: "Long-Term Technical Trust",
      description:
        "We act as dependable technical partners to architects, consultants, and applicators, providing informed specification guidance rather than transactional sales.",
      focus: "On-site specification review, applicator support, and batch consistency.",
    },
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-[#003C3A] text-white relative overflow-hidden">
      {/* Subtle background industrial grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#00504A]/50 blur-3xl pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <SectionHeading
          eyebrow="Core Capabilities"
          title="Driven by Engineering. Strengthened by Research."
          description="Our approach combines specialised chemical engineering with on-site construction realities, ensuring dependable material performance from foundation to final grout line."
          theme="dark"
          className="mb-14 sm:mb-20"
        />

            {/* 4 Core Strengths Grid with Staggered Scroll Animation */ }
            <StaggerContainer
              staggerDelay={0.1}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                      <StaggerItem key={item.title} hoverLift={true} className="h-full">
                        <div className="h-full p-6 sm:p-7 rounded-2xl bg-[#00504A]/40 border border-white/10 hover:border-[#C87535] hover:bg-[#00504A]/70 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="w-12 h-12 rounded-xl bg-white/10 text-[#C87535] group-hover:bg-[#C87535] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                                  <Icon className="w-6 h-6" />
                                </div>
                                <span className="text-2xl font-bold text-white/30 font-heading">
                                  {item.number}
                                </span>
                              </div>

                              <div>
                                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C87535] block">
                                  {item.subtitle}
                                </span>
                                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-white transition-colors">
                                  {item.title}
                                </h3>
                              </div>

                              <p className="text-sm text-white/80 leading-relaxed font-normal">
                                {item.description}
                              </p>
                            </div>

                            <div className="pt-5 mt-5 border-t border-white/10 text-xs text-white/60">
                              <span className="font-semibold text-white/90 block mb-0.5">Focus:</span>
                              {item.focus}
                            </div>
                          </div>
                      </StaggerItem>
                      );
          })}
                  </StaggerContainer>
      </Container>
    </section>
        );
}
