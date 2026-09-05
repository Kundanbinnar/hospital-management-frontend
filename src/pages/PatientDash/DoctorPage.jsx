import React from 'react';
import { useState } from 'react';
import BookAppointment from '../../component/Appointment/BookAppointment';
import DoctorList from '../../component/Doctor/DoctorList';
import AppointmentService from '../../services/AppointmentService';
import '../../component/Doctor/DoctorCard.css';

function DoctorPage() {

    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [viewDoctor, setViewDoctor] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
   
    const handleBookAppointment = (data) => {
      console.log(data);

      AppointmentService.bookAppointment(data)
      .then((response)=>{
        console.log(response.data);
        setSuccessMessage("Appointment booked successfully!");
        setTimeout(() =>{
          setSelectedDoctor(null);
        },3000)
        

            // Remove message after 3 seconds
            setTimeout(() => {
                setSuccessMessage("");
            }, 6000);
      })
      .catch((error)=>{
        console.log(error);
         setSuccessMessage(error.response.data);

    setTimeout(() => {
        setSuccessMessage("");
    }, 3000);
      })
    }


  return (
    <>

        {successMessage && (
            <div className="success-message">
                {successMessage}
            </div>
        )}
    {selectedDoctor ? (
        <BookAppointment doctor={selectedDoctor}  onCancel = {()=>setSelectedDoctor(null)} onSubmit = {handleBookAppointment}/>
    ): (<DoctorList onBook={setSelectedDoctor} onView={setViewDoctor} />

    )}
    </>
  )
}

export default DoctorPage
