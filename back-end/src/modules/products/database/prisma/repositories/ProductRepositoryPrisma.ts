import { Injectable } from "@nestjs/common";
import { Product } from "src/modules/products/entities/Product";
import { IProductRepository } from "../../implements/IProductRepository";


@Injectable()
export class ProductRepositoryPrisma implements IProductRepository {
  async list(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
  async create(data: Partial<Product>): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async findByName(product: string): Promise<Product> {
    throw new Error("Method not implemented.");
  }
  async update(data: Partial<Product>, id: Number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async deleteById(id: Number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
}