
import React from 'react'
import axios from "axios";

const LOGIN_URL = "http://localhost:8080/api/user/login";

class AuthenticationServices {

    loginUser(requestJSON) {
        return axios.post(LOGIN_URL, requestJSON);
    }

    registeUser(requestJSON){
        const  REGISTER_URL = "http://localhost:8080/api/user/register";
        return axios.post(REGISTER_URL, requestJSON);
    }

    savePatientProfile(id, requestJSON){
         const  savePatientProfile_URL = `http://localhost:8080/api/patient/${id}`;
         return axios.put(savePatientProfile_URL,requestJSON)
    }

    saveDoctorProfile(id, requestJSON){
        const  saveDoctorProfile_URL = `http://localhost:8080/api/doctors/${id}`;
         return axios.put(saveDoctorProfile_URL, requestJSON) 
    }

}

export default new AuthenticationServices();

