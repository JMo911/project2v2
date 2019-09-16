import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

class LoginPage extends React.Component {
    render() {
        return (
        <div className="LoginPage">
        <h1>login page</h1>
        <form>
        <label htmlFor="username">username</label>
            <input type="text" name="username"></input>
            <label htmlFor="password">password</label>
            <input type="password" name="password"></input>   
            <button type='submit' id='loginsubmit'>Submit</button>
        </form>
        <Link to='/createuser'>
            <li>Create user</li>
        </Link>
        <Link to='/'>
            <li>Home page</li>
        </Link>
        </div>
        );
    }
};

export default LoginPage;