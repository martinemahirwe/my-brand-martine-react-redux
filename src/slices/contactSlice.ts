import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContactState {
    username: string;
    email: string;
    message: string;
    password?: string;
    confirmPassword?:string;
}

const initialState: ContactState = {
    username : '',
    email: '',
    message: '',
    password: '',
    confirmPassword: '',
}

const contactSlice = createSlice({
name: 'contact',
initialState,
reducers: {
    setUsername(state, action: PayloadAction<string>) {
    state.username = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
    state.email = action.payload;
    },
    setMessage(state, action: PayloadAction<string>) {
    state.message = action.payload;
    },  
    setPassword(state, action: PayloadAction<string>) {
        state.password = action.payload;
        }, 
        setConfirmPassword(state, action: PayloadAction<string>) {
            state.confirmPassword = action.payload;
            }, 
}
});

export const { setUsername, setEmail, setMessage,setConfirmPassword,setPassword } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;