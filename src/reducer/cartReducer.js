import { createSlice } from "@reduxjs/toolkit"

const initState = {    
    isCart: []
}

const cartReducer = createSlice({
    name: 'cart',
    initialState: initState,
    reducers: {
        cartMethod: (state, action)=>{
            state.isCart = action.payload;
        }
    }
});


export default cartReducer.reducer;
export const {cartMethod} = cartReducer.actions;

