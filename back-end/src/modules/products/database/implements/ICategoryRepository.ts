import { Category } from "../../entities/Category";



export abstract class ICategoryRepository {
  abstract list(): Promise<Category[]>;
  abstract create(data: Category): Promise<void>;
  abstract findByName(name: string): Promise<Category>
  abstract deleteById(id: string): Promise<void>;
}