import { OrderDTO } from "src/modules/orders/DTO/OrderDTO";
import { IOrderRepository } from "../../interface/IOrdersRepository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/instances/prisma.service";
import { OrderItemDTO } from "src/modules/orders/DTO/OrderItemDTO";
import { Order } from "src/modules/orders/entities/Order";
import { OrderItem } from './../../../entities/OrderItem';

@Injectable()
export class OrderRepositoryPrisma implements IOrderRepository {
  constructor(
    private prisma: PrismaService
  ) {}

  async listOrders(): Promise<Order[]> {
    const orders = await this.prisma.order.findMany({
      include: {
        items: {
          select: {
            id: true,
            quantity: true,
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                image: true,
                created_at: true
              }
            }
          }
        }
      }
    })
    return orders;
  }

  async listMyOrders(user_id: string): Promise<Order[]> {
    const orders = await this.prisma.order.findMany({
      include: {
        items: {
          select: {
            id: true,
            quantity: true,
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                image: true,
                created_at: true
              }
            }
          }
        }
      },
      where: {
        user_id
      }
    })
    return orders;
  }
  
  async createOrder({orderStatus}: OrderDTO, user_id: string): Promise<Order> {
    
    const order = await this.prisma.order.create({
      data: {
        orderStatus,
        user_id
      }
    })
    return order
  }
  async createOrderItem(data: OrderItemDTO, order_id: string): Promise<void> {
    await this.prisma.orderItem.create({
      data: {
        ...data,
        order_id
      }
    })
  }
}

