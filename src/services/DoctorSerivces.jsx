import React from 'react'
import axios from "axios";
import API_URL from './API_URL';

const BASE_URL = `${API_URL}/api/doctors`;

class DoctorService {

    getAllDoctors() {
        const token = localStorage.getItem("token");
        return axios.get(BASE_URL,{
            headers : {
                Authorization : `Bearer ${token}`
            }
        });
    }

    getMyProfileDoctor(){
        const token = localStorage.getItem("token");
        const myProfile_URL = `${BASE_URL}/myProfile`;
        return axios.get(myProfile_URL,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
    }

    updateMyProfileDoctor(requestJSON){
     const token = localStorage.getItem("token");
        const updateMyProfile_URL = `${BASE_URL}/updateMyProfile`;
         return axios.put(updateMyProfile_URL, requestJSON,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
    }

}

export default new DoctorService();