import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import TodoListWithContext from "./context/TodoListWithContext";
import TodoListWithReduxSlice from "./redux-slice/TodoListWithReduxSlice";
import './App.scss';

enum routes {
    HOME = "/",
    TODO_CONTEXT = "/todo-context",
    TODO_REDUX_THUNK_SLICE = "/todo-redux-thunk-slice"
}

const HomeComponent = () => {
    return (
        <React.Fragment>
            Available examples:
            <ul>
                <li>
                    <Link to={routes.TODO_CONTEXT}>React context</Link>
                </li>
                <li>
                    <Link to={routes.TODO_REDUX_THUNK_SLICE}>React redux with slice & thunk</Link>
                </li>
            </ul>
        </React.Fragment>
    )
}

function App() {
    return (
        <BrowserRouter>
            <Link to={routes.HOME}>Home</Link>
            <div className="App d-flex flex-column w-25">
                <Routes>
                    <Route path={routes.HOME} element={<HomeComponent/>}/>
                    <Route path={routes.TODO_CONTEXT}
                           element={<TodoListWithContext/>}/>
                    <Route path={routes.TODO_REDUX_THUNK_SLICE}
                           element={<TodoListWithReduxSlice/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
