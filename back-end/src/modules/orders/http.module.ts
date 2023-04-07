
import { Module } from '@nestjs/common';
import { CreateOrderUseCase } from './services/createOrder/CreateOrderUseCase';
import { CreateOrderController } from './services/createOrder/CreateOrderController';
import { OrderDatabaseModule } from './database.module';
import { ListOrderController } from './services/listOrder/ListOrderController';
import { ListOrderUseCase } from './services/listOrder/ListOrderUseCase';


@Module({
  imports: [
    OrderDatabaseModule
  ],
  controllers: [
    CreateOrderController,
    ListOrderController
  ],
  providers: [
    CreateOrderUseCase,
    ListOrderUseCase
  ],
  exports: []
  
})

export class OrderHttpModule {}