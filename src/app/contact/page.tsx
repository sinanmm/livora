import { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/features/contact/components/contact-form";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";
import { Reveal } from "@/components/motion/reveal";
import {
  Mail,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  ArrowUpRight,
  Compass,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";

export const metadata: Metadata = constructMetadata({
  title: "Contact & Technical Enquiries | LIVORA CHEMICALS",
  description:
    "Connect with LIVORA CHEMICALS for technical specification assistance, product enquiries, project guidance, and business partnerships.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#F6F7F4]">
      {/* Header */}
      <Container size="wide" className="mb-14 sm:mb-20">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#00504A]/10 border border-[#00504A]/20 text-xs font-bold uppercase tracking-wider text-[#00504A] mb-4">
              <Mail className="w-4 h-4 text-[#C87535]" />
              Direct Communication Desk
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1D2322] leading-[1.08]">
              Connect With <span className="text-[#00504A]">LIVORA CHEMICALS.</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-[#5A6361] leading-relaxed font-normal">
              Our technical desk supports architects, engineers, project managers, and dealers with reliable product guidance and commercial cooperation.
            </p>
          </div>
        </Reveal>
      </Container>

      {/* Main Grid: Form + Verified Contact Cards */}
      <section className="bg-white py-16 sm:py-24 border-y border-[#DFE3DF]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <Suspense fallback={<div className="p-8 text-center text-sm text-[#5A6361]">Loading enquiry form...</div>}>
                  <ContactForm />
                </Suspense>
              </Reveal>
            </div>

            {/* Right Column: Contact Cards & Information Notice */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal delay={0.1}>
                <div className="p-8 rounded-3xl bg-[#003C3A] text-white shadow-xl border border-white/10 space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C87535] block">
                      Verified Contact Information
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      Direct Inquiries
                    </h3>
                  </div>

                  <div className="space-y-5 text-sm text-white/90">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#C87535] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-xs uppercase tracking-wider text-white/50">
                          Official Corporate Email
                        </strong>
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="hover:underline font-medium text-white"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#C87535] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-xs uppercase tracking-wider text-white/50">
                          Technical Desk Hours
                        </strong>
                        <span>{siteConfig.contact.businessHours}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#C87535] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-xs uppercase tracking-wider text-white/50">
                          Direct Telephone Lines
                        </strong>
                        <span className="text-xs text-white/70">
                          {siteConfig.contact.phonePendingNotice}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#C87535] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-xs uppercase tracking-wider text-white/50">
                          Registered Coordinates
                        </strong>
                        <span className="text-xs text-white/70">
                          {siteConfig.contact.addressPendingNotice}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={siteConfig.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#C87535] transition-colors"
                    >
                      <InstagramIcon className="w-4 h-4 text-[#C87535]" />
                      <span>Official Instagram @livorachemicals</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Technical Advice Policy Box */}
              <Reveal delay={0.2}>
                <div className="p-6 rounded-2xl bg-[#F6F7F4] border border-[#DFE3DF] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00504A]">
                    <ShieldCheck className="w-4 h-4 text-[#00504A]" />
                    <span>Integrity & Verification Policy</span>
                  </div>
                  <p className="text-xs text-[#5A6361] leading-relaxed">
                    LIVORA provides chemical specification advice based strictly on validated substrate characteristics and documented project parameters. We do not provide automatic fictional engineering calculations or unverified promises.
                  </p>
                </div>
              </Reveal>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
