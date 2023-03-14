

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  created_at: Date;
  category: {
    id: string;
    name: string;
  }
}