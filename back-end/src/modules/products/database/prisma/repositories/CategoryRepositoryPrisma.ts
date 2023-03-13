

import { Injectable } from "@nestjs/common";
import { Category } from "src/modules/products/entities/Category";
import { Product } from "src/modules/products/entities/Product";
import { ICategoryRepository } from "../../implements/ICategoryRepository";
import { PrismaService } from 'src/instances/prisma.service';

@Injectable()
export class CategoryRepositoryPrisma implements ICategoryRepository {
  constructor(
    private prisma: PrismaService
  ) {}

  async list(): Promise<Category[]> {
    const result = await this.prisma.category.findMany()
    return result
  }
  async create(data: Category): Promise<void> {
    await this.prisma.category.create({
      data: data
    })
  }
  async findByName(name: string): Promise<Category> {
    const category = this.prisma.category.findUnique({
      where: {
        name
      }
    })
    return category
  }

  async findById(id: string): Promise<Category> {
    const category = this.prisma.category.findUnique({
      where: {
        id
      }
    })
    return category
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.category.delete({
      where: {
        id
      }
    })
  }

}
  