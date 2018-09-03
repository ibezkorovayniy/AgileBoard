import React, {Component} from 'react';
import './App.css';
import {Link} from "react-router-dom";

class App extends Component {

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Welcome to Agile Board</h1>
                    <Link to="/login">
                        <button style={style}>Login</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default App;
