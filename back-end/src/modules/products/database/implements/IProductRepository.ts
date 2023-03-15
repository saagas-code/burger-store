import { Product } from "../../entities/Product";


export abstract class IProductRepository {
  abstract list(name: string, category: string): Promise<Product[]>;
  abstract create(data: Partial<Product>): Promise<void>;
  abstract findByName(product: string): Promise<Product>;
  abstract update(data: Partial<Product>, id: string): Promise<void>;
  abstract deleteById(id: string): Promise<void>;
}