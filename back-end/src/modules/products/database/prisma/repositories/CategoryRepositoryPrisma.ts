

import { Injectable } from "@nestjs/common";
import { Category } from "src/modules/products/entities/Category";
import { Product } from "src/modules/products/entities/Product";
import { ICategoryRepository } from "../../implements/ICategoryRepository";

@Injectable()
export class CategoryRepositoryPrisma implements ICategoryRepository {
  async list(): Promise<Category[]> {
    throw new Error("Method not implemented.");
  }
  async create(data: Category): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async deleteById(id: Number): Promise<void> {
    throw new Error("Method not implemented.");
  }

}
  