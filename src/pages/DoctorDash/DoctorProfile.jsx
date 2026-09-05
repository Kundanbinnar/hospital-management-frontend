import React, { useState } from "react";
import { useNavigate , useLocation } from 'react-router-dom';
import "./DoctorProfile.css";
import AuthenticationServices from "../../services/AuthenticationServices";
import { useEffect } from "react";
import DoctorSerivces from "../../services/DoctorSerivces";

function DoctorProfile() {

    const navigate = useNavigate();
    const location = useLocation();
    const [successMessage, setSuccessMessage] = useState("");

    const username = location.state?.username || '';
    const email = location.state?.email || '';
    const doctorid = location.state?.id || '';
    const isRegistration = !!location.state?.id;

    const [formData, setFormData] = useState({
        name: username,
        experience: '',
        gender: '',
        specialization: '',
        status: '',
        consultationFee: '',
        qualification: '',
        about: '',
        email: email
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

   if(isRegistration){
      AuthenticationServices.saveDoctorProfile(doctorid, formData)
      .then((response)=>{
        console.log(response.data);
          setTimeout(() => {
           navigate('/');
         }, 2000);
            })
        }else{
             DoctorSerivces.updateMyProfileDoctor(formData)
        .then((response)=>{
            console.log(response.data);
            setSuccessMessage("Doctor updated successfully!");
        setTimeout(() => {
           setSuccessMessage("");
         }, 3000);
        })
        .catch((error)=>{
            console.log(error);
        })
        }
    }

    //useEffect
    useEffect(()=>{
        DoctorSerivces.getMyProfileDoctor()
        .then((response)=>{
            console.log(response.data);
            setFormData(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

    return (
        <div className="doctor-profile-page">

            {/* PROFILE HEADER */}

            <div className="doctor-profile-top">

                <div className="doctor-profile-avatar">
                    DR
                </div>

                <div className="doctor-profile-title">
                    <span>DOCTOR PROFILE</span>
                    <h1>Professional Information</h1>
                    <p>Manage your personal and professional details</p>
                </div>

            </div>

            {successMessage && (
            <div className="success-message">
                {successMessage}
            </div>
        )}

            {/* ================= FORM ================= */}

            <form
                className="doctor-profile-form"
                onSubmit={onSubmit}
            >


                {/* PERSONAL INFORMATION */}

                <div className="doctor-profile-section">

                    <div className="doctor-section-title">
                        <h2>Personal Information</h2>
                        <span>Basic details</span>
                    </div>

                    <div className="doctor-fields">

                        <div className="doctor-field">

                            <label>Full Name</label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter full name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                        </div>


                        <div className="doctor-field">

                            <label>Gender</label>

                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="">
                                    Select gender
                                </option>

                                <option value="Male">
                                    Male
                                </option>

                                <option value="Female">
                                    Female
                                </option>

                                <option value="Other">
                                    Other
                                </option>

                            </select>

                        </div>

                    </div>

                </div>


                {/* ================= PROFESSIONAL INFORMATION ================= */}

                <div className="doctor-profile-section">

                    <div className="doctor-section-title">
                        <h2>Professional Information</h2>
                        <span>Medical credentials</span>
                    </div>

                    <div className="doctor-fields">


                        {/* SPECIALIZATION */}

                        <div className="doctor-field">

                            <label>Specialization</label>

                            <select
                                name="specialization"
                                value={formData.specialization}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Select specialization
                                </option>

                                <option value="Cardiologist">
                                    Cardiologist
                                </option>

                                <option value="Dermatologist">
                                    Dermatologist
                                </option>

                                <option value="Neurologist">
                                    Neurologist
                                </option>

                                <option value="Orthopedic">
                                    Orthopedic
                                </option>

                                <option value="Pediatrician">
                                    Pediatrician
                                </option>

                                <option value="Gynecologist">
                                    Gynecologist
                                </option>

                                <option value="Psychiatrist">
                                    Psychiatrist
                                </option>

                                <option value="General Physician">
                                    General Physician
                                </option>

                                <option value="Ophthalmologist">
                                    Ophthalmologist
                                </option>

                                <option value="Dentist">
                                    Dentist
                                </option>

                            </select>

                        </div>


                        {/* QUALIFICATION */}

                        <div className="doctor-field">

                            <label>Qualification</label>

                            <input
                                type="text"
                                name="qualification"
                                placeholder="e.g. MBBS, MD"
                                value={formData.qualification}
                                onChange={handleChange}
                            />

                        </div>


                        {/* EXPERIENCE */}

                        <div className="doctor-field">

                            <label>Years of Experience</label>

                            <input
                                type="number"
                                name="experience"
                                placeholder="Enter experience"
                                min="0"
                                value={formData.experience}
                                onChange={handleChange}
                            />

                        </div>


                        {/* CONSULTATION FEE */}

                        <div className="doctor-field">

                            <label>Consultation Fee</label>

                            <div className="fee-input">

                                <span>₹</span>

                                <input
                                    type="number"
                                    name="consultationFee"
                                    placeholder="Enter fee"
                                    min="0"
                                    value={formData.consultationFee}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>


                        {/* STATUS */}

                        <div className="doctor-field">

                            <label>Professional Status</label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Select status
                                </option>

                                <option value="Available">
                                    Available
                                </option>

                                <option value="Unavailable">
                                    Unavailable
                                </option>

                            </select>

                        </div>

                         <div className="doctor-field">

                            <label>Email</label>

                            <input
                                type="text"
                                name="email"
                                placeholder="Enter full name"
                                value={formData.email}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                </div>


                {/* ================= ABOUT ================= */}

                <div className="doctor-profile-section">

                    <div className="doctor-section-title">
                        <h2>About Doctor</h2>
                        <span>Professional summary</span>
                    </div>

                    <div className="doctor-field">

                        <textarea
                            name="about"
                            placeholder="Tell patients about your experience, expertise and professional background..."
                            rows="5"
                            value={formData.about}
                            onChange={handleChange}
                        ></textarea>

                    </div>

                </div>


                {/* ================= SAVE ================= */}

                <div className="doctor-profile-actions">

                    <button type="submit">
                        Save Changes
                        <span>→</span>
                    </button>

                </div>

            </form>

        </div>
    );
}

export default DoctorProfile;