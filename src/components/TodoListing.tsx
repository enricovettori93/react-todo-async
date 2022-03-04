import React from "react";
import Todo from "./Todo";
import {ITodo} from "../models/ToDo";

interface IProps {
    todos: ITodo[]
    fetching: boolean
    onDelete: Function
    onEdit: Function
}

const TodoListing = (props: IProps) => {
    const {todos, fetching, onDelete, onEdit} = props;

    return (
        <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id} className={"my-2"}>
                        <Todo
                            todo={todo}
                            fetching={fetching}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    </li>)
                )
            }
        </ul>
    );
};

export default TodoListing;
