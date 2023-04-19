

import { Inject, Injectable } from "@nestjs/common";
import { Category } from "src/modules/products/entities/Category";
import { ICategoryRepository } from "../../implements/ICategoryRepository";
import { RedisService } from "src/config/redis";

@Injectable()
export class CategoryRepositoryRedis implements ICategoryRepository {
  constructor(
    private redis: RedisService,
    @Inject("ICategoryRepository")
    private categoryRepositoryPrisma: ICategoryRepository
  ) {}

  async create(data: Category): Promise<void> {
    await this.categoryRepositoryPrisma.create(data)
    await this.redis.del("categories")
  }

  async list(): Promise<Category[]> {
    const cachedCategories = await this.redis.get("categories")

    if(!cachedCategories) {
      const categories = await this.categoryRepositoryPrisma.list()

      await this.redis.set(
        "categories",
        JSON.stringify(categories),
        "EX",
        "60" // VALOR EM SEGUNDOS
      )
      return categories
    }
    return JSON.parse(cachedCategories)
  }

  async findByName(name: string): Promise<Category> {
    const cachedCategories = await this.redis.get("categories")

    if(!cachedCategories) {
      const categories = await this.categoryRepositoryPrisma.list()
      const categoryFiltered = categories.find((ctg) => ctg.name === name)

      await this.redis.set(
        "categories",
        JSON.stringify(categories),
        "EX",
        "60" // VALOR EM SEGUNDOS
      )
      return categoryFiltered
    }

    const categoryParsed = JSON.parse(cachedCategories)
    const categoryFiltered = categoryParsed.find((ctg) => ctg.name === name)
    return categoryFiltered
  }

  async findById(id: string): Promise<Category> {
    const cachedCategories = await this.redis.get("categories")

    if(!cachedCategories) {
      const categories = await this.categoryRepositoryPrisma.list()
      const categoryFiltered = categories.find((ctg) => ctg.id === id)

      await this.redis.set(
        "categories",
        JSON.stringify(categories),
        "EX",
        "60" // VALOR EM SEGUNDOS
      )
      return categoryFiltered
    }

    const categoryParsed = JSON.parse(cachedCategories)
    const categoryFiltered = categoryParsed.find((ctg: Category) => ctg.id === id)
    return categoryFiltered
  }

  async deleteById(id: string): Promise<void> {
    await this.categoryRepositoryPrisma.deleteById(id)
    await this.redis.del("categories")
  }

}
