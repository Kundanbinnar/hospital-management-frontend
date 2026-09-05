import Navbar from './component/common/Navbar';
import './App.css';

import Auth from './pages/Auth/AuthPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PatientDashboard from './pages/PatientDash/PatientDashboard';
import DoctorHomePage from './pages/DoctorDash/DoctorHomePage';
import PatientProfile from './pages/PatientDash/PatientProfile';
import DoctorProfile from './pages/DoctorDash/DoctorProfile';

function App() {
  return (
    // <div>
    //   {/* <Navbar setCurrentPage={setCurrentPage} />
    //   {currentPage === "homepage" && (
    // <HomePage setCurrentPage={setCurrentPage} />)}

    //  {currentPage === "doctors" && <DoctorPage />}
    //  {currentPage === "appointments" && <Appointment />} */}
    //  {/* <DoctorNavbar /> */}
    //  {/* <DoctorDashboard /> */}
    //  {/* <TodaysAppointment /> */}
    //  {/* <PatientDetails /> */}
    //  {/* <DoctorAppointmentPage /> */}
    //   <Auth />
    // </div>

    <BrowserRouter>
     
     <Routes>

        {/* Authentication */}
        <Route path="/" element={<Auth />} />

        {/* Patient */}
        <Route path="/patient" element={<PatientDashboard />} />

        {/* Doctor */}
        <Route path="/doctor" element={<DoctorHomePage/>} />

        <Route path="/patient/profile" element={<PatientProfile />} />

        <Route path="/doctor/profile" element={<DoctorProfile />} />
      

     </Routes>

    </BrowserRouter>
  );
}

export default App;
