import React from 'react';
import axios from "axios";
import API_URL from './API_URL';

const BASE_URL = `${API_URL}/api/appointment`;

class AppointmentService {
 
    getAllAppointmentsByEmail(){ 
        const token = localStorage.getItem("token");
        return axios.get(`${BASE_URL}/myAppointment`,{
            headers : {
             Authorization : `Bearer ${token}`
            }
        })
   
    }

    bookAppointment(appointmetDetails){
         const token = localStorage.getItem("token");
        return axios.post(`${BASE_URL}`, appointmetDetails,{
            headers :{
                Authorization : `Bearer ${token}`
            }
        });
    }

    cancelAppointment(id) {
         const token = localStorage.getItem("token");
    return axios.put(`${BASE_URL}/${id}/status?status=CANCELLED`, null,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
}
}

export default new AppointmentService();
