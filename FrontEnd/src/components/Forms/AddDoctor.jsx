import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddDoctor.css";
import axios from "axios";
import { baseurl } from "../../api/service";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export const AddDoctor = () => {
  const navigate = useNavigate();

  function allDoctorPage(e) {
    e.preventDefault();
    navigate("/alldoctors", { replace: true });
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
        toast.success("Doctor Added Succesfully!");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="adddoctorfullcontainer">
      <div className="adddoctorregister">
        <div className="adddoctorcontainer">
          <div className="adddoctorregtitle">Register New Doctor</div>
          <form onSubmit={handleForm}>
            <div className="adddoctoruser-details">
              <div className="adddoctorinput-box">
                <span className="adddoctordetails">Name</span>
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
              <div className="adddoctorinput-box">
                <span className="adddoctordetails">Email</span>
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
              <div className="adddoctorinput-box">
                <span className="adddoctordetails">Phone</span>
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
              <div className="adddoctorinput-box">
                <span className="adddoctordetails">Speciality</span>
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
              <div className="adddoctorinput-box">
                <span className="adddoctordetails">Qualification</span>
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
              <div className="adddoctorinput-box">
                <span className="adddoctordetails">Experience</span>
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
              <div className="adddoctorinput-box">
                <span className="adddoctordetails">Arrival Time</span>
                <input
                  type="time"
                  name="=arrivalTime"
                  id="arrivalTime"
                  onChange={(e) => {
                    setInfo({ ...info, arrivalTime: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="adddoctorinput-box">
                <span className="adddoctordetails">Leaving Time</span>
                <input
                  type="time"
                  name="leavingTime"
                  id="leavingTime"
                  onChange={(e) => {
                    setInfo({ ...info, leavingTime: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="adddoctorinput-box">
                <span className="adddoctordetails">Password</span>
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
              <div className="adddoctorinput-box">
                <span className="adddoctordetails">Confirm Password</span>
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
            <div className="doctoraddbutton">
              <input type="submit" value="Add Doctor" />
            </div>
            <div className="doctoraddbutton">
              <input
                type="submit"
                value="Doctor List"
                onClick={allDoctorPage}
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};