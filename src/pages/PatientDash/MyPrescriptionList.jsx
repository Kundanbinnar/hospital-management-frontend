import React, { useState, useEffect } from 'react'
import PatientServices from '../../services/PatientServices';
import PrescriptionCard from '../../component/Appointment/PrescriptionCard';

function MyPrescriptionList() {

    const[prescriptions, setPrescriptions] = useState([]);

   useEffect(()=>{
     PatientServices.getMyPrescriptions()
    .then((response)=>{
        console.log(response.data);
        setPrescriptions(response.data || []);
    })
    .catch((error)=>{
        console.log(error);
    })
   },[])   
  return (

    <div>
    <div className="my-prescription-container">

        {prescriptions.length === 0 ? (
    <div className="no-prescription">
      No Prescriptions Available
      
    </div>
  ) :(
      prescriptions.map((prescription)=>(
        <PrescriptionCard 
        key = {prescription.id}
        prescription = {prescription} />
    )))}

        </div>
    </div>
  )
}

export default MyPrescriptionList
