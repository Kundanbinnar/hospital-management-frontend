import React from 'react';
import './HomePage.css';
import Footer from '../../component/common/Footer';

function PatientHomePage({ setCurrentPage }) {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="home-hero">

        <div className="hero-content">
          <h1>Your Health, Our Priority</h1>

          <p>
            Book an appointment with the right doctor
            at a time that works for you.
          </p>

          <button
            className="book-now-btn"
            onClick={() => setCurrentPage("doctors")}
          >
            Book an Appointment
          </button>
        </div>

      </section>


      {/* How It Works */}
      <section className="how-section">

        <h2>Find Healthcare Easily</h2>

        <div className="steps-container">

          <div className="step-card">
            <div className="step-number">1</div>

            <h3>Choose a Doctor</h3>

            <p>
              Browse available doctors and
              choose the right one for you.
            </p>
          </div>


          <div className="step-card">
            <div className="step-number">2</div>

            <h3>Select Date & Time</h3>

            <p>
              Select a convenient date and
              appointment time.
            </p>
          </div>


          <div className="step-card">
            <div className="step-number">3</div>

            <h3>Get Confirmed</h3>

            <p>
              Book your appointment and
              check its status anytime.
            </p>
          </div>

        </div>

      </section>


      {/* Why Doctor Lab */}
      <section className="why-section">

        <h2>Why use Doctor Lab?</h2>

        <div className="why-container">

          <div className="why-card">
            <h3>Easy Booking</h3>
            <p>
              Book your doctor appointment
              in just a few simple steps.
            </p>
          </div>


          <div className="why-card">
            <h3>Trusted Doctors</h3>
            <p>
              Choose from a list of available
              and experienced doctors.
            </p>
          </div>


          <div className="why-card">
            <h3>Simple Management</h3>
            <p>
              View and manage your appointments
              from one place.
            </p>
          </div>

        </div>

      </section>


      {/* Appointment Section */}
      <section className="appointment-section">

        <h2>Ready to book your appointment?</h2>

        <button
          className="book-now-btn"
          onClick={() => setCurrentPage("doctors")}
        >
          Find a Doctor
        </button>

      </section>

      <Footer/>

    </div>
  );
}

export default PatientHomePage;