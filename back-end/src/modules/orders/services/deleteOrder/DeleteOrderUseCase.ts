import { Injectable } from "@nestjs/common";
import { OrderDTO } from "../../DTO/OrderDTO";
import { IOrderRepository } from "../../database/interface/IOrdersRepository";
import { Order } from "../../entities/Order";


@Injectable()
export class DeleteOrderUseCase {
  constructor(
    private orderRepository: IOrderRepository,
  ) {}

  async execute(order_id: string): Promise<void> {

    
  
    await this.orderRepository.deleteOrder(order_id)

  }
}