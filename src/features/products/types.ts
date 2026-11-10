export interface TechnicalSpecification {
  property: string;
  value: string;
  standard?: string;
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  shortTitle: string;
  tagline: string;
  description: string;
  detailedOverview: string;
  heroImage: string;
  accentColor: string;
  materialsAndApplications: string[];
  technicalConsiderations: {
    title: string;
    description: string;
  }[];
  substrateSuitability: string[];
  applicationPractices: string[];
  seoTitle: string;
  seoDescription: string;
}

/**
 * Future-ready individual SKU product data model.
 * In accordance with Section 09, missing fields are optional
 * and no fictitious SKUs will be published until authentic records are provided.
 */
export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  images: string[];
  applications: string[];
  keyFeatures: string[];
  technicalSpecifications?: TechnicalSpecification[];
  packaging?: string[];
  availableVariants?: string[];
  technicalDataSheet?: string;
  safetyDataSheet?: string;
  seoTitle?: string;
  seoDescription?: string;
}

