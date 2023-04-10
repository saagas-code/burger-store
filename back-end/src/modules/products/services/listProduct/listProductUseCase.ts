import { Injectable } from '@nestjs/common';
import { ICategoryRepository } from 'src/modules/products/database/implements/ICategoryRepository';
import { IProductRepository } from '../../database/implements/IProductRepository';
import { Product } from '../../entities/Product';

interface IRequest {
  name: string;
  category: string;
}

@Injectable()
export class ListProductUseCase {
  constructor(
    private productRepository: IProductRepository
  ) {}

  async execute({name, category}: IRequest): Promise<Product[]> {
    let queries = [] as any
  
    if(name) {
      queries.push(name)
    }
    if(category) {
      queries.push(category)
    }

    const products = this.productRepository.list(name, category);

    
    return products;
  }

}