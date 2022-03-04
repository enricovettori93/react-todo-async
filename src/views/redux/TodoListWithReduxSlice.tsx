import React, {useEffect} from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import {createTodo, deleteTodo, fetchAllTodos, updateTodo} from "./todo-slice/todoSlice";
import {IApplicationState, store} from "./store";
import NewTodo from "../../components/NewTodo";
import TodoListing from "../../components/TodoListing";
import ErrorMessage from "../../components/ErrorMessage";
import {ITodo, ITodoBasicFields} from "../../models/ToDo";

const TodoList = () => {
    const dispatch = useDispatch();
    const {todos, error, fetching} = useSelector((state: IApplicationState) => state.todo);

    useEffect(() => {
        dispatch(fetchAllTodos());
    }, []);

    const deleteItem= (id: number) => {
        dispatch(deleteTodo(id));
    }

    const update = (id: number, body: ITodo) => {
        dispatch(updateTodo({id, body}));
    }

    const create = (body: ITodoBasicFields) => {
        dispatch(createTodo(body));
    }

    return (
        <React.Fragment>
            <NewTodo onSubmit={create}/>
            <TodoListing
                todos={todos}
                fetching={fetching}
                onDelete={deleteItem}
                onEdit={update}
            />
            <ErrorMessage error={error}/>
        </React.Fragment>
    )
}

const TodoListWithReduxSlice = () => {
    return (
        <Provider store={store}>
            <TodoList/>
        </Provider>
    )
}

export default TodoListWithReduxSlice;
