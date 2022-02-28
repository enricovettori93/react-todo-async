import React from 'react';
import {Link} from "react-router-dom";
import './App.scss';

function App() {
    return (
        <div className="App d-flex flex-column">
            Some random stuff
            <Link to={"/todo-context"}>Todolist with react context</Link>
        </div>
    );
}

export default App;
