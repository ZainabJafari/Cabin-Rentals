import React, { useState } from 'react';
import Navbar from './Navbar';
import {useNavigate, Navigate} from 'react-router-dom'
import UserRegister from './BookingComponents/UserRegister';

import axios from 'axios';

// axios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('TOKEN');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

const Login = () => {
  const [email, setEmail] = useState('sara@gmail.com');
  const [password, setPassword] = useState('sara');


  const Navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:7777/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer ..."
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        localStorage.setItem("TOKEN", data.token)
        // axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        Navigate('/')
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
    <UserRegister/>
    </div>
  );
};

export default Login;
