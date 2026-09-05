import React, { useState, useEffect} from 'react'
import './PatientProfile.css';
import { useNavigate , useLocation } from 'react-router-dom';
import AuthenticationServices from '../../services/AuthenticationServices';
import PatientServices from '../../services/PatientServices';

function PatientProfile() {

    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const username = location.state?.username || '';
    const email = location.state?.email || '';
    const patientid = location.state?.id || '';
    const isRegistration = !!location.state?.id;
    
    const[formData, setFormData]=useState({
        name: username,
        emailId: email,
        dob: '',
        gender: '',
        bloodGroup: '',
        address:'',
        phoneNo:''
    })

    const handleChange=(e)=>{
     const{name, value} = e.target;

     setFormData({
        ...formData,
        [name]: value
     })
    }

    const onSubmit = (e) =>{
         e.preventDefault();
        console.log("submited");
        console.log(formData);

    if(isRegistration){
       AuthenticationServices.savePatientProfile(patientid, formData)
     .then((response)=>{
        console.log(response.data);
       setTimeout(() => {
        navigate('/');
       }, 2000);
     })
     .catch((error)=>{
        console.log(error);
     })
    }else{
      
      PatientServices.updatePatientProfile(formData)
      .then((response)=>{
       console.log("Updating existing profile");
       setSuccessMessage("Profile updated successfully!");
      })
      .catch((error)=>{
        console.log(error);
      })  

    setTimeout(() => {
        setSuccessMessage("");
    }, 3000);
    }
     
          
    }

    useEffect(() => {
    PatientServices.viewMyProfile()
      .then((response)=>{
        console.log(response.data);
        setFormData(response.data);
      })
      .catch((error)=>{
        console.log(error);
      })
  }, []);

  return (
    <>
   <div className="patient-profile-page">
     <div className="profile-card">

      <div className="welcome-text">
        <span>Patient Profile</span>

        <h2>Complete Your Profile</h2>

        <p>Please enter your details </p>
      </div>

        {successMessage && (
            <div className="success-message">
                {successMessage}
            </div>
        )}

      <form className="profile-form" onSubmit={onSubmit}>

        {/* Full Name */}
        <div className="form-group">
          <label>Full Name</label>

          <div className="input-wrapper">
            <span>👤</span>

            <input
              type="text"
              placeholder="Enter your full name"
              value = {formData.name}
              readOnly
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div className="form-group">
          <label>Date of Birth</label>

          <div className="input-wrapper">
            <span>📅</span>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
        </div>


        {/* Gender */}
        <div className="form-group">
          <label>Gender</label>

          <div className="role-group">

            <label className="role-option">
              <input
                type="radio"
                name="gender"
                value="MALE"
                checked = {formData.gender === "MALE"}
                onChange={handleChange}
              />
              Male
            </label>

            <label className="role-option">
              <input
                type="radio"
                name="gender"
                value="FEMALE"
                checked = {formData.gender === "FEMALE"}
                onChange={handleChange}
              />
              Female
            </label>

            <label className="role-option">
              <input 
                type="radio"
                name="gender"
                value="OTHER"
                checked = {formData.gender === "OTHER"}
                onChange={handleChange}
                
              />
              Other
            </label>

          </div>
        </div>


        {/* Blood Group */}
        <div className="form-group">
          <label>Blood Group</label>

          <div className="input-wrapper">
            <span>🩸</span>

            <select  name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}>
              <option value="">Select blood group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>


        {/* Phone Number */}
        <div className="form-group">
          <label>Phone Number</label>

          <div className="input-wrapper">
            <span>📱</span>

            <input
              type="tel"
              placeholder="Enter your phone number"
               name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* email  */}
        <div className="form-group">
            <label>Email</label>

            <div className="input-wrapper">
                <span>📧</span>

                <input
                type="email"
                placeholder="Enter your email"
                value={formData.emailId}
                readOnly
                />
            </div>
         </div>

        {/* Address */}
        <div className="form-group full-width">
          <label>Address</label>

          <div className="input-wrapper">
            <span>📍</span>

            <input
              type="text"
              placeholder="Enter your address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>


        {/* Submit */}
        <button type="submit" className="register-btn">
          Save Profile
          <span>→</span>
        </button>

      </form>
     </div>
    </div>
      
    </>
  )
}

export default PatientProfile
