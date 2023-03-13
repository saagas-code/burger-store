import { Injectable } from '@nestjs/common';
import { ICategoryRepository } from 'src/modules/products/database/implements/ICategoryRepository';
import { Category } from '../../entities/Category';


@Injectable()
export class ListCategoryUseCase {
  constructor(
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = this.categoryRepository.list();
    return categories;
  }

}