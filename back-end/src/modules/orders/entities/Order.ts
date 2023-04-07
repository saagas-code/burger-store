import { ORDER_STATUS } from "@prisma/client"
import { User } from "src/modules/users/entities/User"
import { OrderItem } from "./OrderItem"


export class Order {
  id: string
  orderStatus: ORDER_STATUS
  user_id: string
  user?: User
  orderItems?: OrderItem
}