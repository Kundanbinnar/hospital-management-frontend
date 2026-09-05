import React, { useEffect, useState } from 'react';
import PatientServices from '../../services/PatientServices';
import './TodaysAppointment.css';

function TodaysAppointment({setPatientDetails, setMedicalDetails}) {
 
  const[patients, setPatient] = useState([]);
 
  const [addPrescriptionModal, setAddPrescriptionModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [formData, setFormData] = useState({
     diagnosis: "",
    notes: "",
    medicines: [
        {
            medicine: "",
            dosage: "",
            duration: ""
        }
    ]
  });

  const handleChange = (e) =>{
    const{ name, value}=e.target;

      setFormData({
        ...formData,
        [name]: value
    });
  }

  const handleMedicineChange=(e, index)=>{
    const{name, value} = e.target;
    const updatedMedicine = [...formData.medicines];

    updatedMedicine[index][name] = value;

    setFormData({
        ...formData,
        medicines: updatedMedicine
    });
    
  }

  const submitPrescriptionForm =  (e)=>{
        e.preventDefault();
        console.log(formData);
     const requestJSON = {
        appointment: {
            id: selectedAppointment.id
        },
        patient: {
            id: selectedAppointment.patient.id
        },
        doctor: {
            id: selectedAppointment.doctor.id
        },
        diagnosis: formData.diagnosis,
        notes: formData.notes,
        description: JSON.stringify(formData.medicines)
    };

    PatientServices.addPrescription(requestJSON)
    .then((response)=>{
      console.log(response.data);
      setAddPrescriptionModal(false);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    PatientServices.getPatientAppointments()
    .then((response)=>{
          console.log(response.data);
          const today = new Date().toISOString().split("T")[0];
        setPatient(response.data.filter(
          appointment=>appointment.status !="CANCELLED"  &&
                    appointment.appointmentDate === today
        ));
    
    })
    .catch((error)=>{
       console.log(error);
    })
  },[])
 
  const viewPatientProfile = (id) =>{
    PatientServices.getPatientView(id)
      .then((response)=>{
        console.log(response.data);
        setPatientDetails(response.data);
      })
      .catch((error)=>{
        console.log(error);
      })
  } 

  const viewMedicalDetails = (id) =>{
    PatientServices.getPatientsPrescriptions(id)
    .then((response)=>{
      console.log(response.data);
      setMedicalDetails(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return (
    <div>
      
       <div className="appointments-page">

        <div className="appointments-header">
          <h2>Today's Appointments</h2>
          <p>Appointments scheduled for today</p>
        </div>

        <div className="appointments-table-container">

          <table>
            <thead>
              <th>Date</th>
              <th>Time</th>
              <th>Patient Name</th>
              <th>Status</th>
              <th>Profile</th>
              <th>Medical History</th>
              <th>Add Prescription</th>
            </thead>
            <tbody>
              {patients.length === 0 ? (
                <tr>
                <td colSpan="6" className="no-data">
                   No appointments available
                 </td>
             </tr>
              ):(patients.map((patient)=>(
                <tr key={patient.id}>
                  <td>{patient.appointmentDate}</td>
                 <td>{patient.appointmentTime}</td>
                 <td>{patient.patient?.name}</td>
                 <td>{patient.status}</td>
                 <td><button id="viewPatient" onClick={()=>{viewPatientProfile(patient.patient.id)}}>View Profile</button></td>
                 <td><button id="viewMedicalInfo" onClick={()=>{viewMedicalDetails(patient.patient.id)}}>Medical History</button></td>
                 <td><button id="addPrescription" onClick={()=>{setSelectedAppointment(patient);setAddPrescriptionModal(true)}}>Add Prescription </button></td>
                </tr>

              )))}
            </tbody>
          </table>

   {addPrescriptionModal && (
    <div className="prescription-modal-overlay">

        <div className="prescription-modal">

            <div className="prescription-modal-header">
                <div>
                    <h2>Add Prescription</h2>
                </div>

                <button className="close-prescription-modal" onClick={() => setAddPrescriptionModal(false)}>✕</button>
            </div>

            <form className="prescription-form" onSubmit={submitPrescriptionForm}>
               <div className="form-group">
                    <label>Appointment Reason</label>
                    <textarea
                          rows="1"
                          value={selectedAppointment?.appointmentReason || ""}
                          placeholder="No appointment reason provided"
                          readOnly
                      />
                </div>

                <div className="form-group">
                    <label>Diagnosis</label>
                    <input type="text" placeholder="Enter diagnosis" name='diagnosis' value={formData.diagnosis}  onChange={handleChange}/>
                </div>

 {formData.medicines.map((medicine, index) => (
  <div className="medicine-container" key={index}>

    <div className="form-group">
      <div className="btn-display">
      <label>Medicine</label>

      {index === 0 ? (
        <button type="button" onClick={()=>{setFormData({
          ...formData,
          medicines:[ ...formData.medicines,
                { medicine: "", dosage: "", duration: "" }]
        })}}>+</button>
      ) : (
        <button type="button" onClick={()=>{
           setFormData({
            ...formData,
            medicines: formData.medicines.filter((_, i) => i !== index)
        });
        }}>−</button>
      )}
       </div>
      <input
        type="text"
        placeholder="e.g. Paracetamol 500mg"
        name ='medicine'
        value={medicine.medicine}
        onChange={(e)=>handleMedicineChange(e,index)}
       
      />
    </div>

    <div className="medicine-row">

      <div className="form-group">
        <label>Dosage</label>
        <select
          value={medicine.dosage}
          name='dosage'
          onChange={(e) => handleMedicineChange(e,index)}
        >
          <option value="">Select dosage</option>
          <option value="1-0-0">1-0-0</option>
          <option value="0-0-1">0-0-1</option>
          <option value="1-0-1">1-0-1</option>
          <option value="1-1-1">1-1-1</option>
        </select>
      </div>

      <div className="form-group">
        <label>Duration</label>
        <input
          type="text"
          placeholder="e.g. 5 days"
          name='duration'
          value={medicine.duration}
          onChange={(e) => handleMedicineChange(e,index)}
        />
      </div>

    </div>

  </div>
))}

                <div className="form-group">
                    <label>Doctor's Notes</label>
                    <textarea rows="2" placeholder="Enter instructions..." name='notes' value={formData.notes} onChange={handleChange}/>
                </div>

            

            <div className="prescription-modal-footer">
                <button className="cancel-prescription-btn" onClick={() => setAddPrescriptionModal(false)}>Cancel</button>
                <button type='submit' className="save-prescription-btn">Add Prescription</button>
            </div>
            </form>

        </div>

    </div>
)}
        </div>

        </div>
    </div>
  )
}

export default TodaysAppointment
