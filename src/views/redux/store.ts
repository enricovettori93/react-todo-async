import {configureStore} from "@reduxjs/toolkit";
import {todoReducer} from "./todo-slice/todoSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    devTools: true
})

export type IApplicationState = ReturnType<typeof store.getState>
