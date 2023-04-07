
import { Module } from '@nestjs/common';
import { CreateOrderUseCase } from './services/createOrder/CreateOrderUseCase';
import { CreateOrderController } from './services/createOrder/CreateOrderController';
import { OrderDatabaseModule } from './database.module';


@Module({
  imports: [
    OrderDatabaseModule
  ],
  controllers: [
    CreateOrderController,
  ],
  providers: [
    CreateOrderUseCase
  ],
  exports: []
  
})

export class OrderHttpModule {}