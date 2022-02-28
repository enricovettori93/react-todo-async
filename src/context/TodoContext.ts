import React from "react";
import {ITodo} from "../models/ToDo";

export interface ITodoContext {
    todos: ITodo[]
    fetching: boolean
    error: any
    createTodo: Function
    deleteTodo: Function
    fetchAllTodos: Function
    updateTodo: Function
}

export const TodoContext = React.createContext<ITodoContext>({
    todos: [],
    fetching: false,
    error: null,
    createTodo: () => {
    },
    deleteTodo: () => {
    },
    fetchAllTodos: () => {
    },
    updateTodo: () => {
    }
})
