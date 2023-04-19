import { Inject, Injectable } from "@nestjs/common";
import { Product } from "src/modules/products/entities/Product";
import { IProductRepository } from "../../implements/IProductRepository";
import { RedisService } from "src/config/redis";
import { cache } from "ejs";
import { listProductsByQueryParams } from "src/modules/products/helpers/listProductsByQueryParams";

@Injectable()
export class ProductRepositoryRedis implements IProductRepository {
  constructor(
    private redis: RedisService,
    @Inject("IProductRepository")
    private productRepositoryPrisma: IProductRepository
  ) {}

  async list(name?: string, category?: string): Promise<Product[]> {
    const cachedProducts = await this.redis.get("products")
    console.log(category)

    if(!cachedProducts) {
      const products = await this.productRepositoryPrisma.list('', '')
      const productFiltered = listProductsByQueryParams(products, name, category)

      await this.redis.set(
        "products",
        JSON.stringify(products),
        "EX",
        "60" // VALOR EM SEGUNDOS
      )
      console.log("dabase")
      return productFiltered
    }
    
    const cacheParsed = JSON.parse(cachedProducts)
    const cacheFiltered = listProductsByQueryParams(cacheParsed, name, category)

    return cacheFiltered;
  }
  async create(data: Product): Promise<void> {
    await this.productRepositoryPrisma.create(data)
    await this.redis.del("products")
    return
  }

  async findByName(product: string): Promise<Product> {
    const cachedProducts = await this.redis.get("products")

    if(!cachedProducts) {
      const products = await this.productRepositoryPrisma.list('', '')

      const productFiltered = products.find((prdt: Product) => prdt.name === product)

      await this.redis.set(
        "products",
        JSON.stringify(products),
        "EX",
        "60" // VALOR EM SEGUNDOS
      )
      return productFiltered
    }

    const cacheParsed = JSON.parse(cachedProducts)
    const cachedFiltered = cacheParsed.find((prdt: Product) => prdt.name === product)
    return cachedFiltered
  }
  async update(data: Partial<Product>, id: string): Promise<void> {
    await this.productRepositoryPrisma.update(data, id)
    await this.redis.del("products")
  }
  async deleteById(id: string): Promise<void> {
    await this.productRepositoryPrisma.deleteById(id)
    await this.redis.del("products")
  }
  
}