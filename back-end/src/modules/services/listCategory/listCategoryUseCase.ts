import { Injectable } from '@nestjs/common';
import { ICategoryRepository } from 'src/modules/products/database/implements/ICategoryRepository';
import { Category } from './../../products/entities/Category';


@Injectable()
export class ListCategoryUseCase {
  constructor(
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(): Promise<string> {
    //const users = this.categoryRepository.list();
    //return users;
    return 'teste'
  }

}