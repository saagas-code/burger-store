import { Category } from "../../entities/Category";



export abstract class ICategoryRepository {
  abstract list(): Promise<Category[]>;
  abstract create(data: Category): Promise<void>;
  abstract deleteById(id: Number): Promise<void>;
}