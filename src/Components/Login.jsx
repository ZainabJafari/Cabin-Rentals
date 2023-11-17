import React, { useState } from 'react';
import Navbar from './Navbar';

const Login = () => {
  const [email, setEmail] = useState('sara@gmail.com');
  const [password, setPassword] = useState('sara');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:7777/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Autharization': "Bearer ..."
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        localStorage.setItem("TOKEN", data.token)
        //TODO: route user to homepage
        // setEmail('');
        // setPassword('');
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <Navbar/>
    <div className='container-login'>
      <h1>Welcome to Northernnest Retreats</h1>
      <form>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
