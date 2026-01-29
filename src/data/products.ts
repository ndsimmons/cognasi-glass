export type ProductCategory = 'pieces' | 'glass-sheets' | 'supplies';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: ProductCategory;
}

export const products: Product[] = [
  {
    id: 'glass-circle-art',
    name: 'Glass Circle Art',
    price: 15000, // $150.00 in cents
    image: '/donut-piece.jpg',
    description: 'Handmade stained glass circle piece',
    category: 'pieces'
  },
  {
    id: 'stained-glass-creation',
    name: 'Stained Glass Creation',
    price: 18000, // $180.00 in cents
    image: '/IMG_4033_cropped.jpeg',
    description: 'Handmade stained glass piece',
    category: 'pieces'
  },
  {
    id: 'glass-art-piece',
    name: 'Glass Art Piece',
    price: 22000, // $220.00 in cents
    image: '/IMG_4115.JPG',
    description: 'Handmade stained glass piece',
    category: 'pieces'
  },
  {
    id: 'artistic-glass-work',
    name: 'Artistic Glass Work',
    price: 19500, // $195.00 in cents
    image: '/IMG_4447.jpg',
    description: 'Handmade stained glass piece',
    category: 'pieces'
  },
  {
    id: 'glass-masterpiece',
    name: 'Glass Masterpiece',
    price: 25000, // $250.00 in cents
    image: '/IMG_7793.jpg',
    description: 'Handmade stained glass piece',
    category: 'pieces'
  },
  {
    id: 'glass-rose',
    name: 'Glass Rose',
    price: 17500, // $175.00 in cents
    image: '/IMG_8510_cropped.jpeg',
    description: 'Handmade stained glass rose',
    category: 'pieces'
  }
];

export function formatPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`;
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
