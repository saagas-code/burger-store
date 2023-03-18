
import { cartItem } from '@src/redux/reducers/Cart';


export const GetTotalPrice = (items: cartItem[]) => {
  return items.map(item => item).reduce((total, item) => total + (item.price * item.qnt), 0)
}