import React from 'react'
import DoctorNavbar from '../../component/common/DoctorCommon/DoctorNavbar';
import TodaysAppointment from '../../component/Patient/TodaysAppointment';
import DoctorDashboard from './DoctorDashboard';
import { useState } from 'react';
import PatientDetails from '../../component/Patient/PatientDetails';
import DoctorProfile from './DoctorProfile';
import MedicalHistory from '../../component/Patient/MedicalHistory';

function DoctorHomePage() {
//docotr@gmail.com
//doctor123
     const [currentPage, setCurrentPage] = useState("DoctorHomePage");
     const [patientDetails, setPatientDetails] = useState(null);

  // Medical history
  const [medicalDetails, setMedicalDetails] = useState(false);
  return (
    <div>

        <DoctorNavbar setCurrentPage={setCurrentPage} />

        {currentPage == "DoctorHomePage" &&(
         <DoctorDashboard setCurrentPage={setCurrentPage} />)}

         {currentPage === "todaysAppointment" && (
        <>
          {!patientDetails  && !medicalDetails && (
            <TodaysAppointment
              setPatientDetails={setPatientDetails}
              setMedicalDetails={setMedicalDetails}
            />
          )}

          {patientDetails && (
            <PatientDetails
              patientDetails={patientDetails}
              onCloseDetails={() => setPatientDetails(null)}
            />
          )}

           {medicalDetails && (
            <MedicalHistory
              medicalDetails={medicalDetails}
              onCloseMedicalDetails={() => setMedicalDetails(null)}
            />
          )}
        </>
      )}

          {currentPage === "DoctorProfilePage" && <DoctorProfile />}
      
    </div>
  )
}

export default DoctorHomePage
