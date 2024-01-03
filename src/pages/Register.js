import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));

    if (storedUsers) {
      const { email: storedEmail, password: storedPassword } = storedUsers;
      setEmail(storedEmail);
      setPass(storedPassword);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password: pass,
      orders: []
    };

    const storedUsers = JSON.parse(localStorage.getItem('users')) || {};
    const updatedUsers = {
      ...storedUsers,
      [email]: newUser
    };

    localStorage.setItem('users', JSON.stringify(updatedUsers));

    setEmail('');
    setPass('');
  }

  return (
    <div className="formContainer">  
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail Address"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <Link to={"/login"} id="register">LOGIN</Link> 
      </form>
    </div>
  )
}
