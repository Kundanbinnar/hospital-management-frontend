import React from "react";
import "./PrescriptionCard.css";

function PrescriptionCard({ prescription }) {

  const medicines = JSON.parse(prescription.description || "[]");

  return (
    <div className="prescription-card">

      <div className="prescription-header">
        <div>
          <span className="prescription-label">Doctor</span>
          <h3>{prescription.doctorName}</h3>
        </div>

        <div>
          <span className="prescription-label">Date</span>
          <p>{prescription.appointmentDate}</p>
        </div>

        <div>
          <span className="prescription-label">Time</span>
          <p>{prescription.appointmentTime}</p>
        </div>
      </div>

      <div className="prescription-reason">
        <span className="prescription-label">Reason for Visit</span>
        <p>{prescription.appointmentReason || "Not provided"}</p>
      </div>

      <div className="prescription-body">

        <div className="prescription-title">
          <h4>Prescription</h4>
          <span>{medicines.length} Medicine{medicines.length !== 1 ? "s" : ""}</span>
        </div>

        <div className="medicine-table">

          <div className="medicine-row medicine-header">
            <div>Medicine</div>
            <div>Dosage</div>
            <div>Duration</div>
          </div>

          {medicines.map((medicine, index) => (
            <div className="medicine-row" key={index}>
              <div className="medicine-name">
                {medicine.medicine}
              </div>

              <div>
                {medicine.dosage}
              </div>

              <div>
                {medicine.duration}
                days
              </div>
            </div>
          ))}

        </div>

      </div>

      {prescription.diagnosis && (
        <div className="prescription-info">
          <span className="prescription-label">Diagnosis</span>
          <p>{prescription.diagnosis}</p>
        </div>
      )}

      {prescription.notes && (
        <div className="prescription-info">
          <span className="prescription-label">Doctor's Notes</span>
          <p>{prescription.notes}</p>
        </div>
      )}

    </div>
  );
}

export default PrescriptionCard;

