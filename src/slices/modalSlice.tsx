import { createSlice,PayloadAction } from "@reduxjs/toolkit";


export interface Modal {
    openModal1: boolean;
    openModal2: boolean;
    openModal3: boolean;
}

const initialState : Modal = {
    openModal1: false,
    openModal2: false,
    openModal3: false,
}

const modalSlice = createSlice({
    name: "modals",
    initialState,
    reducers:{
        setIsOpen(state,action: PayloadAction<boolean>){
            state.openModal1 = action.payload;
        },
        setIsOpen1(state,action: PayloadAction<boolean>){
            state.openModal2 = action.payload;
        },
        setIsOpen2(state,action: PayloadAction<boolean>){
            state.openModal3 = action.payload;
        }
    }
})

export const {setIsOpen,setIsOpen1,setIsOpen2} = modalSlice.actions;
export const modalsReducer = modalSlice.reducer;