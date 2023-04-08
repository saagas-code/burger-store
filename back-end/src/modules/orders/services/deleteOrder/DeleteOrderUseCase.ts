import { Injectable } from "@nestjs/common";
import { OrderDTO } from "../../DTO/OrderDTO";
import { IOrderRepository } from "../../database/interface/IOrdersRepository";
import { Order } from "../../entities/Order";
import { OrderNotExists } from "../../errors/OrderNotExists";


@Injectable()
export class DeleteOrderUseCase {
  constructor(
    private orderRepository: IOrderRepository,
  ) {}

  async execute(order_id: string): Promise<void> {

    const order = await this.orderRepository.findById(order_id)
    if(!order) {
      throw new OrderNotExists();
    }
  
    await this.orderRepository.deleteOrder(order_id)

  }
}