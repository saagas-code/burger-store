
import { Module } from '@nestjs/common';
import { PrismaService } from './../../instances/prisma.service';
import { IOrderRepository } from './database/interface/IOrdersRepository';
import { OrderRepositoryPrisma } from './database/prisma/repositories/OrderRepositoryPrisma';
import { OrderRepositoryRedis } from './database/prisma/repositories/OrderRepositoryRedis';
import { RedisService } from 'src/config/redis';

@Module({
  providers: [
    PrismaService,
    RedisService,
    {
      provide: IOrderRepository,
      useClass: OrderRepositoryRedis
    },
    {
      provide: 'IOrderRepository',
      useClass: OrderRepositoryPrisma
    },
  ],

  exports: [IOrderRepository, 'IOrderRepository']
})

export class OrderDatabaseModule {}