import { Injectable } from "@nestjs/common";
import { OrderDTO } from "../../DTO/OrderDTO";
import { IOrderRepository } from "../../database/interface/IOrdersRepository";


@Injectable()
export class CreateOrderUseCase {
  constructor(
    private orderRepository: IOrderRepository,
  ) {}

  async execute(data: OrderDTO, user_id: string): Promise<void> {

    const order = await this.orderRepository.createOrder(data.orderStatus, user_id)

    for(let item in data.items) {  
      await this.orderRepository.createOrderItem(data.items[item], order.id)
    }
  }
}