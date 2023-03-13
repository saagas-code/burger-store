import { Injectable } from '@nestjs/common';
import { ICategoryRepository } from 'src/modules/products/database/implements/ICategoryRepository';
import { IProductRepository } from '../../database/implements/IProductRepository';
import { Product } from '../../entities/Product';



@Injectable()
export class ListProductUseCase {
  constructor(
    private productRepository: IProductRepository
  ) {}

  async execute(): Promise<Product[]> {
    const products = this.productRepository.list();
    return products;
  }

}