import { Injectable } from '@nestjs/common';
import { ICategoryRepository } from '../../database/implements/ICategoryRepository';
import { IProductRepository } from '../../database/implements/IProductRepository';
import { CreateProductDTO } from '../../DTO/CreateProductDTO';
import { Category } from '../../entities/Category';
import { Product } from '../../entities/Product';
import { ProductExists } from '../../errors/ProductExists';
import { CategoryNotExists } from './../../errors/CategoryNotExists';


@Injectable()
export class CreateProductUseCase {
  constructor(
    private productRepository: IProductRepository,
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({name, price, image = undefined, category_id}: CreateProductDTO): Promise<Category[]> {
    name = name.toLocaleLowerCase()
    
    const productExists = await this.productRepository.findByName(name)
    if (productExists) {
      throw new ProductExists()
    }

    const categoryExists = await this.categoryRepository.findById(category_id)
    if (!categoryExists) {
      throw new CategoryNotExists();
    }

    const product = new Product()
    if(image != undefined) {
      Object.assign(product, {name, price, image, category_id})
    }
    if(image == undefined) {
      Object.assign(product, {name, price, category_id})
    }
    await this.productRepository.create(product);
    return
  }

}