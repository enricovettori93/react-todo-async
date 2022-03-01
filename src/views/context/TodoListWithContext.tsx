import React, {useContext, useEffect} from "react";
import {TodoContext} from "./context-provider/TodoContextProvider";
import Todo from "../../components/Todo";
import NewTodo from "../../components/NewTodo";

const TodoListWithContext = () => {
    const todoContext = useContext(TodoContext);

    useEffect(() => {
        todoContext.fetchAllTodos();
    }, []);


    const error = () => {
        if (todoContext.error) {
            return (
                <p>Error: {JSON.stringify(todoContext.error)}</p>
            )
        }
    }

    return (
        <React.Fragment>
            <p>TodoList with react context</p>
            <NewTodo onSubmit={todoContext.createTodo}/>
            <ul className={"w-25"}>
                {
                    todoContext.todos.map((todo) => (
                        <li key={todo.id} className={"my-2"}>
                            <Todo
                                todo={todo}
                                fetching={todoContext.fetching}
                                onDelete={todoContext.deleteTodo}
                                onEdit={todoContext.updateTodo}
                            />
                        </li>)
                    )
                }
            </ul>
            {
                error()
            }
        </React.Fragment>
    );
};

export default TodoListWithContext;
