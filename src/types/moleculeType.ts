export interface PriceHistory {
  date: string;
  priceEUR: number;
  priceUSD: number;
}

export interface Medication {
  name: string;
  dosage: string;
  priceHistory: PriceHistory[];
}

export interface Molecule {
  name: string;
  description: string;
  medications: Medication[];
}
