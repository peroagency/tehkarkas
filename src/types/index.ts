export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'private' | 'commercial' | 'both';
  unit: string;
  priceFrom: number;
  imageUrl: string;
  features: string[];
  subtypes: string[];
  specs: { label: string; value: string }[];
}

export interface FormworkEquipment {
  id: string;
  title: string;
  type: string;
  totalArea: string;
  description: string;
  features: string[];
  image: string;
  advantage: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'all' | 'cottage' | 'multistorey' | 'foundation' | 'floors';
  categoryLabel: string;
  location: string;
  concreteVolume: string; // e.g. "240 м³"
  area: string; // e.g. "360 м²"
  duration: string; // e.g. "18 робочих днів"
  formworkUsed: string; // e.g. "Стінова рамна 420 м²"
  year: string;
  description: string;
  image: string;
  gallery: string[];
  tags: string[];
}

export interface PriceTier {
  category: string;
  items: {
    name: string;
    unit: string;
    workOnlyPrice: number;
    turnkeyPrice: number;
    description: string;
  }[];
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  projectType: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface CalculationInput {
  structureType: 'foundation_slab' | 'strip_foundation' | 'slab_floor' | 'columns_walls' | 'concrete_floor';
  length: number; // m
  width: number; // m
  thickness: number; // m (or depth)
  concreteGrade: 'B20' | 'B25' | 'B30';
  pumpNeeded: boolean;
  pumpBoomLength: number; // m
  ownFormwork: boolean;
  groundWorkNeeded: boolean;
  reinforcementType: 'standard' | 'heavy';
}

export interface CalculationResult {
  volumeM3: number;
  rebarTons: number;
  formworkM2: number;
  workCostUAH: number;
  materialsCostUAH: number;
  totalEstimatedCostUAH: number;
  estimatedDays: number;
}
