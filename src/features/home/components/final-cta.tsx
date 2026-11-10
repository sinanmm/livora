import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal, TextReveal } from "@/components/motion/reveal";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-20 sm:py-28 bg-[#003C3A] text-white relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00504A]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 right-10 w-80 h-80 bg-[#C87535]/10 rounded-full blur-2xl pointer-events-none" />

      <Container size="default" className="relative z-10 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#C87535] mb-6">
            <ShieldCheck className="w-4 h-4" />
            Smart Solutions. Stronger Structures.
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.1]">
            Let&apos;s Build Something Stronger.
          </h2>
        </Reveal>

        <TextReveal delay={0.15}>
          <p className="mt-5 text-base sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Connect with LIVORA for product guidance, technical specifications, project queries, and dealership partnerships.
          </p>
        </TextReveal>

        <Reveal delay={0.25}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="accent" size="lg" className="shadow-lg hover:shadow-2xl transition-all">
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/products" variant="outline-white" size="lg">
                Explore Products
              </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-white/60">
            <span>Tile Adhesives</span>
            <span>•</span>
            <span>Waterproofing</span>
            <span>•</span>
            <span>Tile Epoxy</span>
            <span>•</span>
            <span>Stone & Marble</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
