import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faCalendarCheck,
  faUserDoctor,
  faHospital,
  faFileMedical,
} from "@fortawesome/free-solid-svg-icons";
import "./Features.css";
import { useNavigate } from "react-router-dom";

export const Fetaures = () => {
  const navigate = useNavigate();

  const handleBookAppointment = (e) => {
    e.preventDefault();
    navigate("/registeruser");
  };
  const handleDoctorProfile = (e) => {
    e.preventDefault();
    navigate("/doctorprofile");
  };

  return (
    <div>
      <div className="features-section">
        <div className="features-container">
          <div className="features-inner">
            <div className="features-box">
              <div className="features-icon">
                <FontAwesomeIcon
                  className="icon-style"
                  icon={faCalendarCheck}
                  size="3x"
                ></FontAwesomeIcon>
                <h1 onClick={handleBookAppointment}>Book Appointment</h1>
                <p>Booking an online appointment</p>
              </div>
            </div>
            <div className="features-box">
              <div className="features-icon">
                <FontAwesomeIcon
                  className="icon-style"
                  icon={faUserDoctor}
                  size="3x"
                ></FontAwesomeIcon>
                <h1 onClick={handleDoctorProfile}>Doctor Details</h1>
                <p>All Doctors </p>
              </div>
            </div>
            <div className="features-box">
              <div className="features-icon">
                <FontAwesomeIcon
                  className="icon-style"
                  icon={faHospital}
                  size="3x"
                ></FontAwesomeIcon>
                <h1>Find Hospitals</h1>
                <p>Find Nearby Hospitals of your city</p>
              </div>
            </div>
            <div className="features-box">
              <div className="features-icon">
                <FontAwesomeIcon
                  className="icon-style"
                  icon={faFileMedical}
                  size="3x"
                ></FontAwesomeIcon>
                <h1>View Health Record</h1>
                <p>View your previous health records</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
