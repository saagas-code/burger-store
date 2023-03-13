
import { randomUUID } from 'crypto';



export class Category {
  id: String;
  name: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}