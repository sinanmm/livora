import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerContainer, StaggerItem, TextReveal } from "@/components/motion/reveal";
import { ArrowRight, Layers, Beaker, Shield, Compass } from "lucide-react";

export function BrandIntro() {
  const pillars = [
    {
      icon: Beaker,
      title: "Chemical Science",
      desc: "Formulations engineered for controlled polymer hydration, deformability, and prolonged open times.",
    },
    {
      icon: Layers,
      title: "Substrate Mastery",
      desc: "Engineered specifically to solve adhesion barriers on low-porosity vitrified and large-format porcelain slabs.",
    },
    {
      icon: Shield,
      title: "Moisture Protection",
      desc: "Seamless elastomeric barriers and impervious epoxies that arrest capillary ingress and efflorescence.",
    },
    {
      icon: Compass,
      title: "Climatic Resilience",
      desc: "Developed with an acute understanding of thermal extremes and humidity variations across Indian regions.",
    },
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-white border-y border-[#DFE3DF] relative">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Architectural Imagery */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal direction="left" duration={0.8}>
                <div
                  className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-xl border border-[#DFE3DF] bg-[#EAECE8] group"
                  style={{ position: "relative" }}
                >
                  <Image
                    src="/images/architecture/modern-facade.jpg"
                    alt="Modern architectural construction with precision engineered materials"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />

                  {/* Overlay Accent Card with Scroll Entrance */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#00504A] text-white shadow-xl border border-white/10 backdrop-blur-xs transition-transform duration-300 group-hover:-translate-y-1">
                    <span className="text-xs uppercase tracking-widest text-[#C87535] font-semibold block mb-1">
                      Engineering Credibility
                    </span>
                    <p className="text-sm font-medium leading-snug">
                      Supported by experienced professionals, chemical engineers with decades of industry experience, and specialised R&D.
                    </p>
                  </div>
                </div>
            </Reveal>
          </div>

          {/* Right Column: Story & Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <SectionHeading
              eyebrow="Who We Are"
              title="Better Chemistry. Stronger Foundations."
              description="LIVORA CHEMICALS is a performance-driven construction chemicals brand committed to advancing modern construction through specialised chemical solutions, technical expertise, and research-led product development."
            />

            <TextReveal delay={0.15}>
              <p className="text-base sm:text-lg text-[#5A6361] leading-relaxed">
                As contemporary construction adopts dense, low-porosity vitrified tiles, large-format porcelain panels, and intricate natural stone elevations, traditional cement-sand mortars are no longer sufficient. LIVORA bridges this engineering gap with precision chemical formulations tailored to substrate mechanics, moisture threats, and regional climatic stresses.
              </p>
            </TextReveal>

            {/* 4 Pillars Grid with Staggered Scroll Animation */}
            <StaggerContainer
              staggerDelay={0.08}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2"
            >
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.title} hoverLift={true}>
                    <div className="p-5 rounded-xl bg-[#F6F7F4] border border-[#DFE3DF] hover:border-[#00504A] hover:bg-white hover:shadow-lg transition-all duration-300 h-full">
                      <div className="w-10 h-10 rounded-lg bg-[#00504A]/10 flex items-center justify-center text-[#00504A] mb-3 group-hover:bg-[#00504A] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-[#1D2322] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#5A6361] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <Reveal delay={0.25}>
              <div className="flex items-center gap-4 pt-2">
                <Button href="/about" variant="primary" size="md" className="group">
                  <span>Learn More About LIVORA</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Button>
                <Button href="/solutions" variant="ghost" size="md">
                  Explore Industry Solutions
                </Button>
              </div>
            </Reveal>

          </div>

        </div>
      </Container>
    </section>
  );
}
