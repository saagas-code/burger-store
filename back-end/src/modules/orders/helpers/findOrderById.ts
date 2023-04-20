import { Order } from "../entities/Order"


const findOrderById = (orders: Order[], order_id) => {
  const result = orders.find((order) => order.id === order_id)
  return result
}

export {findOrderById}