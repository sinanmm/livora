import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { productCategories } from "@/features/products/data/categories";
import { Container } from "@/components/ui/container";
import { ArrowUpRight, ShieldCheck, Mail, Clock } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#003C3A] text-white pt-16 sm:pt-20 pb-12 border-t border-[#00504A]/60">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block" aria-label={siteConfig.name}>
              <div className="relative h-10 w-44" style={{ position: "relative" }}>
                <Image
                  src="/images/brand/livora-logo-white.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              Performance-driven construction chemicals engineered to advance modern building standards through specialised chemistry, technical expertise, and research-led development.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#00504A] border border-white/10 text-xs font-medium text-white/90">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C87535]" />
                {siteConfig.tagline}
              </span>
            </div>

            {/* Social Connection */}
            <div className="pt-2">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-xs bg-white/10 group-hover:bg-[#C87535] transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <span>Follow @livorachemicals on Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Product Divisions */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C87535]">
              Product Divisions
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              {productCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="hover:text-white hover:underline underline-offset-4 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-white font-medium hover:text-[#C87535] transition-colors inline-flex items-center gap-1 text-xs uppercase tracking-wider pt-1"
                >
                  All Product Solutions &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Technical */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C87535]">
              Company & Science
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white hover:underline underline-offset-4 transition-colors"
                >
                  About LIVORA
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="hover:text-white hover:underline underline-offset-4 transition-colors"
                >
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/research-development"
                  className="hover:text-white hover:underline underline-offset-4 transition-colors"
                >
                  R&D & Climatic Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="hover:text-white hover:underline underline-offset-4 transition-colors"
                >
                  Dealer & Partner Program
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white hover:underline underline-offset-4 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Enquiries */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C87535]">
              Enquiries & Support
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C87535] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-white/50 uppercase tracking-wider">Official Email</span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C87535] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-white/50 uppercase tracking-wider">Operational Hours</span>
                  <span>{siteConfig.contact.businessHours}</span>
                </div>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xs bg-[#00504A] hover:bg-white hover:text-[#003C3A] text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-white/20"
                >
                  Contact Technical Desk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved. {siteConfig.tagline}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Data Privacy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Technical Inquiries
            </Link>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              Instagram <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
