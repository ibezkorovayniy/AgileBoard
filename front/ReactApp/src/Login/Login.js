import React, {Component} from 'react'
import axios from 'axios'
import './Login.css'
import {Redirect} from "react-router-dom";

class Login extends Component {

    state = {
        username : '',
        password : '',
        redirect: false
    };

    changeUserHandler = (event)=> {
            this.setState({
            username: event.target.value
        })
    };

    changePasswordHandler = (event) => {
        this.setState ({
            password: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = 'username=' + this.state.username + '&password=' + this.state.password;
        axios({
            method: 'post',
            url: 'http://localhost:8080/login',
            data: data
        })
            .then(() => this.setState({redirect:true}))
            .catch(error => {
                console.log(error)
            })
    };


    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/home'/>;
        }
        return (
                <div className="Login">
                    <h4>Login</h4>
                    <label>Username </label>
                    <input type="text" name="username" placeholder="Username" onChange={this.changeUserHandler}/>
                    <br></br>
                    <p></p>
                    <label>Password </label>
                    <input type="password" name="password"  placeholder="Password" onChange={this.changePasswordHandler}/>
                    <br></br>
                    <p></p>
                    <input type="submit" className=" btn button success" value="Login" onClick={this.handleSubmit}/>
                </div>
        );
    }

}
export default Login;