import React, { useState } from 'react';
import './LoginPage.css';
import AuthenticationServices from '../../services/AuthenticationServices';
import { useNavigate } from 'react-router-dom';

function Login({setLoginPage}) {

  const navigate = useNavigate();
 
  const [formData, setFormData] = useState({
  email: '',
  password: ''
  });

  const handleChange = (e) => {

    const {name,value}= e.target;

      setFormData({
        ...formData,
        [name]:value
      })  
  }

  const onSubmit = (e) =>{
       e.preventDefault();

    AuthenticationServices.loginUser(formData)
    .then((response)=>{
      console.log(response.data);

      const token = response.data.token;
      const role = response.data.role;

    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    if(role === "PATIENT"){
      navigate("/patient");
    }else if(role === "DOCTOR"){
      navigate("/doctor");
    }
    })
  }

  return (
    <div className="login-card">

      <div className="welcome-text">
        <span>Welcome Back</span>

        <h2>Login to your account</h2>

        <p>Enter your details to continue</p>
      </div>


      <form className="login-form" onSubmit={onSubmit}>

        <div className="form-group">
          <label>Email Address</label>

          <div className="input-wrapper">
            <span>✉</span>

            <input
              type="email"
              placeholder="Enter your email"
              name= "email"
              value = {formData.email}
              onChange={handleChange}
            />
          </div>
        </div>


        <div className="form-group">
          <label>Password</label>

          <div className="input-wrapper">
            <span>🔒</span>

            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value = {formData.password}
              onChange={handleChange}
            />
          </div>
        </div>


        <div className="login-options">

          <label className="remember">
            <input type="checkbox" />
            Remember me
          </label>

          <a href="/">Forgot Password?</a>

        </div>


        <button className="login-btn">
          Login
          <span>→</span>
        </button>

      </form>


      <div className="login-footer">

        <p>
          Don't have an account?
          <button className="login-link" onClick={()=>{setLoginPage(false)}}>
            Register here
          </button>
        </p>

      </div>

    </div>
  );
}

export default Login;