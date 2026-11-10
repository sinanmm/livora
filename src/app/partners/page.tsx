import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PartnerForm } from "@/features/partners/components/partner-form";
import { constructMetadata } from "@/lib/seo";
import { Reveal } from "@/components/motion/reveal";
import { Handshake, Store, ShieldCheck, HeartHandshake, Award, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Commercial Partnerships | Dealers & Distributors",
  description:
    "Join the LIVORA CHEMICALS distribution network. Grounded in trust, technical support, transparent collaboration, and high-performance construction chemicals.",
  path: "/partners",
});

export default function PartnersPage() {
  const values = [
    {
      title: "Trust & Transparency",
      desc: "Transparent business policies, dependable terms, and authentic communication without misleading commitments.",
    },
    {
      title: "Dedicated Technical Support",
      desc: "Direct access to our chemical engineering desk and applicator training sessions to support your retail counter.",
    },
    {
      title: "Quality Consistency",
      desc: "Rigorous quality benchmarks ensuring zero batch variations and reliable field performance.",
    },
    {
      title: "Long-Term Collaboration",
      desc: "We look beyond single transactions to build enduring commercial relationships as we expand domestically.",
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#F6F7F4]">
      {/* Header */}
      <Container size="wide" className="mb-14 sm:mb-20">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#00504A]/10 border border-[#00504A]/20 text-xs font-bold uppercase tracking-wider text-[#00504A] mb-4">
              <Handshake className="w-4 h-4 text-[#C87535]" />
              Distribution & Commercial Alliances
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1D2322] leading-[1.08]">
              Building Enduring{" "}
              <span className="text-[#00504A]">Commercial Partnerships.</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-[#5A6361] leading-relaxed font-normal">
              LIVORA CHEMICALS welcomes enquiries from regional distributors, building material dealers, and established contractors seeking a technically credible brand partner.
            </p>
          </div>
        </Reveal>
      </Container>

      {/* Main Grid: Values & Form */}
      <section className="bg-white py-16 sm:py-24 border-y border-[#DFE3DF]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Brand Values & Partnership Benefits */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal>
                <SectionHeading
                  eyebrow="Commercial Philosophy"
                  title="What We Bring to the Table"
                  description="Our approach to channel partnerships is grounded in technical credibility, steady supply, and genuine mutual respect."
                />
              </Reveal>

              <div className="space-y-4">
                {values.map((v, i) => (
                  <Reveal key={v.title} delay={i * 0.08}>
                    <div className="p-5 rounded-2xl bg-[#F6F7F4] border border-[#DFE3DF]">
                      <h3 className="text-base font-bold text-[#1D2322] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00504A]" />
                        {v.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5A6361] mt-1.5 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.3}>
                <div className="p-5 rounded-2xl bg-[#003C3A] text-white space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C87535] block">
                    Notice on Commercial Terms
                  </span>
                  <p className="text-xs text-white/80 leading-relaxed">
                    LIVORA does not publish arbitrary margin promises or unverified territory exclusivity claims. Commercial agreements are discussed individually based on regional market requirements and regulatory considerations.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Interactive Partnership Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <PartnerForm />
              </Reveal>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}

