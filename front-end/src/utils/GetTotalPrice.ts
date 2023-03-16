
import { cartItem } from '@src/redux/reducers/Cart';


export const GetTotalPrice = (items: cartItem[]) => {
  return items.map(item => item.price).reduce((total, price) => total + price, 0)
}