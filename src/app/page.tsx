import { Hero } from "@/features/home/components/hero";
import { BrandIntro } from "@/features/home/components/brand-intro";
import { ProductShowcase } from "@/features/home/components/product-showcase";
import { TechnicalDifferentiation } from "@/features/home/components/technical-differentiation";
import { MascotShowcase } from "@/features/home/components/mascot-showcase";
import { ApplicationsGrid } from "@/features/home/components/applications-grid";
import { ClimaticResearch } from "@/features/home/components/climatic-research";
import { IndustrySolutions } from "@/features/home/components/industry-solutions";
import { PartnershipsHighlight } from "@/features/home/components/partnerships-highlight";
import { InstagramSection } from "@/features/home/components/instagram-section";
import { FinalCta } from "@/features/home/components/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <ProductShowcase />
      <TechnicalDifferentiation />
      <MascotShowcase />
      <ApplicationsGrid />
      <ClimaticResearch />
      <IndustrySolutions />
      <PartnershipsHighlight />
      <InstagramSection />
      <FinalCta />
    </>
  );
}
