
import { Module } from '@nestjs/common';
import { CreateOrderUseCase } from './services/createOrder/CreateOrderUseCase';
import { CreateOrderController } from './services/createOrder/CreateOrderController';
import { OrderDatabaseModule } from './database.module';
import { ListOrderController } from './services/listOrder/ListOrderController';
import { ListOrderUseCase } from './services/listOrder/ListOrderUseCase';
import { ListMyOrderController } from './services/listMyOrder/ListMyOrderController';
import { ListMyOrderUseCase } from './services/listMyOrder/ListMyOrderUseCase';


@Module({
  imports: [
    OrderDatabaseModule
  ],
  controllers: [
    CreateOrderController,
    ListOrderController,
    ListMyOrderController
  ],
  providers: [
    CreateOrderUseCase,
    ListOrderUseCase,
    ListMyOrderUseCase
  ],
  exports: []
  
})

export class OrderHttpModule {}