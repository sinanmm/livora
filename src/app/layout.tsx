import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { constructMetadata, generateOrganizationSchema } from "@/lib/seo";

const spaceGrotesk = localFont({
  src: "../../public/fonts/SpaceGrotesk.woff2",
  variable: "--font-heading",
  display: "swap",
  weight: "500 700",
});

const dmSans = localFont({
  src: "../../public/fonts/DMSans.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "400 700",
});

export const viewport: Viewport = {
  themeColor: "#00504A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F6F7F4] text-[#1D2322]">
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
