
import { Module } from '@nestjs/common';
import { PrismaService } from './../../instances/prisma.service';
import { ICategoryRepository } from './database/implements/ICategoryRepository';
import { IProductRepository } from './database/implements/IProductRepository';
import { ProductRepositoryPrisma } from './database/prisma/repositories/ProductRepositoryPrisma';
import { CategoryRepositoryPrisma } from './database/prisma/repositories/CategoryRepositoryPrisma';
import { RedisService } from 'src/config/redis';
import { CategoryRepositoryRedis } from './database/prisma/repositories/CategoryRepositoryRedis';
import { ProductRepositoryRedis } from './database/prisma/repositories/ProductRepositoryRedis';

@Module({
  providers: [
    PrismaService,
    RedisService,
    {
      provide: 'IProductRepository',
      useClass: ProductRepositoryPrisma
    },
    {
      provide: IProductRepository,
      useClass: ProductRepositoryRedis
    },
    {
      provide: 'ICategoryRepository',
      useClass: CategoryRepositoryPrisma
    },
    {
      provide: ICategoryRepository,
      useClass: CategoryRepositoryRedis
    },
  ],

  exports: [IProductRepository, ICategoryRepository, 'ICategoryRepository', 'IProductRepository']
})

export class ProductDatabaseModule {}