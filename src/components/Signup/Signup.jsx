import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleNameChange = (e) => {
    setFormName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setFormEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setFormPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', {
        name: formName,
        email: formEmail,
        password: formPassword,
      });

      console.log('Sign Up Response:', response.data);
      setSuccess('Sign Up successful! Please check your email to verify your account.');
    } catch (error) {
      console.error('Sign Up Error:', error.response ? error.response.data : error.message);
      setError(error.response && error.response.data.message 
               ? error.response.data.message 
               : 'An error occurred during sign up. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formName}
          onChange={handleNameChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formEmail}
          onChange={handleEmailChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formPassword}
          onChange={handlePasswordChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Sign Up</button>
    </form>
  );
};

export default SignUp;


























































































// import React, { useState } from 'react';
// import axios from 'axios';

// const SignUp = () => {
//   const [formName, setFormName] = useState('');
//   const [formEmail, setFormEmail] = useState('');
//   const [formPassword, setFormPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleNameChange = (e) => {
//     setFormName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setFormEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setFormPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       const response = await axios.post('http://localhost:3000/api/auth/signup', {
//         name: formName,
//         email: formEmail,
//         password: formPassword,
//       });
      
//       console.log('Sign Up Response:', response.data);
//       setSuccess('Sign Up successful! Please check your email to verify your account.');
//     } catch (error) {
//       console.error('Sign Up Error:', error);
//       setError('An error occurred during sign up. Please try again.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formName}
//           onChange={handleNameChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formEmail}
//           onChange={handleEmailChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
//       <div className="mb-6">
//         <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formPassword}
//           onChange={handlePasswordChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       {success && <p className="text-green-500 mb-4">{success}</p>}
//       <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Sign Up</button>
//     </form>
//   );
// };

// export default SignUp;
