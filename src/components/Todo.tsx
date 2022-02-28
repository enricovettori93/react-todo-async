import React, {FormEvent, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {ITodo} from "../models/ToDo";

interface IProps {
    todo: ITodo
    fetching?: boolean
    onDelete: Function
    onEdit: Function
}

const Todo = (props: IProps) => {
    const {todo, fetching, onEdit, onDelete} = props;
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editTodoText, setEditTodoText] = useState<string>(todo.text);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onEdit(todo.id, {...todo, text: editTodoText});
        setIsEditing(false);
    }

    return (
        <Form onSubmit={handleSubmit} className={"d-flex"}>
            {
                !isEditing && (
                    <React.Fragment>
                        {todo.text}
                        <Button disabled={fetching} onClick={() => setIsEditing(!isEditing)} variant={"primary"}
                                className={"mx-3"} type={"button"}>🖊</Button>
                    </React.Fragment>
                )
            }
            {
                isEditing && (
                    <React.Fragment>
                        <Form.Control type="text" placeholder="todo" value={editTodoText} aria-required={true} required
                                      onChange={(e) => setEditTodoText(e.target.value)}/>
                        <Button disabled={fetching} variant={"info"}
                                className={"mx-3"} type={"submit"}>👌</Button>
                    </React.Fragment>
                )
            }
            <Button disabled={fetching} onClick={() => onDelete(todo.id)} variant={"danger"} type={"button"}>🗑</Button>
        </Form>
    )
}

export default Todo;
