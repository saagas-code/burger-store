import { Injectable } from '@nestjs/common';
import { IProductRepository } from '../../database/implements/IProductRepository';
import { CreateProductDTO } from '../../DTO/CreateProductDTO';
import { Category } from '../../entities/Category';
import { Product } from '../../entities/Product';
import { ProductExists } from '../../errors/ProductExists';


@Injectable()
export class CreateProductUseCase {
  constructor(
    private productRepository: IProductRepository
  ) {}

  async execute({name, price, category_id}: CreateProductDTO): Promise<Category[]> {

    const categoryExists = await this.productRepository.findByName(name)
    if (categoryExists) {
      throw new ProductExists()
    }

    const product = new Product()
    Object.assign(product, {name, price, category_id})

    await this.productRepository.create(product);
    return
  }

}