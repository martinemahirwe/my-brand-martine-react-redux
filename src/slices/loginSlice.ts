import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
    isLogged: boolean;
}

const initialState: LoginState = {
   isLogged : false,
}

const LoginSlice = createSlice({
    name : 'logged',
    initialState,
    reducers : {
    setLogged(state, action: PayloadAction<boolean>) {
            state.isLogged = action.payload;
            },
    }
});

export const {setLogged} = LoginSlice.actions;
export const loginReducer = LoginSlice.reducer;