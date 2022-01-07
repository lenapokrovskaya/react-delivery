import { createSlice } from '@reduxjs/toolkit'
import {content} from '../../content.js'

const initialState = {
    menu: content,
    basket: []
    // counter: 0,
    // sumProduct: 0
}

export const counterSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            state.menu.forEach(element => {
                if (element.id === action.payload) {
                    state.basket.push(element)
                }
            });
            console.log(state.basket)
        },
        removeCardBasket: (state, action) => {
            state.basket = state.basket.filter(function
            (item) {
                console.log(state.counter)
                return item.id !== action.payload;
            }); 
            state.counter = state.basket.lenght     
        },
        counterProduct: (state) => {
            state.counter = state.basket.lenght
        }
    }

})

export const { addBasket, removeCardBasket } = counterSlice.actions
export default counterSlice.reducer