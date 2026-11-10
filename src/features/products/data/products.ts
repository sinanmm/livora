import { Product } from "../types";

export interface TileAdhesiveProduct extends Product {
  standardIndian: string;
  standardEuropean: string;
  gradeBadge: string;
  tensileAdhesion: string;
  openTime: string;
  deformability?: string;
  maxTileSize: string;
  recommendedUse: string;
  packSize: string;
  packagingImage: string;
  tdsDownloadUrl: string;
  mixingRatio: string;
  coverage: string;
}

export const tileAdhesivesProducts: TileAdhesiveProduct[] = [
  {
    id: "livo-fix",
    slug: "livo-fix",
    name: "LIVO-FIX",
    category: "tile-adhesives",
    description:
      "Polymer-modified, cement-based premium tile adhesive for fixing ceramic, porcelain, vitrified tiles, and natural stone on interior floors and walls. Features extended open time (E) and slip resistance (T) for vertical fixing and tile-on-tile work.",
    standardIndian: "IS 15477:2019 Type 2T",
    standardEuropean: "EN 12004 Class C2TE",
    gradeBadge: "Type 2T • Class C2TE",
    tensileAdhesion: "≥ 1.32 N/mm² (28 days)",
    openTime: "Min 30 mins (35 mins adjustability)",
    maxTileSize: "Up to 1800 × 1200 mm (6 × 4 ft)",
    recommendedUse: "Interior floors & walls, wet and dry areas, tile-on-tile renovations",
    packSize: "20 kg bag",
    packagingImage: "/images/products/packaging/livora-livo-fix-official.png",
    tdsDownloadUrl: "/downloads/tds/LIVORA-LIVO-FIX-TDS.pdf",
    images: ["/images/products/packaging/livora-livo-fix-official.png"],
    mixingRatio: "1 : 0.25–0.28 (grey) / 1 : 0.26–0.29 (white) (~4–5 L water per 20 kg bag)",
    coverage: "Approx. 5–6 m² per 20 kg bag at 3 mm thickness (6×6 mm notch)",
    applications: [
      "Ceramic, porcelain, vitrified tiles, and natural stone",
      "Interior floors and walls in domestic and commercial spaces",
      "Domestic and commercial wet areas (bathrooms, kitchens)",
      "Tile-on-tile installation over existing sound finishes",
    ],
    keyFeatures: [
      "High bond strength: Tensile adhesion ≥ 1.32 N/mm² at 28 days",
      "Extended open time (E): Minimum 30 mins open time with ~35 mins adjustability",
      "Slip & water resistant (T): Slip ≤ 0.5 mm for vertical installations",
      "Dual colour availability: Grey and White variants for light stone",
    ],
    technicalSpecifications: [
      { property: "Standard Compliance (Indian)", value: "IS 15477:2019 Type 2T" },
      { property: "Standard Compliance (European)", value: "EN 12004 Class C2TE" },
      { property: "Tensile Adhesion (28 Days)", value: "≥ 1.35 N/mm² (Target: ≥ 1.0 N/mm²)" },
      { property: "Tensile Adhesion (Water Immersion)", value: "≥ 1.10 N/mm²" },
      { property: "Tensile Adhesion (Heat Ageing)", value: "≥ 1.18 N/mm²" },
      { property: "Tensile Adhesion (Freeze-Thaw)", value: "≥ 1.18 N/mm²" },
      { property: "Shear Adhesion (Dry Condition)", value: "≥ 1.61 N/mm² (Target: ≥ 1.25 N/mm²)" },
      { property: "Shear Adhesion (Wet Condition)", value: "≥ 1.58 N/mm²" },
      { property: "Shear Adhesion (Heat Ageing)", value: "≥ 1.62 N/mm²" },
      { property: "Slip Resistance (T)", value: "< 0.5 mm" },
      { property: "Extended Open Time (E)", value: "≥ 0.5 N/mm² at 30 minutes" },
      { property: "Pot Life", value: "Approx. 120 minutes" },
      { property: "Application Temperature", value: "5 °C to 35 °C" },
      { property: "Adhesive Bed Thickness", value: "3 – 12 mm" },
      { property: "Grouting / Setting Time", value: "24 hours" },
      { property: "VOC Content", value: "< 1.2 g/kg (EPA Method 24)" },
    ],
  },
  {
    id: "livo-set",
    slug: "livo-set",
    name: "LIVO-SET",
    category: "tile-adhesives",
    description:
      "Cement-based Type 2T tile adhesive for fixing ceramic and vitrified tiles on suitable cement-based surfaces. Formulated to give reliable adhesion with reduced slip (T) during interior floor, wall, and domestic wet-area installations.",
    standardIndian: "IS 15477:2019 Type 2T",
    standardEuropean: "EN 12004 Class C2T",
    gradeBadge: "Type 2T • Class C2T",
    tensileAdhesion: "≥ 1.0 N/mm² (28 days)",
    openTime: "Min 20 mins (35 mins adjustability)",
    maxTileSize: "Floors: 6 × 4 ft (~1800 × 1200 mm) | Walls: 4 × 2 ft (~1200 × 600 mm)",
    recommendedUse: "Interior living floors, walls, domestic wet areas on cement screeds & renders",
    packSize: "20 kg bag",
    packagingImage: "/images/products/packaging/livora-livo-set-official.png",
    tdsDownloadUrl: "/downloads/tds/LIVORA-LIVO-SET-TDS.pdf",
    images: ["/images/products/packaging/livora-livo-set-official.png"],
    mixingRatio: "4–5 litres of clean water per 20 kg bag",
    coverage: "Depends on substrate, tile back profile and trowel notch",
    applications: [
      "Ceramic and vitrified tiles on cement-based surfaces",
      "Interior floors up to 6 ft × 4 ft format",
      "Interior walls up to 4 ft × 2 ft format",
      "Interior domestic wet areas with proper waterproofing",
    ],
    keyFeatures: [
      "Improved bonding: Reliable adhesion for ceramic and vitrified tiles",
      "Reduced slip (T): Formulated for stable vertical wall installations",
      "Floors, walls and wet areas: Versatile residential and commercial performance",
      "Professional fixing: Smooth trowel workability on cement screeds",
    ],
    technicalSpecifications: [
      { property: "Standard Compliance (Indian)", value: "IS 15477:2019 Type 2T" },
      { property: "Standard Compliance (European)", value: "EN 12004 Class C2T" },
      { property: "Tensile Adhesion (Dry Condition)", value: "≥ 1.0 N/mm²" },
      { property: "Tensile Adhesion (Wet Condition)", value: "≥ 1.0 N/mm²" },
      { property: "Shear Adhesion (Dry Condition)", value: "≥ 1.25 N/mm²" },
      { property: "Shear Adhesion (Wet Condition)", value: "≥ 1.0 N/mm²" },
      { property: "Shear Adhesion (Heat Ageing)", value: "≥ 1.0 N/mm²" },
      { property: "Slip Resistance (T)", value: "≤ 0.5 mm" },
      { property: "Open Time", value: "Minimum 20 minutes (Open-time adhesion ≥ 0.5 N/mm²)" },
      { property: "Adjustability Time", value: "Approx. 35 minutes" },
      { property: "Pot Life", value: "Approx. 120 minutes" },
      { property: "Base Material", value: "Cement-based, polymer-modified formulation" },
      { property: "Colour", value: "Grey" },
      { property: "Pack Size", value: "20 kg bag" },
    ],
  },
  {
    id: "livo-flex",
    slug: "livo-flex",
    name: "LIVO-FLEX",
    category: "tile-adhesives",
    description:
      "Premium flexible, polymer-modified cement-based tile adhesive with S1 deformability. Engineered for demanding interior and exterior installations, large-format porcelain slabs, facades, glass mosaics, and swimming pools subject to thermal movement.",
    standardIndian: "IS 15477:2019 Type 3T",
    standardEuropean: "EN 12004 Class C2TE S1",
    gradeBadge: "Type 3T • Class C2TE S1 (Flexible)",
    tensileAdhesion: "≥ 1.81 N/mm² (28 days)",
    openTime: "Min 30 mins (35 mins adjustability)",
    deformability: "S1 Deformable (≥ 2.5 mm transverse deflection)",
    maxTileSize: "Mega-format porcelain panels, large stone slabs, glass mosaics",
    recommendedUse: "Exterior facades, swimming pools, washrooms, high-movement substrates, tile-on-tile",
    packSize: "20 kg bag",
    packagingImage: "/images/products/packaging/livora-livo-flex-official.png",
    tdsDownloadUrl: "/downloads/tds/LIVORA-LIVO-FLEX-TDS.pdf",
    images: ["/images/products/packaging/livora-livo-flex-official.png"],
    mixingRatio: "1 : 0.28 (grey) / 1 : 0.32 (white) (~4–5 L water per 20 kg bag)",
    coverage: "Approx. 5–6 m² per 20 kg bag at 3 mm thickness (6×6 mm notch)",
    applications: [
      "Ceramic, vitrified, glass mosaic, precast terrazzo, and natural stone",
      "Exterior floors, balconies, terraces, and building facades",
      "Continuous immersion zones: Swimming pools and commercial washrooms",
      "Tile-on-tile installations over sound existing tiles",
    ],
    keyFeatures: [
      "Exceptional bond strength: Tensile adhesion ≥ 1.81 N/mm² at 28 days",
      "S1 Deformable: Transverse deflection ≥ 2.5 mm absorbs thermal and structural movement",
      "Extended open time (E): Min 30 mins open time with ~35 mins adjustability",
      "Ultra-low slip (T): Verified slip of only 0.18 mm on vertical facades",
    ],
    technicalSpecifications: [
      { property: "Standard Compliance (Indian)", value: "IS 15477:2019 Type 3T" },
      { property: "Standard Compliance (European)", value: "EN 12004 & ISO 13007 Class C2TE S1" },
      { property: "Tensile Adhesion (28 Days)", value: "≥ 1.81 N/mm² (Standard req: ≥ 1.0 N/mm²)" },
      { property: "Tensile Adhesion (Water Immersion)", value: "≥ 1.10 N/mm²" },
      { property: "Tensile Adhesion (Heat Ageing)", value: "≥ 1.31 N/mm²" },
      { property: "Tensile Adhesion (Freeze-Thaw)", value: "≥ 1.20 N/mm²" },
      { property: "Shear Adhesion (Dry Condition)", value: "≥ 1.97 N/mm² (Target: ≥ 1.5 N/mm²)" },
      { property: "Shear Adhesion (Wet Condition)", value: "≥ 1.70 N/mm²" },
      { property: "Shear Adhesion (Heat Ageing)", value: "≥ 1.98 N/mm²" },
      { property: "Transverse Deformation (S1)", value: "≥ 2.5 mm (deformable class)" },
      { property: "Slip Resistance (T)", value: "0.18 mm (ultra-low vertical slip)" },
      { property: "Extended Open Time (E)", value: "≥ 0.60 N/mm² at 30 minutes" },
      { property: "Pot Life", value: "Approx. 120 minutes" },
      { property: "Bed Thickness", value: "Up to 12 mm" },
      { property: "Grouting Time", value: "24 hours" },
      { property: "VOC Content", value: "< 2 g/kg (EPA Method 24)" },
    ],
  },
];

export interface TileEpoxyProduct extends Product {
  standardCompliance: string;
  gradeBadge: string;
  packSize: string;
  packagingImage: string;
  potLife: string;
  cureTime: string;
  jointWidth: string;
  chemicalResistance: string;
  compressiveStrength: string;
  waterAbsorption: string;
}

export const tileEpoxyProducts: TileEpoxyProduct[] = [
  {
    id: "epo-color-plus",
    slug: "epo-color-plus",
    name: "LIVORA Epo Color+",
    category: "tile-epoxy",
    description:
      "Advanced two-component (2K) reaction-resin epoxy tile grout engineered for impervious joint finishing, complete stain resistance, and high chemical tolerance. Designed for vitrified tiles, marble, granite, glass mosaics, and large-format porcelain in residential, commercial, and hygiene-critical environments.",
    standardCompliance: "EN 13888 Class RG • IS 15477",
    gradeBadge: "2K Epoxy • Class RG",
    packSize: "1 kg bucket set (Part A + Part B)",
    packagingImage: "/images/products/packaging/livora-epo-color-plus.png",
    images: ["/images/products/packaging/livora-epo-color-plus.png"],
    potLife: "Approx. 45–60 minutes at 27°C",
    cureTime: "Light foot traffic: 24 hours | Full chemical cure: 7 days",
    jointWidth: "1 mm to 12 mm",
    chemicalResistance: "High resistance to household acids, chlorine, detergents & grease",
    compressiveStrength: "≥ 45 N/mm² (28 days)",
    waterAbsorption: "Zero (Impervious / < 0.05%)",
    applications: [
      "Luxury residential bathrooms, walk-in showers & designer kitchens",
      "Swimming pools, water features & continuous water immersion zones",
      "Commercial kitchens, restaurants, food processing & bottling plants",
      "Hospitals, cleanrooms, pharmaceutical labs & hygiene-critical floors",
      "Stain-sensitive Italian marble, imported granite & vitrified tiling",
    ],
    keyFeatures: [
      "100% Stain-Proof & Water Impervious: Zero absorption of oil, coffee, wine, acids, or grease",
      "Anti-Bacterial & Anti-Fungal: Eliminates dark mold, mildew, and microbial proliferation in joints",
      "Non-Cracking & Non-Shrinking: Retains high dimensional stability and flexural bond strength",
      "Uniform Color Consistency: Premium UV-stable pigments resist fading, yellowing, and efflorescence",
    ],
    technicalSpecifications: [
      { property: "Standard Classification", value: "EN 13888 Class RG (Reaction Resin Grout) • IS 15477" },
      { property: "Pack Net Weight", value: "1 kg bucket set (Resin + Hardener)" },
      { property: "Mixing Ratio", value: "Pre-measured two-part system (Part A : Part B)" },
      { property: "Joint Width Suitability", value: "1 mm to 12 mm" },
      { property: "Pot Life (Working Time)", value: "45–60 minutes at 27 °C" },
      { property: "Initial Trafficable Time", value: "24 hours for light foot traffic" },
      { property: "Full Chemical Cure", value: "7 days" },
      { property: "Compressive Strength (28d)", value: "≥ 45.0 N/mm²" },
      { property: "Flexural Strength (28d)", value: "≥ 30.0 N/mm²" },
      { property: "Water Absorption", value: "Nil (< 0.05% after 240 mins)" },
      { property: "Temperature Resistance", value: "-10 °C to +100 °C" },
      { property: "Cleanability", value: "Water wash with clean sponge during pot life window" },
    ],
  },
];


