//import { Router } from "express";
//import "./Login.css";
//import React from "react";
//import { Routes } from "react-router-dom";

//function index(){
    //return (
      //  <Router>
         //   <div className="container">
           //     <header>
             //       <Routes path="/" elements="">
               //         

                 //   </Routes>
                //</header>

            //</div>
        //</Router>
    //)
//}
//export default index;
import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your login logic here, such as sending the data to the server
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} action="login-page.php" method="post">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;


