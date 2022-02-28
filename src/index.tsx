import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.scss';
import App from './views/App';
import TodoListWithContext from "./views/TodoListWithContext";
import {TodoContextProvider} from "./context/TodoContextProvider";
import reportWebVitals from './reportWebVitals';

const {worker} = require('./mocks/browser')
worker.start();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App/>}/>
                <Route path={"/todo-context"}
                       element={<TodoContextProvider><TodoListWithContext/></TodoContextProvider>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();