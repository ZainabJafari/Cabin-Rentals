import React, { useState , useContext} from 'react';
import Navbar from './Navbar';
import {useNavigate, Navigate , Link} from 'react-router-dom'
import UserRegister from './BookingComponents/UserRegister';
import {useOrderContext} from '../Context/orderContext'

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
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        localStorage.setItem("TOKEN", data.token)
        setEmail('');
        setPassword('');
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  
  const { createOrder  } = useOrderContext()
  const [isChecked, setIsChecked] = useState(false);


  const _createOrder = async () => {
    const response = await createOrder(isChecked)

    if(response) {
      //TODO: navigate user
      console.log('order is ' , response);
      // Navigate()
    }
    //TODO: error handling
  }


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

       <button type="button" onClick={(handleLogin)}>
          Login
        </button>
      </form>
    </div>
    <div className='link-login'>
       <Link to={'/BookinInfo'}>
       <button className='btn-btn-login' onClick={_createOrder}>My order</button>
        </Link> 
       <Link to={'/'}>
       <button className='btn-btn-login'>Home</button>
        </Link> 
    </div>
    <UserRegister/>
    </div>
  );
};

export default Login;
