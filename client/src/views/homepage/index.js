import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
    render() {
        return (
        <div className="HomePage">
        <h1>Home page</h1>
        <Link to='/login'>
            <li>Login</li>
        </Link>
        <Link to='/createuser'>
            <li>Create user</li>
        </Link>
        </div>
        );
    }
};

export default HomePage;