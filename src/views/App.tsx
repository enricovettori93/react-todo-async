import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import TodoListWithContext from "./context/TodoListWithContext";
import './App.scss';

const HomeComponent = () => {
    return (
        <React.Fragment>
            Available examples:
            <ul>
                <li>
                    <Link to="/todo-context">React Context</Link>
                </li>
            </ul>
        </React.Fragment>
    )
}

function App() {
    return (
        <BrowserRouter>
            <Link to="/">Home</Link>
            <div className="App d-flex flex-column">
                <Routes>
                    <Route path={"/"} element={<HomeComponent/>}/>
                    <Route path={"/todo-context"}
                           element={<TodoListWithContext/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
