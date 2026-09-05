import React, { useState } from 'react';
import AuthenticationServices from '../../services/AuthenticationServices';
import { useNavigate } from 'react-router-dom';

function RegisterPage({setLoginPage}) {

   const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword:'',
        role:''
    })

    const handleChange = (e) =>{
        const{name, value} = e.target;
         setFormData({
            ...formData,
          [name]:value
         })
    }

    const onSubmit = (e) =>{
        e.preventDefault();

 if (!formData.userName) {
    alert("Please enter your name");
    return;
  }

  if (!formData.email) {
    alert("Please enter your email");
    return;
  }

  if (!formData.password) {
    alert("Please enter your password");
    return;
  }

  if (formData.password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  if (formData.confirmPassword !== formData.password) {
    alert("Passwords do not match");
    return;
  }

  if (!formData.role) {
    alert("Please select Patient or Doctor");
    return;
  }

  const userData = {
  userName: formData.userName,
  email: formData.email,
  password: formData.password,
  role: formData.role
}; 

  AuthenticationServices.registeUser(userData)
  .then((response)=>{
    console.log(response.data);

    if(formData.role === "PATIENT"){
      navigate("/patient/profile", {
       state: {
        username: formData.userName,
        email : formData.email,
        id: response.data
     }
    });
    }else if(formData.role === "DOCTOR"){
      navigate("/doctor/profile", {
      state : {
        username : formData.userName,
        email : formData.email,
        id:response.data
      }
      });
    }

  })
  .catch((error)=>{
    console.log(error);
  })

 }

  return (
    <div className="register-card">

      <div className="welcome-text">
        <span>Create Account</span>

        <h2>Register to CarePlus</h2>

        <p>Enter your details to create your account</p>
      </div>


      <form className="register-form" onSubmit={onSubmit}>

        {/* Full Name */}
        <div className="form-group">

          <label>Full Name</label>

          <div className="input-wrapper">
            <span>👤</span>

            <input
              type="text"
              placeholder="Enter your full name"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>

        </div>


        {/* Email */}
        <div className="form-group">

          <label>Email Address</label>

          <div className="input-wrapper">
            <span>✉</span>

            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

        </div>


        {/* Password */}
        <div className="form-group">

          <label>Password</label>

          <div className="input-wrapper">
            <span>🔒</span>

            <input
              type="password"
              placeholder="Create a password"
               name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

        </div>


        {/* Confirm Password */}
        <div className="form-group">

          <label>Confirm Password</label>

          <div className="input-wrapper">
            <span>🔒</span>

            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

        </div>


        {/* Role */}
        <div className="form-group">

          <label>Register As</label>

          <div className="role-group">

             <label className="role-option">
                    <input
                    type="radio"
                    name="role"
                    value="PATIENT"
                    checked={formData.role === "PATIENT"}
                    onChange={handleChange}
                    />
                    👤 Patient
                </label>

             <label className="role-option">
                    <input
                    type="radio"
                    name="role"
                    value="DOCTOR"
                    checked={formData.role === "DOCTOR"}
                    onChange={handleChange}
                    />
                    👨‍⚕️ Doctor
                </label>

          </div>

        </div>


        {/* Register Button */}
        <button className="register-btn">
          Create Account
          <span>→</span>
        </button>

      </form>


      <div className="register-footer">

        <p>
          Already have an account?
          <button className="login-link" onClick={()=>{setLoginPage(true)}}>
            Login here
          </button>
        </p>

      </div>

    </div>
  );
}

export default RegisterPage;