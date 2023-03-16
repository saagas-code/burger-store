import { createSlice} from '@reduxjs/toolkit'
import { RootState } from '../store'

export type cartItem = {
    id: string;
    name: string;
    price: number;
    image: string;
    created_at: Date;
    category: {
        id: string;
        name: string;
    }
    qnt: number
}

export const slice = createSlice({
    name: 'cart',
    initialState: {
        foodsInCart: [] as cartItem[],
    },
    reducers: {
       addToCart: (state, action) => {
        const productIndex = state.foodsInCart.findIndex(product => product.id === action.payload.id);
            if(productIndex !== -1) {
                state.foodsInCart[productIndex].qnt += action.payload.qnt;
            } else {
                state.foodsInCart.push({...action.payload})
            }
        },
        removeFromCart: (state, action) => {
            state.foodsInCart = state.foodsInCart.filter(product => product.id !== action.payload)
        },
        minusQnt: (state, action) => {
            const productIndex = state.foodsInCart.findIndex(product => product.id === action.payload)
            if(state.foodsInCart[productIndex].qnt > 1) {
                state.foodsInCart[productIndex].qnt -= 1
            } else {
                state.foodsInCart = state.foodsInCart.filter(product => product.id !== action.payload)
            }
        },
        increaseQnt: (state, action) => {
            const productIndex = state.foodsInCart.findIndex(product => product.id === action.payload)
            state.foodsInCart[productIndex].qnt += 1
    
        },
        FinishCart: (state, action) => {
            state.foodsInCart = []
        }
    },
})

export const { addToCart, removeFromCart, minusQnt, increaseQnt, FinishCart } = slice.actions;
export default slice.reducer; 



