import React, {useState} from "react";
import {ITodo, ITodoBasicFields} from "../models/ToDo";
import {TodoContext} from "./TodoContext";
import TodoService from "../services/todo.service";

export const TodoContextProvider = (props: React.PropsWithChildren<any>) => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [fetching, setFetching] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);
    const {children} = props;

    const request = async (callback: Function) => {
        try {
            setFetching(true);
            await callback();
        } catch (e) {
            setError(e);
        } finally {
            setFetching(false);
        }
    }

    const fetchAllTodos = async () => {
        await request(async () => {
            setTodos(await TodoService.fetch());
        });
    };

    const createTodo = async (data: ITodoBasicFields) => {
        await request(async () => {
            setTodos([...todos, await TodoService.create(data)]);
        });
    };

    const deleteTodo = async (id: number) => {
        await request(async () => {
            await TodoService.delete(id);
            setTodos([...todos.filter((todo) => todo.id !== id)]);
        });
    };

    const updateTodo = async (id: number, body: ITodo) => {
        await request(async () => {
            await TodoService.update(id, body);
            setTodos([...todos.map((todo) => todo.id !== id ? todo : body)]);
        });
    };

    return (
        <TodoContext.Provider value={{todos, fetching, error, fetchAllTodos, createTodo, deleteTodo, updateTodo}}>
            {children}
        </TodoContext.Provider>
    )
}
