
import React from 'react'
import axios from "axios";
import API_URL from './API_URL';

const LOGIN_URL = `${API_URL}/api/user/login`;

class AuthenticationServices {

    loginUser(requestJSON) {
        return axios.post(LOGIN_URL, requestJSON);
    }

    registeUser(requestJSON){
        const REGISTER_URL = `${API_URL}/api/user/register`;
        return axios.post(REGISTER_URL, requestJSON);
    }

    savePatientProfile(id, requestJSON){
         const  savePatientProfile_URL = `${API_URL}/api/patient/${id}`;
         return axios.put(savePatientProfile_URL,requestJSON)
    }

    saveDoctorProfile(id, requestJSON){
        const  saveDoctorProfile_URL = `${API_URL}/api/doctors/${id}`;
         return axios.put(saveDoctorProfile_URL, requestJSON) 
    }

}

export default new AuthenticationServices();

