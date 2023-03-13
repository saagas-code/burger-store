
import { Module } from '@nestjs/common';
import { PrismaService } from './../../instances/prisma.service';
import { ICategoryRepository } from './database/implements/ICategoryRepository';
import { IProductRepository } from './database/implements/IProductRepository';
import { ProductRepositoryPrisma } from './database/prisma/repositories/ProductRepositoryPrisma';
import { CategoryRepositoryPrisma } from './database/prisma/repositories/CategoryRepositoryPrisma';

@Module({
  providers: [
    PrismaService, 
    {
      provide: IProductRepository,
      useClass: ProductRepositoryPrisma
    },
    {
      provide: ICategoryRepository,
      useClass: CategoryRepositoryPrisma
    },
  ],

  exports: [IProductRepository, ICategoryRepository]
})

export class ProductDatabaseModule {}