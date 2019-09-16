import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CreateUserPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        //allows us to stop the form submission from refreshing the page
        event.preventDefault();
        const data = this.state;
        axios.post('http://localhost:8080/api/users', data)
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    handleInputChange = (event) => {
        event.preventDefault();
        // THE SQUARE BRACES ALLOW US TO DYNAMICALLY SET THE KEY FOR STATE BASED ON THE INPUT'S NAME
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    render() {
        return (
        <div className="CreateUserPage">
        <h1>create user page</h1>
        <form onSubmit={this.handleSubmit}>
            {/* FIRST NAME */}
            <label htmlFor="firstname">first name</label>
            <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleInputChange}></input>
            {/* LAST NAME */}
            <label htmlFor="lastname">lastname</label>
            <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleInputChange}></input>
            {/* USERNAME */}
            <label htmlFor="username">username</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}></input>
            {/* PASSWORD */}
            <label htmlFor="password" >password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}></input>
            {/* CAR INFO */}
            {/* <label for="licenseplate">licenseplate</label>
            <input type="licenseplate" name="licenseplate"></input>
            <label for="carmake">carmake</label>
            <input type="carmake" name="carmake"></input>
            <label for="carmodel">carmodel</label>
            <input type="carmodel" name="carmodel"></input>
            <label for="carcolor">carcolor</label>
            <input type="carcolor" name="carcolor"></input> */}
            <input type="submit" value="Submit" />
        </form>
        <Link to='/login'>
            <li>Login</li>
        </Link>
        <Link to='/'>
            <li>Home page</li>
        </Link>
        </div>
        );
    }
};

export default CreateUserPage;