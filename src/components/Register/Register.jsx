// src/components/Register.js

import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users', formData);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
