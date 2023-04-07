import { OrderDTO } from "../../DTO/OrderDTO";
import { OrderItemDTO } from "../../DTO/OrderItemDTO";
import { Order } from "../../entities/Order";

export abstract class IOrderRepository {
  abstract createOrder(data: OrderDTO, user_id: string): Promise<Order>
  abstract createOrderItem(data: OrderItemDTO, order_id: string): Promise<void>
  
}