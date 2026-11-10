export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export const mainNav: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Products",
    href: "/products",
    children: [
      {
        title: "Tile Adhesive Solutions",
        href: "/products/tile-adhesives",
        description: "Bonding solutions for ceramic, vitrified, porcelain and large-format tiles.",
      },
      {
        title: "Waterproofing Solutions",
        href: "/products/waterproofing",
        description: "Specialised moisture protection systems for roofs, terraces and wet areas.",
      },
      {
        title: "Tile Epoxy Solutions",
        href: "/products/tile-epoxy",
        description: "High-performance precision tile joint finishing and chemical resistance.",
      },
      {
        title: "Stone & Marble Solutions",
        href: "/products/stone-marble",
        description: "Engineered bonding, protection and reinforcement for natural stone.",
      },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
  },
  {
    title: "R&D",
    href: "/research-development",
  },
  {
    title: "Partners",
    href: "/partners",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

