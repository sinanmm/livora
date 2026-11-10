import { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface MetadataProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  path = "",
  image = "/images/brand/livora-logo.png",
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline} – ${siteConfig.category}`;

  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${siteConfig.tagline}`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/brand/livora-logo.png`,
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    sameAs: [siteConfig.instagram],
    knowsAbout: [
      "Construction Chemicals",
      "Tile Adhesives",
      "Waterproofing Solutions",
      "Tile Epoxy Solutions",
      "Stone and Marble Chemical Solutions",
    ],
  };
}

