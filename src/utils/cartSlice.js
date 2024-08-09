import { createSlice } from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        additems:(state,action)=>{
state.items.push(action.payload)
        },
        removeItems:(state)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length=0
        },
    }
})


export const {additems,removeItems,clearCart}=cartSlice.actions

export default cartSlice.reducer