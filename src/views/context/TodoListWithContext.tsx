import React, {useContext, useEffect} from "react";
import {TodoContext, TodoContextProvider} from "./context-provider/TodoContextProvider";
import NewTodo from "../../components/NewTodo";
import ErrorMessage from "../../components/ErrorMessage";
import TodoListing from "../../components/TodoListing";

const TodoList = () => {
    const todoContext = useContext(TodoContext);

    useEffect(() => {
        todoContext.fetchAllTodos();
    }, []);

    return (
        <React.Fragment>
            <NewTodo onSubmit={todoContext.createTodo}/>
            <TodoListing
                todos={todoContext.todos}
                fetching={todoContext.fetching}
                onDelete={todoContext.deleteTodo}
                onEdit={todoContext.updateTodo}
            />
            <ErrorMessage error={todoContext.error}/>
        </React.Fragment>
    );
};

const TodoListWithContext = () => {
    return (
        <TodoContextProvider>
            <TodoList/>
        </TodoContextProvider>
    )
}

export default TodoListWithContext;
