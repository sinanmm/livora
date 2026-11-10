import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { audienceSolutions } from "@/features/company/data/company";
import { constructMetadata } from "@/lib/seo";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HardHat,
  Compass,
  Users2,
  Building,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Industry & Customer Solutions | Tailored Support",
  description:
    "Tailored construction chemical solutions for architects, civil engineers, builders, contractors, tile layers, stone professionals, homeowners, and distribution partners.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#F6F7F4]">
      {/* Page Header */}
      <Container size="wide" className="mb-14 sm:mb-20">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#00504A]/10 border border-[#00504A]/20 text-xs font-bold uppercase tracking-wider text-[#00504A] mb-4">
              <Users2 className="w-4 h-4 text-[#C87535]" />
              Stakeholder Solutions
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1D2322] leading-[1.08]">
              Engineered Support for the{" "}
              <span className="text-[#00504A]">Entire Construction Lifecycle.</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-[#5A6361] leading-relaxed font-normal">
              Whether you are drafting project tender specifications, running on-site installation crews, or stocking building material shelves, LIVORA provides targeted chemical guidance and dependable supply.
            </p>
          </div>
        </Reveal>
      </Container>

      {/* 8 Audience Solutions Detailed Grid */}
      <section className="bg-white py-16 sm:py-24 border-y border-[#DFE3DF]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {audienceSolutions.map((item, index) => (
              <Reveal key={item.id} delay={(index % 2) * 0.1} className="h-full">
                <div className="h-full p-8 rounded-3xl bg-[#F6F7F4] border border-[#DFE3DF] hover:border-[#00504A] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-xs bg-white text-[#00504A] text-xs font-bold uppercase tracking-wider border border-[#DFE3DF]">
                        Audience 0{index + 1}
                      </span>
                      <HardHat className="w-5 h-5 text-[#C87535]" />
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-[#1D2322]">
                        {item.title}
                      </h2>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#00504A] mt-1">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-[#5A6361] leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="pt-2 space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#1D2322]">
                        Key Value Delivered:
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#1D2322]">
                        {item.keyBenefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#00504A] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#DFE3DF]">
                    <Button
                      href={item.ctaHref}
                      variant="primary"
                      size="md"
                      className="w-full justify-center group"
                    >
                      <span>{item.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Cross-Discipline Technical Desk Banner */}
      <section className="py-16 sm:py-20 bg-[#003C3A] text-white">
        <Container size="narrow" className="text-center">
          <Reveal>
            <Compass className="w-10 h-10 text-[#C87535] mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Have a Custom Project Requirement?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
              Our chemical engineering team is available to review substrate test reports, architectural elevation drawings, and thermal exposure variables to suggest appropriate chemical specifications.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact?type=Technical+Guidance" variant="accent" size="lg">
                Submit Project Details
              </Button>
              <Button href="/products" variant="outline-white" size="lg">
                Review Products
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}

