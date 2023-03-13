import { Injectable } from '@nestjs/common';
import { ICategoryRepository } from 'src/modules/products/database/implements/ICategoryRepository';
import { CreateUserDTO } from '../../DTO/CreateUserDTO';
import { Category } from '../../entities/Category';
import { CategoryExists } from './../../errors/CategoryExists';


@Injectable()
export class CreateCategoryUseCase {
  constructor(
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({name}: CreateUserDTO): Promise<Category[]> {

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