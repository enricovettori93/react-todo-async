import {ITodo} from "../../../models/ToDo";

export interface ITodoContext {
    todos: ITodo[]
    fetching: boolean
    error: any
    createTodo: Function
    deleteTodo: Function
    fetchAllTodos: Function
    updateTodo: Function
}
