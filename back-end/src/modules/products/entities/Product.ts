import { randomUUID } from "crypto";




export class Product {
  id: string;
  name: string;
  price: number;
  image: string;
  created_at: Date;
  category_id: string;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
    if (!this.image) {
      this.image = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fbr%2Fsearch%3Fk%3Dno%2520image%2520available&psig=AOvVaw1pKyw7BtHrFJ7nrkQVHaMK&ust=1678858223439000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDGuLLY2v0CFQAAAAAdAAAAABAE'
    }    
  }
}