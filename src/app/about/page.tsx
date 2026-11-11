import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { companyProfile } from "@/features/company/data/company";
import { constructMetadata } from "@/lib/seo";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import {
  ShieldCheck,
  Target,
  Compass,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  FlaskConical,
  Award,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "About LIVORA CHEMICALS | Story, Mission & Values",
  description:
    "Learn about LIVORA CHEMICALS—our engineering vision, research-led development, mission commitments, and core values advancing modern construction.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#F6F7F4]">
      {/* Page Header */}
      <Container size="wide" className="mb-14 sm:mb-20">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#00504A]/10 border border-[#00504A]/20 text-xs font-bold uppercase tracking-wider text-[#00504A] mb-4">
              <ShieldCheck className="w-4 h-4 text-[#C87535]" />
              Company Identity & Philosophy
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1D2322] leading-[1.08]">
              Engineering Solutions.{" "}
              <span className="text-[#00504A]">Strengthening Structures.</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-[#5A6361] leading-relaxed font-normal">
              LIVORA CHEMICALS is a performance-driven construction chemicals brand committed to advancing modern construction through specialised chemical solutions, technical expertise, and research-led product development.
            </p>
          </div>
        </Reveal>
      </Container>

      {/* Executive Summary & Brand Foundation */}
      <section className="bg-white py-16 sm:py-24 border-y border-[#DFE3DF]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 relative">
              <Reveal>
                <div
                  className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border border-[#DFE3DF] bg-[#EAECE8]"
                  style={{ position: "relative" }}
                >
                  <Image
                    src="/images/architecture/modern-facade.jpg"
                    alt="LIVORA Modern Architecture & Engineering"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#003C3A]/70 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#00504A] block mb-1">
                      Technical Partnership
                    </span>
                    <p className="text-xs sm:text-sm text-[#1D2322] font-semibold">
                      Reliable partner to architects, civil engineers, builders, contractors, and distribution partners.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <SectionHeading
                  eyebrow="Executive Summary"
                  title="A Specialized Approach to Modern Construction"
                />
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-base sm:text-lg text-[#5A6361] leading-relaxed">
                  {companyProfile.executiveSummary}
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="p-5 rounded-2xl bg-[#F6F7F4] border border-[#DFE3DF] space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#00504A]">
                    Core Portfolio Focus Areas:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#1D2322]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00504A]" />
                      <span>1. Tile Adhesive Solutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00504A]" />
                      <span>2. Waterproofing Solutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00504A]" />
                      <span>3. Tile Epoxy Solutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00504A]" />
                      <span>4. Stone & Marble Solutions</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-sm text-[#5A6361] leading-relaxed">
                  Our technical methodology addresses environmental conditions, product grades, material compatibility, substrate characteristics, engineering requirements, and on-site application practices.
                </p>
              </Reveal>
            </div>

          </div>
        </Container>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 sm:py-24 bg-[#F6F7F4]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Vision Card */}
            <Reveal className="h-full">
              <div className="h-full p-8 sm:p-10 rounded-3xl bg-[#003C3A] text-white flex flex-col justify-between shadow-xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00504A] rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-[#C87535] flex items-center justify-center">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C87535] block">
                    Our Vision
                  </span>
                  <blockquote className="text-lg sm:text-xl font-medium leading-relaxed italic text-white/95">
                    &ldquo;{companyProfile.vision}&rdquo;
                  </blockquote>
                </div>
                <div className="relative z-10 pt-6 mt-6 border-t border-white/10 text-xs text-white/70">
                  {companyProfile.visionNote}
                </div>
              </div>
            </Reveal>

            {/* Mission Card */}
            <Reveal delay={0.1} className="h-full">
              <div className="h-full p-8 sm:p-10 rounded-3xl bg-white text-[#1D2322] flex flex-col justify-between shadow-xl border border-[#DFE3DF]">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00504A]/10 text-[#00504A] flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00504A] block">
                    Our Mission
                  </span>
                  <blockquote className="text-lg sm:text-xl font-medium leading-relaxed italic text-[#1D2322]">
                    &ldquo;{companyProfile.mission}&rdquo;
                  </blockquote>
                </div>
                <div className="pt-6 mt-6 border-t border-[#DFE3DF] text-xs text-[#5A6361]">
                  Engineered with expertise. Focused on performance.
                </div>
              </div>
            </Reveal>

          </div>
        </Container>
      </section>

      {/* Mission Commitments (6 Commitments) */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#DFE3DF]">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Mission Commitments"
              title="Six Operational Commitments to the Industry"
              description="Our mission translates into concrete, daily commitments guiding our product formulations, technical support, and commercial conduct."
              className="mb-14"
            />
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyProfile.missionCommitments.map((commit) => (
                  <StaggerItem key={commit.number} hoverLift={true} className="h-full">
                    <div className="h-full p-6 rounded-2xl bg-[#F6F7F4] border border-[#DFE3DF] hover:border-[#00504A] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                      <div className="space-y-3">
                        <span className="text-2xl font-bold text-[#00504A] font-heading">
                          {commit.number}
                        </span>
                        <h3 className="text-base font-bold text-[#1D2322]">
                          {commit.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5A6361] leading-relaxed">
                          {commit.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
            ))}
                </StaggerContainer>
              </Container>
      </section>

          {/* Core Values (4 Values) */}
          <section className="py-16 sm:py-24 bg-[#003C3A] text-white">
            <Container size="wide">
              <Reveal>
                <SectionHeading
                  eyebrow="Guiding Principles"
                  title="Our Core Values"
                  description="The foundational standards that define LIVORA's technical mindset, stakeholder relationships, and product consistency."
                  theme="dark"
                  className="mb-14"
                />
              </Reveal>

                      <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {companyProfile.coreValues.map((val) => (
                          <StaggerItem key={val.title} hoverLift={true} className="h-full">
                            <div className="h-full p-6 rounded-2xl bg-[#00504A]/50 border border-white/10 hover:border-[#C87535] hover:bg-[#00504A]/70 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                              <div className="space-y-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#C87535]">
                                  {val.shortDesc}
                                </span>
                                <h3 className="text-xl font-bold text-white">
                                  {val.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                                  {val.description}
                                </p>
                              </div>
                            </div>
              </StaggerItem>
            ))}
                  </StaggerContainer>
        </Container>
          </section>

          {/* Strategic Outlook */}
          <section className="py-16 sm:py-24 bg-white border-b border-[#DFE3DF]">
            <Container size="wide">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                <div className="lg:col-span-5 space-y-4">
                  <Reveal>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00504A]">
                      <TrendingUp className="w-4 h-4 text-[#C87535]" />
                      Future Horizons
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2322]">
                      Strategic Outlook & Long-Term Direction
                    </h2>
                    <p className="text-sm sm:text-base text-[#5A6361] leading-relaxed">
                      {companyProfile.strategicOutlook.overview}
                    </p>

                    <div className="pt-4">
                      <Button href="/partners" variant="primary" size="md">
                        <span>Partner With LIVORA</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </Reveal>
                </div>

                <div className="lg:col-span-7">
                  <Reveal delay={0.1}>
                    <div className="p-6 sm:p-8 rounded-2xl bg-[#F6F7F4] border border-[#DFE3DF] space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-[#00504A] mb-2">
                        Key Strategic Pillars:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#1D2322]">
                        {companyProfile.strategicOutlook.pillars.map((pillar) => (
                          <div key={pillar} className="flex items-start gap-2 p-2.5 rounded-lg bg-white border border-[#DFE3DF]/80">
                            <CheckCircle2 className="w-4 h-4 text-[#00504A] shrink-0 mt-0.5" />
                            <span>{pillar}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>

              </div>
            </Container>
          </section>

          {/* Mascot Staging / Closing Action */}
          <section className="py-16 bg-[#F6F7F4]">
            <Container size="narrow" className="text-center">
              <Reveal>
                <div className="w-48 sm:w-56 aspect-1024/682 mx-auto drop-shadow-lg mb-4">
                  <Image
                    src="/images/mascot/mascot-transparent.webp"
                    alt="LIVORA Mascot"
                    width={300}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2322]">
                  Building Confidence Through Better Chemical Solutions.
                </h2>
                <p className="mt-2 text-sm text-[#5A6361] max-w-lg mx-auto">
                  At Livora, we see every construction challenge as an opportunity to engineer a better solution.
                </p>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <Button href="/contact" variant="primary" size="md">
                    Contact Our Engineers
                  </Button>
                  <Button href="/products" variant="outline" size="md">
                    Explore Divisions
                  </Button>
                </div>
              </Reveal>
            </Container>
          </section>
        </div>
        );
}

