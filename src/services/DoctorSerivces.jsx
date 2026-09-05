import React from 'react'
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/doctors";

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
        const myProfile_URL = "http://localhost:8080/api/doctors/myProfile";
        return axios.get(myProfile_URL,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
    }

    updateMyProfileDoctor(requestJSON){
     const token = localStorage.getItem("token");
        const updateMyProfile_URL = "http://localhost:8080/api/doctors/updateMyProfile";
         return axios.put(updateMyProfile_URL, requestJSON,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
    }

}

export default new DoctorService();