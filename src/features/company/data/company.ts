export interface ValueItem {
  title: string;
  shortDesc: string;
  description: string;
}

export interface ClimateRegion {
  id: string;
  name: string;
  states: string;
  climateProfile: string;
  challenges: string[];
  formulationFocus: string;
}

export interface AudienceSolution {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  keyBenefits: string[];
  ctaLabel: string;
  ctaHref: string;
}

export const companyProfile = {
  executiveSummary:
    "LIVORA CHEMICALS advances modern construction standards through specialised chemical solutions, technical expertise, and research-led development. Its portfolio covers tile adhesives, waterproofing, tile epoxy, and specialised stone and marble solutions. Its technical approach addresses surface preparation, moisture protection, professional installation, and material compatibility. The brand draws on experienced professionals, chemical engineers with decades of industry experience, and specialised R&D expertise. Its development approach considers climatic and environmental conditions across different regions of India. Livora aims to provide dependable application-specific solutions and become a trusted technical partner for the construction industry.",

  vision:
    "To establish Livora Chemicals as a respected and internationally recognised construction chemicals brand, distinguished by technical excellence, product innovation, consistent quality, and a comprehensive understanding of modern construction requirements.",

  visionNote:
    "The company aspires to empower professionals, enhance material performance, and contribute to durable, high-quality built environments.",

  mission:
    "To develop and deliver dependable construction chemical solutions through engineering expertise, specialised research and development, and an uncompromising focus on product performance.",

  missionCommitments: [
    {
      number: "01",
      title: "Technically Appropriate Solutions",
      description: "Provide technically appropriate solutions for diverse construction applications.",
    },
    {
      number: "02",
      title: "Research & Engineering Knowledge",
      description: "Advance product development through specialised research and engineering knowledge.",
    },
    {
      number: "03",
      title: "Grade & Specification Mastery",
      description: "Maintain strong knowledge of product grades, specifications, and application requirements.",
    },
    {
      number: "04",
      title: "Informed Technical Guidance",
      description: "Support construction professionals with reliable solutions and informed technical guidance.",
    },
    {
      number: "05",
      title: "Enduring Stakeholder Relationships",
      description: "Build enduring relationships with customers, channel partners, and industry stakeholders.",
    },
    {
      number: "06",
      title: "Continuous Quality Improvement",
      description: "Pursue continuous improvement in quality, operational efficiency, and customer satisfaction.",
    },
  ],

  coreValues: [
    {
      title: "Technical Excellence",
      shortDesc: "Material science & engineering precision",
      description:
        "An understanding of materials, chemistry, engineering requirements, and professional application standards.",
    },
    {
      title: "Innovation Through Research",
      shortDesc: "Application-oriented development",
      description:
        "Ongoing attention to evolving construction practices, environmental conditions, and application challenges.",
    },
    {
      title: "Quality and Reliability",
      shortDesc: "Consistent construction outcomes",
      description:
        "Attention to product specifications, performance considerations, consistency, and dependable construction outcomes.",
    },
    {
      title: "Partnership and Trust",
      shortDesc: "Transparent collaboration",
      description:
        "Transparent relationships, relevant technical support, and lasting collaboration with industry stakeholders.",
    },
  ],

  strategicOutlook: {
    overview:
      "LIVORA seeks to build a strong, sustainable market presence through product development, technical advancement, and professional relationships. The company recognises growing demand for specialised chemical technologies, consistent quality, application-specific solutions, and an understanding of modern construction materials.",
    pillars: [
      "Strengthening our core product portfolio across all four specialised chemical divisions",
      "Advancing research and development tailored to real-world substrate and regional climatic variations",
      "Enhancing technical advisory capability for on-site engineering challenges",
      "Building strategic distribution networks with trusted regional dealers and channel partners",
      "Supporting industry partnerships with architects, consultants, and trade professionals",
      "Expanding domestic market presence across high-growth infrastructure corridors",
      "Exploring disciplined future international commercial opportunities",
      "Maintaining responsible, sustainable business and manufacturing development",
    ],
  },

  technicalGuidanceServices: [
    "Identifying relevant product types and appropriate performance grades",
    "Application-specific product selection tailored to tile dimensions and substrate conditions",
    "Technical specification guidance for architectural and structural tender documents",
    "Understanding substrate compatibility (concrete, screeds, masonry, pre-existing tiles)",
    "Understanding material compatibility (porcelain, vitrified, quartz, marble, natural stone)",
    "Comprehensive product documentation, application methodology, and storage guidelines",
    "Appropriate application information and best-practice guidance for field teams",
  ],
};

export const climaticRegions: ClimateRegion[] = [
  {
    id: "north",
    name: "North India",
    states: "Delhi NCR, Punjab, Haryana, Rajasthan, Uttar Pradesh, Himachal, J&K",
    climateProfile:
      "Extreme seasonal temperature variations ranging from freezing winter lows to blistering dry summer highs exceeding 45°C.",
    challenges: [
      "Rapid moisture loss and surface skinning in high summer heat",
      "Severe freeze-thaw thermal contraction and expansion cycles",
      "Differential thermal expansion between tiles and structural concrete",
    ],
    formulationFocus:
      "Extended open times, thermal deformability polymers (S1/S2 grade suitability), and controlled hydration retarders.",
  },
  {
    id: "south",
    name: "South India",
    states: "Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Telangana",
    climateProfile:
      "Sustained high humidity, coastal saline atmospheres, and year-round tropical temperatures.",
    challenges: [
      "Airborne chloride and salt penetration inducing rebar corrosion",
      "Persistent dampness and surface fungal growth in wet zones",
      "Moisture vapour transmission through porous foundations",
    ],
    formulationFocus:
      "Dense hydrophobic barriers, chloride-resistant polymer matrices, and anti-efflorescence additives.",
  },
  {
    id: "east",
    name: "East & North-East India",
    states: "West Bengal, Odisha, Bihar, Jharkhand, Assam & NE States",
    climateProfile:
      "Prolonged torrential monsoon deluges, persistent ambient moisture, and high water tables.",
    challenges: [
      "Sub-structure hydrostatic water ingress during flood seasons",
      "Adhesion failure on damp or saturated masonry substrates",
      "Efflorescence leaching through tile joint matrices",
    ],
    formulationFocus:
      "Impervious liquid and cementitious membrane systems, water-tolerant bonding agents, and dense epoxy grouts.",
  },
  {
    id: "west",
    name: "West India",
    states: "Maharashtra, Gujarat, Goa",
    climateProfile:
      "Intense coastal humidity combined with arid interior dry heat and heavy seasonal coastal downpours.",
    challenges: [
      "High wind-driven rain against high-rise vertical facades",
      "Saline coastal winds challenging external cladding adhesives",
      "Rapid screed drying leading to plastic shrinkage cracks",
    ],
    formulationFocus:
      "High shear-strength vertical bond formulations, UV-stable elastomeric coatings, and sag-resistant tile adhesives.",
  },
  {
    id: "central",
    name: "Central India",
    states: "Madhya Pradesh, Chhattisgarh",
    climateProfile:
      "Significant seasonal fluctuations, expansive black cotton soil movements, and dry summer conditions.",
    challenges: [
      "Subsoil settlement and structural micro-movement in foundations",
      "Rapid water evaporation during summer mortar placement",
      "Varied substrate porosity across regional building stones",
    ],
    formulationFocus:
      "High-flexibility crack-bridging waterproofing chemistry and moisture-retaining cementitious adhesives.",
  },
];

export const audienceSolutions: AudienceSolution[] = [
  {
    id: "architects",
    title: "Architects & Design Professionals",
    subtitle: "Precision Material Chemistry for Bold Architectural Visions",
    summary:
      "Support for material selection, technical specifications, and specialised construction chemical solutions that preserve visual aesthetics and design integrity.",
    keyBenefits: [
      "Detailed specification clauses and grade compatibility data",
      "Non-staining adhesives for translucent imported marble and porcelain slabs",
      "Aesthetic, chemical-resistant epoxy grout palettes for seamless finishes",
    ],
    ctaLabel: "Request Architectural Guidance",
    ctaHref: "/contact?type=Technical+Guidance&audience=architects",
  },
  {
    id: "civil-engineers",
    title: "Civil Engineers & Technical Consultants",
    subtitle: "Data-Backed Formulation Standards for Structural Integrity",
    summary:
      "Comprehensive product specification information, grade knowledge, and application-related technical guidance aligned with international testing standards.",
    keyBenefits: [
      "Clear adherence to tensile adhesion, flexural, and shear standards",
      "Hydrostatic pressure resistance documentation for deep foundations",
      "Direct technical consultation with experienced chemical engineering team",
    ],
    ctaLabel: "Consult Technical Team",
    ctaHref: "/contact?type=Technical+Guidance&audience=civil-engineers",
  },
  {
    id: "builders",
    title: "Builders & Real Estate Developers",
    subtitle: "Scalable Quality & Durability for Large-Scale Developments",
    summary:
      "Construction chemical solutions engineered to reduce warranty callbacks, accelerate installation cycles, and enhance property lifecycle value.",
    keyBenefits: [
      "Consistent batch quality across high-volume project deliveries",
      "Reliable supply chains and on-site applicator training support",
      "Mitigation of post-handover seepage, debonding, and dampness liabilities",
    ],
    ctaLabel: "Discuss Commercial Supply",
    ctaHref: "/contact?type=Business+Partnership&audience=builders",
  },
  {
    id: "contractors",
    title: "Contractors & Project Executives",
    subtitle: "Workability and Predictable Performance on Site",
    summary:
      "Application-oriented product information, reliable packaging, and responsive support for smooth on-site project execution.",
    keyBenefits: [
      "Superior trowel glide, pot life, and open time for increased daily output",
      "Robust tolerance to varying substrate moisture and climatic conditions",
      "Dedicated technical field support for complex installation zones",
    ],
    ctaLabel: "Connect with Site Support",
    ctaHref: "/contact?type=Product+Information&audience=contractors",
  },
  {
    id: "tile-layers",
    title: "Tile Layers & Flooring Professionals",
    subtitle: "Created for the Hands That Build Our Spaces",
    summary:
      "Practical product selection, balanced rheology, zero vertical slip, and extended workability engineered for daily craftsman comfort.",
    keyBenefits: [
      "Effortless mixing without lump formation",
      "Zero slip on vertical wall tiles and large-format porcelain slabs",
      "Water-washable epoxy grout for clean, rapid joint cleanup",
    ],
    ctaLabel: "Explore Application Tips",
    ctaHref: "/products/tile-adhesives",
  },
  {
    id: "stone-professionals",
    title: "Stone & Marble Professionals",
    subtitle: "Dedicated Protection for Natural Luxury Stone",
    summary:
      "Specialised bonding, resin reinforcement, and stain protection tailored specifically for delicate Italian marble, granite, and natural stone.",
    keyBenefits: [
      "Non-yellowing white adhesives that prevent shadowing and moisture marks",
      "High shear-bond strength for heavyweight vertical wall slabs",
      "Impregnating hydrophobic sealers preserving natural breathability",
    ],
    ctaLabel: "View Stone Solutions",
    ctaHref: "/products/stone-marble",
  },
  {
    id: "homeowners",
    title: "Site Owners & Homeowners",
    subtitle: "Long-Term Peace of Mind for Your Dream Home",
    summary:
      "Transparent guidance on selecting the right construction chemicals to prevent persistent leaks, hollow tiles, and mould growth before they start.",
    keyBenefits: [
      "Clear guidance on why modern tiles require polymer adhesives over plain cement",
      "Protection of expensive interiors against hidden moisture seepage",
      "Stain-proof epoxy joint finishing that stays pristine for years",
    ],
    ctaLabel: "Get Project Guidance",
    ctaHref: "/contact?type=Product+Information&audience=homeowners",
  },
  {
    id: "dealers",
    title: "Dealers & Distribution Partners",
    subtitle: "Growing Together Through Trust and Reliability",
    summary:
      "Establishing mutually beneficial, transparent commercial relationships with distributors, stockists, and retail building material partners.",
    keyBenefits: [
      "Distinctive, premium brand positioning that stands out on retail shelves",
      "Direct technical training and marketing collateral for your sales team",
      "Transparent commercial policies and dedicated distributor support",
    ],
    ctaLabel: "Become a LIVORA Partner",
    ctaHref: "/partners",
  },
];

