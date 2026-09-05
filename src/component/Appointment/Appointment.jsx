import React, { useEffect, useState } from 'react';
import AppointmentService from '../../services/AppointmentService';
import './Appointment.css';
import AppointmentCard from './AppointmentCard';
import DoctorPage from '../../pages/PatientDash/DoctorPage';
import '../Doctor/DoctorCard.css';

function Appointment({setSuccessMessage}) {

    const [appointment, setAppointments] = useState([]);
 const [successMessage1, setSuccessMessage1] = useState("");
    
   const getAppointments = () => {
    AppointmentService.getAllAppointmentsByEmail()
        .then((response) => {
            const filterData = response.data.filter(
                appointment => appointment.status !== "CANCELLED"
            );

            console.log(filterData);
            setAppointments(filterData);
        })
        .catch((error) => {
            console.log(error);
        });
}

    const handleCancelAppointment = (id) =>{
        AppointmentService.cancelAppointment(id)
        .then((response)=>{
             setSuccessMessage1(response.data);
              getAppointments();

              setTimeout(()=>{
                setSuccessMessage1("");
              },3000);
        })
        .catch((error) => {
            console.log(error);
        });
    }

      useEffect(() => {
        getAppointments();
    }, []);


  return (
     <div className="my-appointment-container">

         {successMessage1 && (
            <div className="success-message">
                {successMessage1}
            </div>
        )}
      <h2>My Appointments</h2>

       {appointment.length === 0 ? (
    <div className="no-appointments">
      No appointments yet
      
    </div>
  ) :(
      appointment.map((appointment) => (
    <AppointmentCard
        key={appointment.id}
        appointment={appointment}
        onCancelAppointment={()=>handleCancelAppointment(appointment.id)}
    />
   )))}

    </div>
  )
}

export default Appointment
