import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';
import Home from "./Home/Home";
import Login from "./Login/Login";

render(
    <BrowserRouter >
        <Switch>
            <Route exact path = "/" component = {App}/>
            <Route path = "/home" component = {Home}/>
            <Route path = "/login" component = {Login}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
