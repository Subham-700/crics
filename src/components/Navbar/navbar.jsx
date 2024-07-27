import React, { useState } from 'react';
import Modal from "../Modal/Modal"
import SignUp from '../Signup/Signup';
import Login from '../LogIn/Login';

const Navbar = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
        <img src="src\assets\Dark Illustrative The Mafia Gaming Logo (8).png" alt="" className="w-10" />
        
          <h1 className="text-2xl font-bold">Cricket Journal</h1>
        </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Journal</a>
            <a href="#" className="hover:text-gray-300">Scores</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </nav>
          <div>
            <button onClick={() => setIsSignUpOpen(true)} className="bg-green-600 px-4 py-2 rounded mr-2">Sign Up</button>
            <button onClick={() => setIsLoginOpen(true)} className="bg-blue-600 px-4 py-2 rounded">Log In</button>
          </div>
        </div>
      </nav>
      <Modal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)}>
        <SignUp />
      </Modal>
      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <Login />
      </Modal>
    </>
  );
};

export default Navbar;


{/* <nav className="hidden md:flex space-x-6">
<a href="#" className="hover:text-gray-300">Home</a>
<a href="#" className="hover:text-gray-300">About</a>
<a href="#" className="hover:text-gray-300">Journal</a>
<a href="#" className="hover:text-gray-300">Scores</a>
<a href="#" className="hover:text-gray-300">Contact</a>
</nav> */}