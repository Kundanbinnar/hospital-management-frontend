import axios from "axios";
import React from "react";


const BASE_URL = "http://localhost:8080/api/appointment";

const getPatient = "http://localhost:8080/api/patient";

class PatientServices{

    getPatientAppointments(id){

        const token = localStorage.getItem("token");
        return axios.get(`${BASE_URL}/doctorId`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
    }

    getPatientView(id){
        const token = localStorage.getItem("token");
        return axios.get(`${getPatient}/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
    }

    // mistakenly written patients role service here (only 1st 3 services)
    viewMyProfile(){
        const token = localStorage.getItem("token");
        const myProfile_url = "http://localhost:8080/api/patient/myProfile";
        return axios.get(myProfile_url, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
    }
//2
     updatePatientProfile(requestJSON){
            const token = localStorage.getItem("token")
            const updateMyProfile_URL = "http://localhost:8080/api/patient/updateMyProfile";
            return axios.put(updateMyProfile_URL, requestJSON,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
        }

        //3
        getMyPrescriptions(){
          const token = localStorage.getItem("token")
          const getPrescription_URL = "http://localhost:8080/api/prescription/myPrescriptions";
            return axios.get(getPrescription_URL,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
        }

       getPatientsPrescriptions(id){
        const token = localStorage.getItem("token")
        const getPatientPrescription_URL = `http://localhost:8080/api/prescription/patient/${id}`;
        return axios.get(getPatientPrescription_URL,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
       }

       addPrescription(requestJSON){
        const token = localStorage.getItem("token")
        const addPrescription_URL = `http://localhost:8080/api/prescription/addPrescription`;
        return axios.post(addPrescription_URL, requestJSON,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
       }
}

export default new PatientServices();