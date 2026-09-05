import React from 'react'
import Navbar from '../../component/common/Navbar'
import { useState } from 'react';
import Appointment from '../../component/Appointment/Appointment';
import DoctorPage from './DoctorPage';
import PatientHomePage from './PatientHomePage';
import PatientProfile from './PatientProfile';
import PrescriptionCard from '../../component/Appointment/PrescriptionCard';
import MyPrescriptionList from './MyPrescriptionList';

function PatientDashboard() {

  //patient@gmail.com
  //test@123
    const [currentPage, setCurrentPage] = useState("PatientHomePage");

  return (
    <div>

       <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === "PatientHomePage" && (
    <PatientHomePage setCurrentPage={setCurrentPage} />)}

     {currentPage === "doctors" && <DoctorPage />}
     {currentPage === "appointments" && <Appointment />}
     {currentPage === "PatientProfilePage" && <PatientProfile />}
     {currentPage === "PrescriptionPage" && < MyPrescriptionList/>}

    </div>
  )
}

export default PatientDashboard
