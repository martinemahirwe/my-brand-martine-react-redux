import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from '../slices/contactSlice';
import { loginReducer } from "../slices/loginSlice";
import { messageReducer } from "../slices/messageSlice";
import { modalsReducer } from "../slices/modalSlice";
import apiReducer from '../slices/apiSlice'


const store =  configureStore({
    reducer: {
        api: apiReducer,
        contact: contactReducer,
        login: loginReducer,
        message: messageReducer,
        modals: modalsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
