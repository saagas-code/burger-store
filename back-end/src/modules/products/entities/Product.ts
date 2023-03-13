import { randomUUID } from "crypto";




export class Product {
  id: string;
  name: string;
  price: number;
  created_at: Date;
  category_id: string;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
    
  }
}