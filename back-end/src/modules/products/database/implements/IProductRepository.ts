import { Product } from "../../entities/Product";


export abstract class IProductRepository {
  abstract list(): Promise<Product[]>;
  abstract create(data: Partial<Product>): Promise<void>;
  abstract findByName(product: string): Promise<Product>;
  abstract update(data: Partial<Product>, id: Number): Promise<void>;
  abstract deleteById(id: Number): Promise<void>;
}