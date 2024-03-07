// import React from 'react'
// import './CSS/LoginSignup.css'

// const LoginSignup = () => {
//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>Sign in</h1>
//         <div className="loginsignup-fields">
//           <input type="text" placeholder='Your Username'/>
//           <input type="email" placeholder='Email Address'/>
//           <input type="password" placeholder='Password'/>
//         </div>
//         <button>Continue</button>
//         <p className="loginsignup-login">Already have an Account? <span>Login here</span></p>
//         <div className="loginsignup-agree">
//           <input type="checkbox" name='' id=''/>
//           <p>By continuing, I agree to the ters of use & privacy policy.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginSignup

import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const correctEmail = "akilimatu1@gmail.com"; 
const correctPassword = "Boom123."; // Replace with your correct password

const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = () => {
    if (email === correctEmail && password === correctPassword) {
      // Successful sign-in logic here
      console.log("Successfully signed in!");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign in</h1>
        <div className="loginsignup-fields">
          <input 
            type="email" 
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSignIn}>Continue</button>
        <p className="loginsignup-error">{error}</p>
        <p className="loginsignup-login">Don't have an account? <span>Sign up here</span></p>
      </div>
    </div>
  );
};

export default LoginSignup;
