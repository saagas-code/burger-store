import { Injectable } from '@nestjs/common';
import { ICategoryRepository } from 'src/modules/products/database/implements/ICategoryRepository';
import { Category } from '../../entities/Category';
import { CategoryNotExists } from './../../errors/CategoryNotExists';

interface IRequest {
  id: string
}

@Injectable()
export class DeleteCategoryUseCase {
  constructor(
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(id: string): Promise<Category[]> {

    const CategoryExists = await this.categoryRepository.findById(id)
    if(!CategoryExists) {
      throw new CategoryNotExists()
    }

    await this.categoryRepository.deleteById(id);
    return
  }

}