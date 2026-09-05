import React from 'react';
import './Appointment.css';

function AppointmentCard({appointment, onCancelAppointment}) {
  return (
     <div className="my-appointment-card">
      <div className="my-appointment-header">
        <h3>Dr. {appointment.doctor.name}</h3>
        <span className={`status ${appointment.status.toLowerCase()}`}>
          {appointment.status}
        </span>
      </div>

      <div className="my-appointment-body">
        <p>
          <strong>Specialization:</strong> {appointment.doctor.specialization}
        </p>

        <p>
          <strong>Date:</strong> {appointment.appointmentDate}
        </p>

        <p>
          <strong>Time:</strong> {appointment.appointmentTime}
        </p>
      </div>

      <div className="my-appointment-footer">
        <button className="cancel-btn" onClick={onCancelAppointment}>Cancel Appointment</button>
      </div>
    </div>
  )
}

export default AppointmentCard
