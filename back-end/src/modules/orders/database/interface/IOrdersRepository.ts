import { OrderDTO } from "../../DTO/OrderDTO";
import { OrderItemDTO } from "../../DTO/OrderItemDTO";
import { Order } from "../../entities/Order";

export abstract class IOrderRepository {
  abstract listOrders(): Promise<Order[]>
  abstract listMyOrders(user_id: string): Promise<Order[]>
  abstract createOrder(data: OrderDTO, user_id: string): Promise<Order>
  abstract createOrderItem(data: OrderItemDTO, order_id: string): Promise<void>
  abstract deleteOrder(order_id: string): Promise<void>

}