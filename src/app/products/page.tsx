import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/features/products/data/categories";
import { constructMetadata } from "@/lib/seo";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import { AdhesiveCalculator } from "@/features/products/components/adhesive-calculator";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  SlidersHorizontal,
  Compass,
  Download,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Product Divisions | Advanced Construction Chemicals",
  description:
    "Explore LIVORA CHEMICALS' four core product divisions: Tile Adhesive Solutions, Waterproofing Solutions, Tile Epoxy Solutions, and Stone & Marble Solutions.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#F6F7F4]">
      {/* Page Header */}
      <Container size="wide" className="mb-14 sm:mb-20">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#00504A]/10 border border-[#00504A]/20 text-xs font-bold uppercase tracking-wider text-[#00504A] mb-4">
              <ShieldCheck className="w-4 h-4 text-[#C87535]" />
              Core Product Portfolio
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1D2322] leading-[1.08]">
              Advanced Chemical Solutions.{" "}
              <span className="text-[#00504A]">Application Specific.</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-[#5A6361] leading-relaxed font-normal">
              Our portfolio is structured into four specialised divisions addressing surface preparation, substrate adhesion, moisture defence, and luxury stone protection.
            </p>
          </div>
        </Reveal>
      </Container>

      {/* 4 Dedicated Divisions Deep Presentation */}
      <section className="bg-white py-16 sm:py-24 border-y border-[#DFE3DF]">
        <Container size="wide">
          <div className="space-y-16 sm:space-y-24">
            {productCategories.map((cat, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={cat.slug}
                  id={cat.slug}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-16 sm:pb-24 border-b border-[#EAECE8] last:border-b-0 last:pb-0"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                  >
                    <Reveal>
                        <div
                          className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-[#DFE3DF] bg-[#EAECE8] group"
                          style={{ position: "relative" }}
                        >
                          <Image
                            src={cat.heroImage}
                            alt={cat.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-xs bg-[#00504A] text-white text-xs font-bold uppercase tracking-wider">
                              Division 0{index + 1}
                            </span>
                          </div>
                        </div>
                    </Reveal>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                  >
                    <Reveal>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#C87535] block">
                        Specialised Engineering
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2322] mt-1">
                        {cat.name}
                      </h2>
                      <p className="text-sm font-semibold text-[#00504A] mt-1">
                        {cat.tagline}
                      </p>
                      <p className="text-sm sm:text-base text-[#5A6361] mt-3 leading-relaxed">
                        {cat.detailedOverview}
                      </p>
                    </Reveal>

                    {/* Applications Matrix */}
                    <Reveal delay={0.1}>
                      <div className="p-5 rounded-2xl bg-[#F6F7F4] border border-[#DFE3DF] space-y-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#1D2322]">
                          Targeted Materials & Applications:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5A6361]">
                          {cat.materialsAndApplications.slice(0, 6).map((mat) => (
                            <div key={mat} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#00504A] shrink-0" />
                              <span className="truncate">{mat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Reveal>

                    {/* Verified Commercial Products & TDS Downloads for Division 01 */}
                    {cat.slug === "tile-adhesives" && (
                      <Reveal delay={0.15}>
                        <div className="p-5 rounded-2xl bg-white border border-[#00504A]/30 shadow-xs space-y-3">
                          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#00504A]">
                            <span>Verified Formulations & Technical Data Sheets (TDS)</span>
                            <span className="text-[11px] font-semibold text-[#C87535]">IS 15477 & EN 12004</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                            <a
                              href="/downloads/tds/LIVORA-LIVO-FIX-TDS.pdf"
                              download="LIVORA-LIVO-FIX-TDS.pdf"
                              className="flex items-center justify-between p-3 rounded-lg bg-[#F6F7F4] border border-[#DFE3DF] hover:border-[#00504A] hover:bg-[#00504A] hover:text-white transition-all text-xs font-semibold group"
                            >
                              <div>
                                <span className="block font-bold">LIVO-FIX</span>
                                <span className="text-[10px] text-[#5A6361] group-hover:text-white/80">Type 2T • Class C2TE</span>
                              </div>
                              <Download className="w-4 h-4 text-[#00504A] group-hover:text-white shrink-0 ml-1.5" />
                            </a>
                            <a
                              href="/downloads/tds/LIVORA-LIVO-SET-TDS.pdf"
                              download="LIVORA-LIVO-SET-TDS.pdf"
                              className="flex items-center justify-between p-3 rounded-lg bg-[#F6F7F4] border border-[#DFE3DF] hover:border-[#00504A] hover:bg-[#00504A] hover:text-white transition-all text-xs font-semibold group"
                            >
                              <div>
                                <span className="block font-bold">LIVO-SET</span>
                                <span className="text-[10px] text-[#5A6361] group-hover:text-white/80">Type 2T • Class C2T</span>
                              </div>
                              <Download className="w-4 h-4 text-[#00504A] group-hover:text-white shrink-0 ml-1.5" />
                            </a>
                            <a
                              href="/downloads/tds/LIVORA-LIVO-FLEX-TDS.pdf"
                              download="LIVORA-LIVO-FLEX-TDS.pdf"
                              className="flex items-center justify-between p-3 rounded-lg bg-[#F6F7F4] border border-[#DFE3DF] hover:border-[#00504A] hover:bg-[#00504A] hover:text-white transition-all text-xs font-semibold group"
                            >
                              <div>
                                <span className="block font-bold">LIVO-FLEX</span>
                                <span className="text-[10px] text-[#5A6361] group-hover:text-white/80">Type 3T • C2TE S1</span>
                              </div>
                              <Download className="w-4 h-4 text-[#00504A] group-hover:text-white shrink-0 ml-1.5" />
                            </a>
                          </div>
                        </div>
                      </Reveal>
                    )}

                    {/* Featured Commercial Formulation for Division 03: Tile Epoxy */}
                    {cat.slug === "tile-epoxy" && (
                      <Reveal delay={0.15}>
                        <div className="p-5 rounded-2xl bg-white border border-[#00504A]/30 shadow-xs flex flex-col sm:flex-row items-center gap-5">
                          <div className="relative h-24 w-24 shrink-0 bg-[#F6F7F4] rounded-xl p-2 border border-[#DFE3DF] flex items-center justify-center">
                            <Image
                              src="/images/products/packaging/livora-epo-color-plus.png"
                              alt="LIVORA Epo Color+ 2K Epoxy Grout Bucket"
                              fill
                              className="object-contain"
                              sizes="96px"
                              unoptimized
                            />
                          </div>
                          <div className="flex-1 text-center sm:text-left space-y-1">
                            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                              <span className="font-bold text-sm text-[#1D2322]">LIVORA Epo Color+</span>
                              <span className="px-2 py-0.5 rounded-xs bg-[#00504A] text-white text-[10px] font-bold uppercase">
                                2K Epoxy • Class RG
                              </span>
                              <span className="text-xs font-semibold text-[#C87535]">1 kg bucket set</span>
                            </div>
                            <p className="text-xs text-[#5A6361] leading-relaxed">
                              Two-component reaction resin epoxy grout. 100% stain-proof, water impervious, and anti-bacterial for precision joint finishing in pools, kitchens, and luxury bathrooms.
                            </p>
                          </div>
                          <div className="shrink-0">
                            <Link
                              href="/products/tile-epoxy#commercial-epoxy-products"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#00504A]/10 hover:bg-[#00504A] text-[#00504A] hover:text-white transition-all text-xs font-bold"
                            >
                              <span>Explore Product</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </Reveal>
                    )}

                    <Reveal delay={0.2}>
                      <div className="flex flex-wrap items-center gap-4 pt-2">
                        <Button
                          href={`/products/${cat.slug}`}
                          variant="primary"
                          size="md"
                          className="group"
                        >
                          <span>Detailed Specifications & Guidance</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                          href={`/contact?category=${cat.slug}&type=Product+Information`}
                          variant="outline"
                          size="md"
                        >
                          Enquire for Division
                        </Button>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Interactive Tile Adhesive Quantity Calculator */}
      <AdhesiveCalculator />

      {/* Technical Guidance Section */}
      <section className="py-16 sm:py-24 bg-[#003C3A] text-white">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#C87535]">
                  <Compass className="w-4 h-4" />
                  Technical Guidance Desk
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2 leading-tight">
                  Need Guidance for Your Project?
                </h2>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                  LIVORA&apos;s experienced chemical engineers and technical specialists guide you in selecting the appropriate chemical grades and specification clauses for your project&apos;s exact substrate, format, and climatic conditions.
                </p>
                <div className="pt-2">
                  <Button
                    href="/contact?type=Technical+Guidance"
                    variant="accent"
                    size="lg"
                  >
                    <span>Request Technical Specification Support</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="p-6 rounded-2xl bg-[#00504A]/60 border border-white/15 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#C87535]">
                    Our Technical Scope:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-white/85">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C87535] shrink-0 mt-0.5" />
                      <span>Identifying relevant product types and performance grades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C87535] shrink-0 mt-0.5" />
                      <span>Substrate and tile material compatibility analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C87535] shrink-0 mt-0.5" />
                      <span>Tender specification clauses for architects & consultants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C87535] shrink-0 mt-0.5" />
                      <span>Best-practice application methodology for site applicators</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

