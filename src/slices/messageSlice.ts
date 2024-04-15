import { createSlice,PayloadAction } from "@reduxjs/toolkit";


export interface Message {
    messageEl: string;
    bgColor: string;
    visible: boolean 
}

const initialState: Message = {
    messageEl: '',
    bgColor: '',
    visible: false  
}

const messageSlice = createSlice({
    name:'message',
    initialState,
    reducers: {
        setMessageEl(state,action:PayloadAction<string>){
            state.messageEl = action.payload;
        },
        setBgColor(state,action:PayloadAction<string>){
            state.bgColor = action.payload;
        },
        setVisibillity(state,action:PayloadAction<boolean>){
            state.visible = action.payload;
        }
    }
})

export const {setMessageEl,setBgColor,setVisibillity} = messageSlice.actions;
export const  messageReducer = messageSlice.reducer;