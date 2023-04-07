
import { Module } from '@nestjs/common';
import { PrismaService } from './../../instances/prisma.service';
import { IOrderRepository } from './database/interface/IOrdersRepository';
import { OrderRepositoryPrisma } from './database/prisma/repositories/OrderRepository';

@Module({
  providers: [
    PrismaService, 
    {
      provide: IOrderRepository,
      useClass: OrderRepositoryPrisma
    },
  ],

  exports: [IOrderRepository]
})

export class OrderDatabaseModule {}