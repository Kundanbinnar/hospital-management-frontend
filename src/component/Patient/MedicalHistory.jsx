import React from "react";
import "./MedicalHistory.css";

function MedicalHistory({medicalDetails ,onCloseMedicalDetails}) {
  return (
    <div className="medical-history-card">

      {/* Header */}
      <div className="medical-history-header">
        <div>
          <h2>Prescription History</h2>
        </div>

        <button className="close-history-btn" onClick={onCloseMedicalDetails}>✕</button>
      </div>

      {/* One Prescription */}
      {medicalDetails.map((medicalDetail)=>(
       
       <div className="MedicalHistory-card" key={medicalDetail.id}>

          {/* Top */}
          <div className="prescription-top">
            <div>
              <h3>{medicalDetail.appointmentReason}</h3>
              <div style={{ display: "flex", gap: "10px" }}>
              <p>{medicalDetail.appointmentDate}</p>
              <p>{medicalDetail.appointmentTime}</p>
            </div>
            </div>

            <span>{medicalDetail.doctorName}</span>
          </div>


          {/* Diagnosis */}
          <div className="prescription-section">
            <label>Diagnosis</label>
            <p>{medicalDetail.diagnosis}</p>
          </div>


          {/* Prescription */}
          <div className="prescription-section">
            <label>Prescription</label>

          <div className="medicine-list">
    {JSON.parse(medicalDetail.description).map((medicine, index) => (
        <div className="medicine-card" key={index}>
            <div className="medicine-title">
                Medicine {index + 1}
            </div>

            <div className="medicine-name">
                {medicine.medicine}
            </div>

            <div className="medicine-info">
                <span>
                    <strong>Dosage:</strong> {medicine.dosage}
                </span>
                <span>
                    <strong>Duration:</strong> {medicine.duration}
                </span>
            </div>
        </div>
    ))}
</div>
          </div>


          {/* Doctor's Notes */}
          <div className="prescription-section">
            <label>Doctor's Notes</label>
            <p>{medicalDetail.notes}</p>
          </div>

        </div>
      ))}
      


     

    </div>
  );
}

export default MedicalHistory;