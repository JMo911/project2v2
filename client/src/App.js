import React from 'react';
import './App.css';
import './views/createuserpage';
import './views/loginpage';
import CreateUserPage from './views/createuserpage';
import LoginPage from './views/loginpage';
import HomePage from './views/homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path='/' exact component={HomePage}></Route>
      <Route path='/createuser' exact component={CreateUserPage}></Route>
      <Route path='/login' exact component={LoginPage}></Route>
    </div>
    </Router>
  );
}

export default App;
