export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  url: string;
  description: string;
  instagram: string;
  contact: {
    email: string;
    phonePendingNotice: string;
    addressPendingNotice: string;
    businessHours: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "LIVORA CHEMICALS",
  shortName: "LIVORA",
  tagline: "Smart Solutions. Stronger Structures.",
  category: "Advanced Construction Chemical Solutions",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://livorachemicals.com",
  description:
    "LIVORA CHEMICALS is a performance-driven construction chemicals brand committed to advancing modern construction through specialised chemical solutions, technical expertise, and research-led product development.",
  instagram: "https://www.instagram.com/livorachemicals/",
  contact: {
    email: "livorachemicals@gmail.com",
    phonePendingNotice: "Direct corporate phone lines will be published upon commercial rollout.",
    addressPendingNotice: "Registered manufacturing and regional office coordinates pending commercial publication.",
    businessHours: "Monday to Saturday, 9:00 AM – 6:00 PM IST",
  },
};

