import React from 'react';
import './Footer.css';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-column">
          <div className="footer-widget">
            <div className="about-widget">
              <a href="https://svracademy.in/home/index">
                <img src="https://svracademy.in/assets/image/logo.png" alt="SVR Academy Logo" />
              </a>
              <div className="contact-info">
                <span>Office Number:</span>
                <a href="tel:6305207624">+(91) 6305207624</a>
                <br />
                <span>WhatsApp:</span>
                <a href="tel:7801086536">+(91) 7801086536</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-widget">
            <h3 className="widget-title">SVR Academy Best Online Coaching for APPSC/TSPSC Groups</h3>
            <p className="description">
              SVR Academy is specialized in Andhra Pradesh and Telangana for APPSC Group I, Group II &amp; Panchayat Secretaries, AP Police, TS Police, TET-DSC, RRB NTPC, and many more Central and state exams. The best coaching center for APPSC/TSPSC GROUPS and other competitive exams located in Visakhapatnam and Hyderabad.
            </p>
            <div className="social-links">
              <a href="https://www.youtube.com/channel/UCI20M_CVSwi26xF1X6q4OFA" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.facebook.com/svracademyappsc/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://t.me/joinchat/AAAAAFVc56JOb4a-uGRTfQ" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="https://www.instagram.com/svracademy6/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://svracademy.blogspot.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://svracademy.in/assets/image/blogger.png" alt="Blogger" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-widget">
            <h3 className="widget-title">Important Links</h3>
            <ul className="footer-links">
              <li><a href="https://svracademy.in/home/about">About Company</a></li>
              <li><a href="./index.html#course1">Online Coaching</a></li>
              <li><a href="#">Study Materials</a></li>
              <li><a href="https://svracademy.in/home/speciality">Our Speciality</a></li>
              <li><a href="https://svracademy.in/home/courses">Courses</a></li>
              <li><a href="#">Demo</a></li>
              <li><a href="https://svracademy.in/home/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
