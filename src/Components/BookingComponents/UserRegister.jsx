import React, { useState } from 'react';
import img1 from '../../assets/image 179.png';
import img2 from '../../assets/image 180.png';
import img3 from '../../assets/image 181.png';
import img4 from '../../assets/image 182.png';
import { Link } from 'react-router-dom';

const UserRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    streetAddress: '',
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
          'Authorization': "Bearer ..."
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Register successful:', data);
        localStorage.setItem("TOKEN", data.token);
        setFormData({
          fullName: '',
          email: '',
          password: '',
          phoneNumber: '',
          streetAddress: '',
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
    <div className="register-container">
      <div className="form-section">
        <h3>Create Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
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
          <div className="form-group">
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
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="streetAddress">Street Address</label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State/Province</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
        </form>
      </div>
      <div className="payment-methods">
        <p>Payment Method:</p>
        <div className="payment-options">
          <label>
            <input type="checkbox" />
            <img src={img1} alt="MasterCard" />
          </label>
          <label>
            <input type="checkbox" />
            <img src={img2} alt="Klarna" />
          </label>
          <label>
            <input type="checkbox" />
            <img src={img3} alt="PayPal" />
          </label>
          <label>
            <input type="checkbox" />
            <img src={img4} alt="Express" />
          </label>
        </div>
      </div>
     <Link to={'/bookingInformation'}>
    <button className="btn-submit" type="submit" form="register-form">Submit</button>  </Link>
    </div>
  );
};

export default UserRegister;
