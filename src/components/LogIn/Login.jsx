import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Log In Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Log In</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Log In</button>
    </form>
  );
};

export default Login;
