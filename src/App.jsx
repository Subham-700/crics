// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/Signup/Signup"
import Login from "./components/LogIn/Login"
// import cricket from "./assets/cricket.json";

// import Lottie from "lottie-react"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/Signup" component={SignUp} />
          <Route path="/Login" component={Login} />
          <Route path="/" element={
            <main className="flex flex-1 flex-col items-center justify-center text-center p-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to Cricket Journal
              </h1>
              <p className="text-gray-600 mb-6">
              Your personal space to log and track cricket games, scores, and more.
              </p>
              <blockquote className="text-2xl md:text-3xl italic text-gray-800 max-w-2xl mx-auto">
              "Cricket is more than just a game, it's a way of life." - Rahul Dravid
              </blockquote>
              {/* <Lottie animationData={cricket} /> */}
            </main>
          } />
          </Routes>
        <Footer />
      </div>
      </Router>
  );
}

export default App;
