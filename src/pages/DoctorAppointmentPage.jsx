import React from 'react'
import { useState } from 'react';
import PatientDetails from '../component/Patient/PatientDetails';
import TodaysAppointment from '../component/Patient/TodaysAppointment';
import MedicalHistory from '../component/Patient/MedicalHistory';

function DoctorAppointmentPage() {

const[patientDetails, setPatientDetails] = useState(null);
const[medicalDetails, setMedicalDetails] = useState(null);

  return (
    <div>
       {patientDetails ? (<PatientDetails patientDetails= {patientDetails} onCloseDetails={()=>setPatientDetails(null)}  />)
       :  medicalDetails ? (<MedicalHistory medicalDetails ={medicalDetails} onCloseMedicalDetails={()=>setMedicalDetails(null)} />)  
       : (<TodaysAppointment  setPatientDetails={setPatientDetails} setMedicalDetails={setMedicalDetails} />)}

      
    </div>
  )
}

export default DoctorAppointmentPage
