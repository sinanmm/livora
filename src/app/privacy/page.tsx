import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";
import { Reveal } from "@/components/motion/reveal";
import { ShieldCheck, Lock, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy | Enquiry Data & Transparency",
  description:
    "LIVORA CHEMICALS' privacy policy explains how contact and partnership enquiry information is handled, secured, and processed with complete transparency.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#F6F7F4]">
      {/* Header */}
      <Container size="narrow" className="mb-14">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#00504A]/10 border border-[#00504A]/20 text-xs font-bold uppercase tracking-wider text-[#00504A] mb-4">
            <ShieldCheck className="w-4 h-4 text-[#C87535]" />
            Data Protection & Transparency
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1D2322] leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#5A6361] leading-relaxed">
            This policy outlines how LIVORA CHEMICALS collects, uses, and safeguards information submitted through our official website and communication channels.
          </p>
          <div className="text-xs text-[#5A6361] mt-2">
            Last Updated: November 2026 • Effective Date: November 2026
          </div>
        </Reveal>
      </Container>

      {/* Main Content */}
      <section className="bg-white py-14 sm:py-20 border-y border-[#DFE3DF]">
        <Container size="narrow">
          <div className="space-y-10 text-sm sm:text-base text-[#1D2322] leading-relaxed">
            
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D2322]">
                1. Information We Collect
              </h2>
              <p className="text-[#5A6361]">
                LIVORA CHEMICALS collects information exclusively when you voluntarily submit an enquiry through our General Contact Form or Commercial Partnership Form. This information includes:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#1D2322] list-disc list-inside pl-2">
                <li>Personal identity: Full name and title</li>
                <li>Commercial identity: Company or business name, and business type</li>
                <li>Contact details: Email address and phone number</li>
                <li>Geographic location: City and State</li>
                <li>Enquiry context: Selected product division and project messages</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D2322]">
                2. Purpose of Data Processing
              </h2>
              <p className="text-[#5A6361]">
                We use the submitted information solely for genuine business purposes:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#1D2322] list-disc list-inside pl-2">
                <li>Responding directly to your product, technical, or commercial enquiries</li>
                <li>Providing technical specification advice for your architectural or construction project</li>
                <li>Evaluating potential dealer, distributor, or applicator partnerships</li>
                <li>Internal record keeping of commercial conversations</li>
              </ul>
              <p className="text-[#5A6361]">
                We do not sell, rent, monetize, or trade your personal or commercial contact information to any third-party marketing companies.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D2322]">
                3. Technical Infrastructure & Email Delivery
              </h2>
              <p className="text-[#5A6361]">
                Form transmissions on our website are protected by TLS/SSL encryption in transit. When configured, enquiries are delivered through secure server-side transactional email relays (such as Resend) without exposing private API credentials or user data in browser client code.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D2322]">
                4. Cookies and Analytical Tracking
              </h2>
              <p className="text-[#5A6361]">
                This website does not run intrusive invasive profiling trackers or advertising cookie networks. Essential session cookies may be utilized by the hosting server solely for routing security and performance stability.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D2322]">
                5. Data Retention and Your Rights
              </h2>
              <p className="text-[#5A6361]">
                You have the right to request access to the information you submitted, request correction of any inaccurate contact details, or request that your contact record be deleted from our enquiry registers at any time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F7F4] border border-[#DFE3DF] space-y-2">
              <h3 className="text-sm font-bold text-[#1D2322]">
                Contacting Our Data Privacy Desk
              </h3>
              <p className="text-xs text-[#5A6361]">
                If you have questions regarding our privacy practices or wish to update your submitted information, please reach out directly:
              </p>
              <div className="text-xs font-semibold text-[#00504A]">
                Email: {siteConfig.contact.email}
              </div>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}

