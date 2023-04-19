import { IOrderRepository } from "../../interface/IOrdersRepository";
import { Inject, Injectable } from "@nestjs/common";
import { OrderItemDTO } from "src/modules/orders/DTO/OrderItemDTO";
import { Order } from "src/modules/orders/entities/Order";
import { RedisService } from "src/config/redis";
import { ORDER_STATUS } from "@prisma/client";

@Injectable()
export class OrderRepositoryRedis implements IOrderRepository {
  constructor(
    private readonly redis: RedisService,
    @Inject("IOrderRepository")
    private orderRepository: IOrderRepository
  ) {}

  async createOrder(orderStatus: ORDER_STATUS, user_id: string): Promise<Order> {
    const order = await this.orderRepository.createOrder(orderStatus, user_id)
    await this.redis.del("orders")
    return order
  }

  async createOrderItem(data: OrderItemDTO, order_id: string): Promise<void> {
    await this.orderRepository.createOrderItem(data, order_id)
    await this.redis.del("orders")
  }

  async listOrders(): Promise<Order[]> {
    const cachedOrders = await this.redis.get("orders")

    if(!cachedOrders) {
      const orders = await this.orderRepository.listOrders()

      await this.redis.set(
        "orders",
        JSON.stringify(orders),
        "EX",
        "60" // VALOR EM SEGUNDOS
      )
      console.log("DATABASE")
      return orders
    }
    console.log("cache")
    return JSON.parse(cachedOrders);
  }

  async listMyOrders(user_id: string): Promise<Order[]> {
    const cachedOrders = await this.redis.get("orders")
    
    if(!cachedOrders) {
      const orders = await this.orderRepository.listMyOrders(user_id)
      const ordersFiltered = orders.filter((order) => order.user_id === user_id)

      await this.redis.set(
        "orders",
        JSON.stringify(orders),
        "EX",
        "60" // VALOR EM SEGUNDOS
      )
      return ordersFiltered
    }

    const ordersParsed = JSON.parse(cachedOrders);
    const ordersFiltered = ordersParsed.filter((order: Order) => order.user_id === user_id)
    return ordersFiltered
  }

  async findById(order_id: string): Promise<Order> {
    const cachedOrders = await this.redis.get("orders")

    if(!cachedOrders) {
      const orders = await this.orderRepository.listOrders()
      const ordersFiltered = orders.find((order) => order.id === order_id)

      await this.redis.set(
        "orders",
        JSON.stringify(orders),
        "EX",
        "60" // VALOR EM SEGUNDOS
      )
      return ordersFiltered
    }

    const ordersParsed = JSON.parse(cachedOrders);
    const orderFiltered = ordersParsed.find((order: Order) => order.id === order_id)
    return orderFiltered
  }

  async deleteOrder(order_id: string): Promise<void> {
    await this.orderRepository.deleteOrder(order_id)
    await this.redis.del("orders")
  }
  
  
}

