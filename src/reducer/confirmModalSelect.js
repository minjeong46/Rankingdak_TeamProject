import { createSlice } from "@reduxjs/toolkit"

const initState = {    
    isConfirmModalSelect: false,
    confirmModalSelectMsg : '',
    deleteId: '',
}


const confirmModalSelectReducer = createSlice({
    name: 'confirmModalSelect',
    initialState: initState,
    reducers: {
        confirmModalSelect: (state, action)=>{
            state.isConfirmModalSelect = action.payload.isConfirmModalSelect;
            state.confirmModalSelectMsg = action.payload.confirmModalSelectMsg;
            state.deleteId = action.payload.deleteId;
        }
    }
});

export default confirmModalSelectReducer.reducer;
export const { confirmModalSelect } = confirmModalSelectReducer.actions;

