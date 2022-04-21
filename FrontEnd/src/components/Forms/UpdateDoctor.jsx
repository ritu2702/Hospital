import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddUser.css";
import axios from "axios";
import { baseurl } from "../../api/service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UpdateDoctor = () => {
  const { id } = useParams();

  const [doctor, setDoctor] = useState({
    id: id,
    name: "",
    email: "",
    mobileNo: "",
    speciality: "",
    qualification: "",
    experience: "",
    arrivalTime: "",
    leavingTime: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setDoctor({ ...doctor, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseurl}/api/getByDoctorid/${doctor.id}`
        );
        setDoctor(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateDoctor = (e) => {
    e.preventDefault();
    console.log(doctor);
    updateDoctorData(id, doctor);
    toast.success("Data Updated");
  };

  const updateDoctorData = (id, doctor) => {
    axios
      .put(`${baseurl}/api/editDoctor/${id}`, doctor)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  function allDoctorPage(e) {
    e.preventDefault();
    navigate("/alldoctors", { replace: true });
  }

  return (
    <div className="adddoctorfullcontainer">
      <div className="adddoctorregister">
        <div className="adddoctorcontainer">
          <div className="adddoctorregtitle">Register New Doctor</div>
          <form>
            <div className="adddoctoruser-details">
              <div className="adddoctorinput-box">
                <span className="adddoctordetails">Name</span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                  id="name"
                  value={doctor.name}
                  onChange={(e) => handleChange(e)}
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
                  value={doctor.email}
                  onChange={(e) => handleChange(e)}
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
                  value={doctor.mobileNo}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="adddoctorinput-box">
                <span className="adddoctordetails">Speciality</span>
                <select
                  name="speciality"
                  id="speciality"
                  className="selectSpecialityadd"
                  value={doctor.speciality}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="">--Select Speciality--</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Oncology">Oncology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Gastroenterology">Gastroenterology</option>
                  <option value="Gynaecology">Gynaecology</option>
                  <option value="Orthopaedics">Orthopaedics</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Diabetology">Diabetology</option>
                  <option value="Endocrinology">Endocrinology</option>
                  <option value="Ent">Ent</option>
                  <option value="General Physician">General Physician</option>
                  <option value="General Surgery">General Surgery</option>
                  <option value="Nephrology">Nephrology</option>
                  <option value="Neurosurgery">Neurosurgery</option>
                  <option value="Urology">Urologuy</option>
                  <option value="Opthamology">Opthamology</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Psychiatry">Psychaitry</option>
                  <option value="Pulmonology">Pulmonology</option>
                </select>
              </div>
              <div className="adddoctorinput-box">
                <span className="adddoctordetails">Qualification</span>
                <input
                  type="text"
                  name="qualification"
                  id="qualification"
                  placeholder="Enter your qualification"
                  value={doctor.qualification}
                  onChange={(e) => handleChange(e)}
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
                  value={doctor.experience}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="adddoctorinput-box">
                <span className="adddoctordetails">Arrival Time</span>
                <input
                  type="time"
                  name="=arrivalTime"
                  id="arrivalTime"
                  value={doctor.arrivalTime}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="adddoctorinput-box">
                <span className="adddoctordetails">Leaving Time</span>
                <input
                  type="time"
                  name="leavingTime"
                  id="leavingTime"
                  value={doctor.leavingTime}
                  onChange={(e) => handleChange(e)}
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
                  value={doctor.password}
                  onChange={(e) => handleChange(e)}
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
                  value={doctor.confirmPassword}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
            </div>
            <div className="doctoraddbutton">
              <input
                type="submit"
                value="Update Doctor"
                onClick={updateDoctor}
              />
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
      <ToastContainer autoClose={2000} />
    </div>
  );
};
