import React from "react";
import "./DoctorDashboard.css";
import { useState } from "react";

function DoctorDashboard() {

    const [status, setStatus] = useState("Not Available");
  return (
    <>

      <div className="doctor-dashboard">

        {/* Welcome */}
        <div className="dashboard-header">
          <h1>Good Morning 👋</h1>
          <p>Here's your overview for today.</p>
        </div>


        {/* Overview Cards */}
        <div className="dashboard-cards">

          <div className="dashboard-card">
            <span className="card-icon">👥</span>
            <div>
              <h3>12</h3>
              <p>Today's Patients</p>
            </div>
          </div>

          <div className="dashboard-card">
            <span className="card-icon">📅</span>
            <div>
              <h3>8</h3>
              <p>Today's Appointments</p>
            </div>
          </div>

          <div className="dashboard-card">
            <span className="card-icon">✓</span>
            <div>
              <h3>96</h3>
              <p>Completed Consultations</p>
            </div>
          </div>

          <div className="dashboard-card">
            <span className="card-icon">👨‍⚕️</span>
            <div>
              <h3>124</h3>
              <p>Total Patients</p>
            </div>
          </div>

        </div>


        {/* Availability */}
        <div className="dashboard-section">
          <h3>Availability</h3>

          <div className="availability-card">

            <div className="current-status">
              <span className="status-dot"></span>
              <span>Available</span>
            </div>

            <div className="availability-buttons">
              <button className={status === "Available" ? "active available" : ""}
              onClick={()=>setStatus("Available")}>Available</button>
              <button  className={status === "Busy" ? "active busy" : ""}
               onClick={()=>setStatus("Busy")}>Busy</button>
              <button className={status === "Not Available" ? "active not-available" : ""}
              onClick={()=>setStatus("Not Available")}>Not Available</button>
            </div>

          </div>
        </div>


        {/* Patient Overview */}
        <div className="dashboard-section">
          <h3>Patient Overview</h3>

          <div className="patient-overview">

            <div>
              <h4>124</h4>
              <p>Total Patients</p>
            </div>

            <div>
              <h4>18</h4>
              <p>New This Month</p>
            </div>

            <div>
              <h4>96</h4>
              <p>Completed Consultations</p>
            </div>

            <div>
              <h4>28</h4>
              <p>Pending Consultations</p>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default DoctorDashboard;