import React from "react";
import "./PatientDetails.css";

function PatientDetails({patientDetails, onCloseDetails}) {
    console.log("PatientDetails rendered:", patientDetails);
  return (
    <>
    <div className="patient-details-card">

      {/* Header */}
      <div className="patient-details-header">

        <div className="patient-avatar">  JD</div>

        <div>
          <h2>{patientDetails.name}</h2>
          <p>{patientDetails.age}Years | {patientDetails.gender}</p>
        </div>

      </div>

      {/* Personal Information */}
      <div className="patient-details-section">

        <h3>Personal Information</h3>

        <div className="patient-details-grid">

          <div className="patient-detail">
            <label>Date of Birth</label>
            <p>{patientDetails.dob}</p>
          </div>

          <div className="patient-detail">
            <label>Gender</label>
            <p>{patientDetails.gender}</p>
          </div>

          <div className="patient-detail">
            <label>Blood Group</label>
            <p>{patientDetails.bloodGroup}</p>
          </div>

        </div>

      </div>

      {/* Contact Information */}
      <div className="patient-details-section">

        <h3>Contact Information</h3>

        <div className="patient-details-grid">

          <div className="patient-detail">
            <label>Phone Number</label>
            <p>{patientDetails.phoneNo}</p>
          </div>

          <div className="patient-detail">
            <label>Email</label>
            <p>{patientDetails.emailId}</p>
          </div>

          <div className="patient-detail patient-detail-full">
            <label>Address</label>
            <p>{patientDetails.address}</p>
          </div>
        </div>
      </div>

      {/* Medical Information */}
      <div className="patient-details-section">

        <h3>Medical Information</h3>

        <div className="patient-details-grid">

          <div className="patient-detail">
            <label>Allergies</label>
            <p>None</p>
          </div>

          <div className="patient-detail">
            <label>Medical Conditions</label>
            <p>Diabetes</p>
          </div>

          <div className="patient-detail patient-detail-full">
            <label>Current Medications</label>
            <p>Metformin 500mg</p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="patient-details-footer">
        <button onClick={onCloseDetails}>Close</button>
      </div>

    </div>
    </>
  );
}

export default PatientDetails;