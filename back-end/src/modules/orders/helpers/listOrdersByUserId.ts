import { Order } from "../entities/Order"


const listOrdersByUserId = (orders: Order[], user_id: string) => {
  const result = orders.filter((order) => order.user_id === user_id)
  return result
}
export {listOrdersByUserId}