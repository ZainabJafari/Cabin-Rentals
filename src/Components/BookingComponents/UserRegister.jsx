import React, { useState } from 'react';
import img1 from '../../assets/image 179.png'
import img2 from '../../assets/image 180.png'
import img3 from '../../assets/image 181.png'
import img4 from '../../assets/image 182.png'
import {Link} from 'react-router-dom'

const UserRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNummer: '',
    streetAdress: '',
    city: '',
    state: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch('http://localhost:7777/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Autharization': "Bearer ..."
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json()
        console.log('Register successful:', data);
        localStorage.setItem("TOKEN", data.token)
        setFormData({
          fullName: '',
          email: '',
          password: '',
          phoneNummer: '',
          streetAdress: '',
          city: '',
          state: ''
        });
      } else {
        console.error('Failed to submit form data to the backend.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (

    <div className='register'>
    <div className='input-form'>
      <h3 className='register'>Create Account</h3>
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="fullName">fullName</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
      <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
      <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div>
      <label htmlFor="phoneNummer">Phone number</label>
        <input
          type="tel"
          id="phoneNummer"
          name="phoneNummer"
          value={formData.phoneNummer}
          onChange={handleChange}
          required
        />
      </div>

      <div>
      <label htmlFor="streetAdress">Adress</label>
        <input 
          type="text"
          id="streetAdress"
          name="streetAdress"
          value={formData.streetAdress}
          onChange={handleChange}
          required
          placeholder="Street Adress"
        />
      </div>

      <div>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          placeholder="(city)"

        />
      </div>

      <div>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
          placeholder="State/Province"
        />
      </div>    
     <Link to={'/bookingInformation'} className='btn-btn'><button className='btn-btn-submit' type="submit">Submit</button></Link> 
    </form>
            
    </div>

    <div className='pay-metod'>
      <p>Payment Method:</p>
      <img src={img1} alt="Master card" />
      <input type="checkbox"/>
      <img src={img2} alt="Klarna" />
      <input type="checkbox" />
      <img src={img3} alt="paypal" />
      <input type="checkbox" />
      <img src={img4} alt="express" />
      <input type="checkbox" />

    </div>
    </div>
  );
};

export default UserRegister;
