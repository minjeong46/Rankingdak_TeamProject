import { createSlice } from "@reduxjs/toolkit"

const initState = {    
    isConfirmModal: false,
    confirmModalMsg : '',
    signUp : false,
}


const confirmModalReducer = createSlice({
    name: 'confirmModal',
    initialState: initState,
    reducers: {
        confirmModal: (state, action)=>{
            state.isConfirmModal = action.payload.isConfirmModal;
            state.confirmModalMsg = action.payload.confirmModalMsg;
            state.signUp = action.payload.signUp;
        }
    }
});

export default confirmModalReducer.reducer;
export const {confirmModal} = confirmModalReducer.actions;

