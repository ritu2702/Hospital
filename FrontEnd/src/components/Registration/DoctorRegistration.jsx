import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorRegistration.css";
import axios from "axios";
import { baseurl } from "../../api/service";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export const DoctorRegistration = () => {
  const navigate = useNavigate();

  function handlePageChange(e) {
    e.preventDefault();
    navigate("/logindoctor", { replace: true });
  }

  const [info, setInfo] = useState({});

  const handleForm = (e) => {
    console.log(info);
    postDataToServer(info);
    e.preventDefault();
  };

  const postDataToServer = (data) => {
    axios.post(`${baseurl}/api/registerDoctors`, data).then(
      (response) => {
        console.log(response);
        console.log("Success");
        toast.success("Succesful Registration!");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="doctorfullcontainer">
      <div className="doctorregister">
        <div className="doctorcontainer">
          <div className="doctorregtitle">Registration</div>
          <form onSubmit={handleForm}>
            <div className="doctoruser-details">
              <div className="doctorinput-box">
                <span className="doctordetails">Name</span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                  id="name"
                  onChange={(e) => {
                    setInfo({ ...info, name: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="doctorinput-box">
                <span className="doctordetails">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  onChange={(e) => {
                    setInfo({ ...info, email: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="doctorinput-box">
                <span className="doctordetails">Phone</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  name="mobileNo"
                  id="mobileNo"
                  onChange={(e) => {
                    setInfo({ ...info, mobileNo: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="doctorinput-box">
                <span className="doctordetails">Speciality</span>
                <input
                  type="text"
                  placeholder="Enter your Speciality"
                  name="speciality"
                  id="speciality"
                  onChange={(e) => {
                    setInfo({ ...info, speciality: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="doctorinput-box">
                <span className="doctordetails">Qualification</span>
                <input
                  type="text"
                  name="qualification"
                  id="qualification"
                  placeholder="Enter your qualification"
                  onChange={(e) => {
                    setInfo({ ...info, qualification: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="doctorinput-box">
                <span className="doctordetails">Experience</span>
                <input
                  type="number"
                  name="experience"
                  id="experience"
                  placeholder="Enter your Experience"
                  onChange={(e) => {
                    setInfo({ ...info, experience: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="doctorinput-box">
                <span className="doctordetails">Arrival Time</span>
                <input
                  type="time"
                  name="=arrivalTime"
                  id="arrivalTime"
                  onChange={(e) => {
                    setInfo({ ...info, arrivalTime: e.target.value });
                  }}
                />
              </div>
              <div className="doctorinput-box">
                <span className="doctordetails">Leaving Time</span>
                <input
                  type="time"
                  name="leavingTime"
                  id="leavingTime"
                  onChange={(e) => {
                    setInfo({ ...info, leavingTime: e.target.value });
                  }}
                />
              </div>
              <div className="doctorinput-box">
                <span className="doctordetails">Password</span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  onChange={(e) => {
                    setInfo({ ...info, password: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="doctorinput-box">
                <span className="doctordetails">Confirm Password</span>
                <input
                  type="password"
                  placeholder="Re-Enter Password"
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={(e) => {
                    setInfo({ ...info, confirmPassword: e.target.value });
                  }}
                  required
                />
              </div>
            </div>
            <div className="doctorbutton">
              <input type="submit" value="Register" />
            </div>
            <div className="doctorintext">Or</div>
            <div className="doctorbutton">
              <input type="submit" value="Login" onClick={handlePageChange} />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
