import { Injectable } from '@nestjs/common';
import { ICategoryRepository } from 'src/modules/products/database/implements/ICategoryRepository';
import { CreateCategoryDTO } from '../../DTO/CreateCategoryDTO';
import { Category } from '../../entities/Category';
import { CategoryExists } from './../../errors/CategoryExists';


@Injectable()
export class CreateCategoryUseCase {
  constructor(
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({name}: CreateCategoryDTO): Promise<Category[]> {

    const categoryExists = await this.categoryRepository.findByName(name)
    if (categoryExists) {
      throw new CategoryExists()
    }

    const category = new Category()
    Object.assign(category, {name})

    await this.categoryRepository.create(category);
    return
  }

}