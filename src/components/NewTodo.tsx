import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";

interface IProps {
    onSubmit: Function
}

const NewTodo = (props: IProps) => {
    const [todoText, setTodoText] = useState<string>("");
    const ref = React.createRef<HTMLFormElement>();

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        if (ref.current?.checkValidity()) {
            props.onSubmit({text: todoText});
            setTodoText("");
        }
    }

    return (
        <React.Fragment>
            <Form ref={ref} onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="todoText">
                    <Form.Label>Insert new todo</Form.Label>
                    <Form.Control type="text" placeholder="todo" value={todoText} aria-required={true} required
                                  onChange={(e) => setTodoText(e.target.value)}/>
                    <Button variant="primary" type="submit" className={"my-3"}>
                        Insert
                    </Button>
                </Form.Group>
            </Form>
        </React.Fragment>
    );
};

export default NewTodo;
