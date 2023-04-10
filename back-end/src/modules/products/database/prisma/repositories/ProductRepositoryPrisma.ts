import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/instances/prisma.service";
import { Product } from "src/modules/products/entities/Product";
import { IProductRepository } from "../../implements/IProductRepository";


@Injectable()
export class ProductRepositoryPrisma implements IProductRepository {
  constructor(
    private prisma: PrismaService
  ) {}

  async list(name?: string, category?: string): Promise<Product[]> {
    let where: any = {}
    
    if (name) {
      where.name = { contains: name.toLocaleLowerCase()};
    }
    if (category) {
      where.category_id = category
    }
    const result = await this.prisma.product.findMany({
      where,
      include: {
        category: true
      },
    });
    return result;
  }
  async create(data: Product): Promise<void> {
    await this.prisma.product.create({
      data: data
    })
    return
  }
  async findByName(product: string): Promise<Product> {
    const result = await this.prisma.product.findUnique({
      where: {
        name: product
      }
    })
    return result
  }
  async update(data: Partial<Product>, id: string): Promise<void> {
    await this.prisma.product.update({
      where: {
        id
      },
      data: data
    })
  }
  async deleteById(id: string): Promise<void> {
    await this.prisma.product.delete({
      where: {
        id
      }
    })
  }
  
}