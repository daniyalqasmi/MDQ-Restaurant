import { Cart } from '@/app/utils/type'
import { createSlice } from '@reduxjs/toolkit'
import { News_Cycle } from 'next/font/google'


// Define the initial state using that type
const initialState: Cart[] = []

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // add to card function
    addToCart(state, action) {
      let uuid = Math.floor(1000 + Math.random() * 9000)
      console.log("fire---------------------->",action.payload)
      let newobj = { ...action.payload, uuid }
      state.push(newobj)
    },
    // delete from cart
    delItem(state, { payload }) {
      return state.filter((val) => val.uuid !== payload)
    },
    // addition of items in add to card
    addCard(state, action) {
      let obj = state.find(
        (val) => 
        val.id == action.payload.id 
      );
      if (obj) {
        ++obj.qty;
        let newState = state.filter((val)=>val.id !== obj?.id);
        state =[...newState,obj];
        return;
      }
    },
    // subtraction of items in add to card
    subtractCard(state, action){
      let obj = state.find((val) => val.id == action.payload.id 
      );
      if (obj !== undefined){
        if (obj.qty<=1){
          return state.filter((val)=>val.uuid !== obj?.uuid)
        }
        --obj.qty;
        let newState = state.filter((val)=>val.uuid == obj?.uuid)
        state=[...newState,obj]
        return;
      }
    }
  },
})

export const { addToCart, delItem,addCard ,subtractCard} = cartSlice.actions


export default cartSlice.reducer