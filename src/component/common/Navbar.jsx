import React from 'react'
import { useState } from 'react';
import './Navbar.css';
import { useNavigate } from "react-router-dom";


function Navbar({setCurrentPage}) {

  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <div>

    <nav className="navbar navbar-expand-lg  bg-success">
    <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">
      Doctor Lab
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#" onClick={() => setCurrentPage("PatientHomePage")}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#"  onClick={() => setCurrentPage("doctors")}>
            Doctor
          </a>
        </li>  
        <li className="nav-item">
          <a className="nav-link text-white" href="#" onClick={() => setCurrentPage("appointments")}>
            My Appointments
          </a>
       
        </li>  
         <li className="nav-item">
          <a className="nav-link text-white" href="#">
           Contact Us
          </a>
        </li> 
      </ul>
      
        <div className="nav-right">
        <button className="btn btn-outline-success text-white" onClick={() => setShowDropdown(!showDropdown)}>
          Profile
       </button>
       {showDropdown && (
            <div className="profile-dropdown">
            <div onClick={()=>{setCurrentPage("PatientProfilePage")}}>View Profile</div>
            <div onClick={()=>{setCurrentPage("PrescriptionPage")}}>Appointment History</div>
            <div onClick={()=>{localStorage.removeItem("token"); localStorage.removeItem("role"); setShowDropdown(false); navigate("/");}}>Logout</div>
        </div>
          )}
      </div>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
