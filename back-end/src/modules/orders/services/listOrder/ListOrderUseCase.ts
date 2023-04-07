import { Injectable } from "@nestjs/common";
import { OrderDTO } from "../../DTO/OrderDTO";
import { IOrderRepository } from "../../database/interface/IOrdersRepository";
import { Order } from "../../entities/Order";


@Injectable()
export class ListOrderUseCase {
  constructor(
    private orderRepository: IOrderRepository,
  ) {}

  async execute(): Promise<Order[]> {
  
    const orders = await this.orderRepository.listOrders()

    return orders
  }
}