import React from 'react';
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/appointment";


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
