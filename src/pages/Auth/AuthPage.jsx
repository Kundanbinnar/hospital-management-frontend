import React, { useState } from 'react';
import './LoginPage.css';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

function Auth() {
  
  const [loginPage, setLoginPage] = useState(true);

  return (
    <div className="auth-page">

      <div className="auth-left">

        <div className="hospital-content">

          <div className="hospital-icon">
            ✚
          </div>

          <h1>
            Care<span>Plus</span>
          </h1>

          <p>
            Your health, our priority.
            <br />
            Connecting patients and doctors with better care.
          </p>

          <div className="health-stats">

            <div>
              <h3>24/7</h3>
              <span>Support</span>
            </div>

            <div>
              <h3>10+</h3>
              <span>Doctors</span>
            </div>

            <div>
              <h3>20+</h3>
              <span>Patients</span>
            </div>

          </div>

        </div>

      </div>


      <div className="auth-right">

      {loginPage &&  (<LoginPage setLoginPage={setLoginPage}/>)}

      {!loginPage && (<RegisterPage setLoginPage={setLoginPage}/>)}
         
       
       {/* <RegisterPage /> */}

      </div>

    </div>
  );
}

export default Auth;