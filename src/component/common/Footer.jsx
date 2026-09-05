import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h3>Doctor Lab</h3>
          <p>
            Your simple and convenient way to
            book doctor appointments.
          </p>
        </div>


        <div className="footer-links">
          <h4>Quick Links</h4>

          <p>Home</p>
          <p>Doctors</p>
          <p>My Appointments</p>
        </div>


        <div className="footer-contact">
          <h4>Contact Us</h4>

          <p>Email: support@doctorlab.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>


      <div className="footer-bottom">
        <p>© 2026 Doctor Lab. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;