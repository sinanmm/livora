import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerContainer, StaggerItem, TextReveal } from "@/components/motion/reveal";
import { ArrowRight, Handshake, Store, Truck, Users2 } from "lucide-react";

export function PartnershipsHighlight() {
  const perks = [
    {
      icon: Store,
      title: "Dealers & Stockists",
      desc: "Distinctive, premium brand positioning, high retail appeal, and dedicated merchandised store presence.",
    },
    {
      icon: Truck,
      title: "Regional Distributors",
      desc: "Transparent business policies, dependable batch supply, and strategic territory collaboration.",
    },
    {
      icon: Users2,
      title: "Applicators & Contractors",
      desc: "Field-level technical guidance, demonstration workshops, and direct chemical engineering support.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F6F7F4] border-b border-[#DFE3DF]">
      <Container size="wide">
        <div className="bg-[#003C3A] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-white/10">

          {/* Subtle industrial geometry */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00504A] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#C87535]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#C87535]">
                  <Handshake className="w-4 h-4" />
                  Commercial Relationships
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3 leading-tight">
                  Building Stronger Partnerships.
                </h2>
              </Reveal>

              <TextReveal delay={0.1}>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                  LIVORA is committed to establishing lasting, mutually rewarding commercial partnerships with distributors, retail building material dealers, and professional applicators.
                </p>
            </TextReveal>

              <Reveal delay={0.2}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Button href="/partners" variant="accent" size="lg">
                    <span>Become a Partner</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                  <Button href="/contact?type=Business+Partnership" variant="outline-white" size="lg">
                    Speak with Channel Team
                  </Button>
                </div>
              </Reveal>
          </div>

                      {/* Right Cards with Staggered Scroll Animation */}
                      <div className="lg:col-span-5">
                        <StaggerContainer staggerDelay={0.1} className="space-y-4">
                          {perks.map((item) => {
                            const Icon = item.icon;
                            return (
                              <StaggerItem key={item.title} hoverLift={true}>
                                <div className="p-5 rounded-2xl bg-[#00504A]/60 border border-white/15 hover:border-[#C87535] hover:bg-[#00504A]/80 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-4">
                                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#C87535] flex items-center justify-center shrink-0">
                                    <Icon className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <h3 className="font-bold text-sm text-white">{item.title}</h3>
                                    <p className="text-xs text-white/75 mt-0.5 leading-relaxed">
                                      {item.desc}
                                    </p>
                                  </div>
                                </div>
                      </StaggerItem>
                      );
                })}
                    </StaggerContainer>
                  </div>

                </div>

        </div>
      </Container>
    </section>
  );
}
