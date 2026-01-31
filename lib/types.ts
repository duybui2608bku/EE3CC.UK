export interface Product {
  ID: number;
  Type: string;
  Name?: string;
  SKU?: string;
  Published: number;
  "Is featured?": number;
  "Visibility in catalog": string;
  Description?: string;
  "Tax status": string;
  "In stock?": number;
  "Backorders allowed?": number;
  "Sold individually?": number;
  "Allow customer reviews?": number;
  "Regular price": number;
  "Sale price"?: number;
  Categories?: string;
  Images?: string;
  Position: number;
}

export interface Category {
  name: string;
  slug: string;
  count: number;
}
