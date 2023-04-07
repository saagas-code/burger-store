import { Product } from "src/modules/products/entities/Product"


export class OrderItem {
  id: string
  quantity: number
  product_id: string
  product?: Product
  order_id: string
}