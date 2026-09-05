import React from 'react'
import './DoctorCard.css';

function DoctorCard({doctor, onBook, onView}) {
  return (
    <>

     <div className="doctor-card">
       <div className={`doctor-status ${doctor.status?.toLowerCase()}`}>
         {doctor.status}
       </div>
       <div className="doctor-image-section">
        <img
            src={doctor.imageUrl}
            alt={doctor.name}
            className="doctor-img"
        />
    </div>

      <div className="doctor-details">
        <h3>{doctor.name}</h3>
        <p className="specialization">{doctor.specialization}</p>

        <p><strong>Experience: </strong>{doctor.experience}</p>
        <p><strong>Consultation Fee: </strong> ₹{doctor.consultationFee}</p>

        <div className="btn-group">
          <button className="profile-btn" onClick={()=> onView(doctor.id)} >View Profile</button>
          <button className="book-btn" id={doctor.id} onClick={()=> onBook(doctor)}>Book Appointment</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default DoctorCard
