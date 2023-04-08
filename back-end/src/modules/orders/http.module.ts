
import { Module } from '@nestjs/common';
import { CreateOrderUseCase } from './services/createOrder/CreateOrderUseCase';
import { CreateOrderController } from './services/createOrder/CreateOrderController';
import { OrderDatabaseModule } from './database.module';
import { ListOrderController } from './services/listOrder/ListOrderController';
import { ListOrderUseCase } from './services/listOrder/ListOrderUseCase';
import { ListMyOrderController } from './services/listMyOrder/ListMyOrderController';
import { ListMyOrderUseCase } from './services/listMyOrder/ListMyOrderUseCase';
import { DeleteOrderController } from './services/deleteOrder/DeleteOrderController';
import { DeleteOrderUseCase } from './services/deleteOrder/DeleteOrderUseCase';


@Module({
  imports: [
    OrderDatabaseModule
  ],
  controllers: [
    CreateOrderController,
    ListOrderController,
    ListMyOrderController,
    DeleteOrderController
  ],
  providers: [
    CreateOrderUseCase,
    ListOrderUseCase,
    ListMyOrderUseCase,
    DeleteOrderUseCase
  ],
  exports: []
  
})

export class OrderHttpModule {}