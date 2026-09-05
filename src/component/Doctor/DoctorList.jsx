import React from 'react';
import DoctorCard from './DoctorCard';
import './DoctorCard.css';
import DoctorSerivces from '../../services/DoctorSerivces';
import { useEffect, useState } from 'react';

function DoctorList({onBook, onView}) {

  const [doctors, setDoctors] = useState([]);

  useEffect(()=>{
    DoctorSerivces.getAllDoctors()
    .then((response) => {
      setDoctors(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  return (
    <div>
      
       <div className="doctor-list-container">
      <div className="doctor-list-heading">
        <h2>Doctor List</h2>
      </div>

      <div className="doctor-list">
        {doctors.map((doctor) =>(
        <DoctorCard 
        key={doctor.id}
        doctor={doctor} 
        onBook = {onBook}
        onView = {onView}
        />
        ))}
      </div>
    </div>
    </div>
  )
}

export default DoctorList
