import React, { useState } from 'react';
import './BookAppointment.css';

function BookAppointment({doctor, onCancel, onSubmit}) {
    const[formData, setFormData] = useState({
      appointment_date : "",
      appointment_time : "",
      appointmentReason : ""
    })

    const handleChange = (e)  => {
      const{name, value} = e.target;

      setFormData({
        ...formData,
        [name]: value,
      })
    }

const handleSubmit = (e) => {
    e.preventDefault();
  const appointmentDetails = {
    doctorId: doctor.id,
    appointmentDate: formData.appointment_date,
    appointmentTime: formData.appointment_time,
    status: "CONFIRMED",
    appointmentReason :  formData.appointmentReason
    }

      onSubmit(appointmentDetails);
   } 
  return (
    <div className="appointment-container">

        <div className="appointment-card">

        <h2 className="appointment-title">Book Appointment</h2>

           {/* Doctor Details */}
        <div className="doctor-info">
          <h3>Doctor Details</h3>

          <div className="doctor-row">
            <label>Doctor Name</label>
            <span>{doctor.name}</span>
          </div>

          <div className="doctor-row">
            <label>Specialization</label>
            <span>{doctor.specialization}</span>
          </div>

          <div className="doctor-row">
            <label>Consultation Fee</label>
            <span>₹ {doctor.consultationFee}</span>
          </div>
        </div>

          {/* Appointment Form */}
        <form className="appointment-form" onSubmit={handleSubmit}>

          <h3>Appointment Details</h3>

          <div className="form-group">
            <label>Patient Name</label>
            <input
              type="text"
              placeholder="Enter patient name"
              onChange={handleChange}
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Appointment Date</label>
              <input type="date"
              name="appointment_date"
              value={formData.appointment_date}
              onChange={handleChange}/>
            </div>

            <div className="form-group">
              <label>Appointment Time</label>
              <input type="time"
              name="appointment_time"
              value={formData.appointment_time}
              onChange={handleChange}/>
            </div>

          </div>

          <div className="form-group">
            <label>Reason for Visit</label>

            <textarea
              rows="4"
              placeholder="Describe your problem"
              name="appointmentReason"
              onChange={handleChange}
              value={formData.appointmentReason}
            ></textarea>
          </div>

          <div className="button-group">
          <button type="button" className="cancel-btn" onClick={onCancel} >
              Cancel
            </button>

            <button type="submit" className="book-btn">
              Submit
            </button>
          </div>

        </form>

        </div>
      
    </div>
  )
}

export default BookAppointment
