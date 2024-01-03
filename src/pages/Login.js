import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {changeStatusToLoggedIn} from "../slices/loginStatusSlice"
import {useDispatch} from "react-redux";
import {storeUserEmail} from "../slices/userEmailSlice"

export const Login = () => { // Use object destructuring for the props
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();  

    const storedUsers = JSON.parse(localStorage.getItem('users')) || {};

    // Check if the user email and password match with stored data
    if (storedUsers[email]?.password === pass) {
      // Set login status to true
      dispatch(changeStatusToLoggedIn());
      navigate('/');
    } else {
      alert('USER_DOES_NOT_EXIST');
    }  
  };

  return (  
    <div className="formContainer">  
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail Address"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value); dispatch(storeUserEmail(e.target.value))}}
          
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        
        <button type="submit" id="submit">SUBMIT</button>
        
        <Link to={"/register"} id="register">REGISTER</Link> 

      </form>
    </div>
  )
};
