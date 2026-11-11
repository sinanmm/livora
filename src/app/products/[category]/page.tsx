import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  productCategories,
  getCategoryBySlug,
} from "@/features/products/data/categories";
import { TileAdhesiveProducts } from "@/features/products/components/tile-adhesive-products";
import { TileEpoxyProducts } from "@/features/products/components/tile-epoxy-products";
import { constructMetadata } from "@/lib/seo";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Sliders,
  Check,
  AlertCircle,
  HardHat,
  Compass,
} from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return productCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return constructMetadata({
      title: "Category Not Found",
    });
  }

  return constructMetadata({
    title: category.seoTitle,
    description: category.seoDescription,
    path: `/products/${category.slug}`,
    image: category.heroImage,
  });
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-20 bg-[#F6F7F4]">
      {/* Category Hero */}
      <Container size="wide" className="mb-14 sm:mb-20">
        <Reveal>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00504A] mb-4">
            <Link href="/products" className="hover:underline">
              Product Divisions
            </Link>
            <span>/</span>
            <span className="text-[#5A6361]">{category.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1D2322] leading-[1.08]">
                {category.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#00504A]">
                {category.tagline}
              </p>
              <p className="text-base sm:text-lg text-[#5A6361] leading-relaxed">
                {category.detailedOverview}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                {category.slug === "tile-adhesives" ? (
                  <>
                    <Button
                      href="#commercial-products"
                      variant="primary"
                      size="lg"
                      className="group"
                    >
                      <span>Explore LIVO-FIX, LIVO-SET & LIVO-FLEX</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      href={`/contact?category=${category.slug}&type=Product+Information`}
                      variant="outline"
                      size="lg"
                    >
                      Enquire for Specifications
                    </Button>
                  </>
                ) : category.slug === "tile-epoxy" ? (
                  <>
                    <Button
                      href="#commercial-epoxy-products"
                      variant="primary"
                      size="lg"
                      className="group"
                    >
                      <span>Explore LIVORA Epo Color+ (2K)</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      href={`/contact?category=tile-epoxy&product=Epo+Color+Plus&type=Sample+Kit`}
                      variant="outline"
                      size="lg"
                    >
                      Request Shade Card
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      href={`/contact?category=${category.slug}&type=Product+Information`}
                      variant="primary"
                      size="lg"
                      className="group"
                    >
                      <span>Enquire About {category.shortTitle}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      href={`/contact?category=${category.slug}&type=Technical+Guidance`}
                      variant="outline"
                      size="lg"
                    >
                      Request Technical Guidance
                    </Button>
                  </>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div
                className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-[#DFE3DF] bg-[#EAECE8]"
                style={{ position: "relative" }}
              >
                <Image
                  src={category.heroImage}
                  alt={category.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Verified Commercial Products & TDS Downloads for Tile Adhesives */}
      {category.slug === "tile-adhesives" && <TileAdhesiveProducts />}

      {/* Verified Commercial Formulation & Shade Card for Tile Epoxy */}
      {category.slug === "tile-epoxy" && <TileEpoxyProducts />}

      {/* Technical Considerations */}
      <section className="bg-white py-16 sm:py-24 border-y border-[#DFE3DF]">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Formulation Science"
              title="Key Technical Considerations"
              description="Our chemistry is tuned to address structural mechanics, thermal movement, and long-term durability requirements."
              className="mb-12"
            />
          </Reveal>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {category.technicalConsiderations.map((item, idx) => (
              <StaggerItem key={item.title} hoverLift={true} className="h-full">
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-[#F6F7F4] border border-[#DFE3DF] hover:border-[#00504A] hover:bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C87535]">
                      Factor 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-[#1D2322]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#5A6361] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Materials, Applications & Substrates */}
      <section className="py-16 sm:py-24 bg-[#F6F7F4] border-b border-[#DFE3DF]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Suitable Materials & Applications */}
            <Reveal className="h-full">
              <div className="h-full p-8 rounded-3xl bg-white border border-[#DFE3DF] shadow-md space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00504A]/10 text-[#00504A] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1D2322]">
                      Targeted Materials & Assemblies
                    </h3>
                    <p className="text-xs text-[#5A6361]">Verified application conditions</p>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-[#1D2322]">
                  {category.materialsAndApplications.map((mat) => (
                    <li key={mat} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#00504A] shrink-0 mt-0.5" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Substrate Compatibility */}
            <Reveal delay={0.1} className="h-full">
              <div className="h-full p-8 rounded-3xl bg-white border border-[#DFE3DF] shadow-md space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00504A]/10 text-[#00504A] flex items-center justify-center">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1D2322]">
                      Substrate Compatibility
                    </h3>
                    <p className="text-xs text-[#5A6361]">Evaluated base surfaces</p>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-[#1D2322]">
                  {category.substrateSuitability.map((sub) => (
                    <li key={sub} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#00504A] shrink-0 mt-0.5" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* On-Site Application Best Practices */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#DFE3DF]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <Reveal>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00504A]">
                  <HardHat className="w-4 h-4 text-[#C87535]" />
                  Field Methodology
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2322]">
                  Application Best Practices
                </h2>
                <p className="text-sm sm:text-base text-[#5A6361] leading-relaxed">
                  Proper substrate preparation, accurate mixing ratios, and verified tools are crucial to realizing the full engineered performance of LIVORA chemical systems.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="space-y-3">
                  {category.applicationPractices.map((practice, index) => (
                    <div
                      key={practice}
                      className="p-4 rounded-xl bg-[#F6F7F4] border border-[#DFE3DF] flex items-start gap-3"
                    >
                      <span className="font-bold text-sm text-[#00504A] shrink-0 mt-0.5">
                        0{index + 1}.
                      </span>
                      <p className="text-xs sm:text-sm text-[#1D2322] leading-relaxed">
                        {practice}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Commercial SKU & Technical Data Notice */}
      <section className="py-12 bg-[#F6F7F4]">
        <Container size="wide">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DFE3DF] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#00504A]/10 text-[#00504A] shrink-0">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-[#1D2322]">
                  {category.slug === "tile-adhesives"
                    ? "Certified Technical Data Sheets Available for Download"
                    : "Technical Data Sheets (TDS) & Specific Product Grades"}
                </h4>
                <p className="text-xs sm:text-sm text-[#5A6361] max-w-2xl leading-relaxed">
                  {category.slug === "tile-adhesives"
                    ? "Official technical data sheets for LIVO-FIX, LIVO-SET, and LIVO-FLEX are published above. For tender specifications, project test reports, or safety data sheets, connect with our technical desk."
                    : "LIVORA maintains a strict policy of only publishing certified technical specifications. Direct grade specifications, packaging variants, and SDS documentation are available directly upon commercial project consultation."}
                </p>
              </div>
            </div>

            <Button
              href={`/contact?category=${category.slug}&type=Product+Information`}
              variant="primary"
              size="md"
              className="shrink-0"
            >
              Enquire with Technical Desk
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

