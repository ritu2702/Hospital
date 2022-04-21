import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { baseurl } from "../../api/service";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateAppointment = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const [appoint, setAppoint] = useState([]);

  const handlePageChange = (e) => {
    e.preventDefault();
    navigate("/appointmentTable", { replace: true });
  };

  const [user, setUser] = useState({
    id: id,
    name: "",
    email: "",
    speciality: "",
    timeofapp: "",
    doctorname: "",
    dateofapp: "",
    patientProblem: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  useEffect(() => {
    console.log(id);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseurl}/api/getByappointid/${user.id}`
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getSpeciality = async () => {
      try {
        const response = await axios.get(`${baseurl}/api/doctors`);
        console.log(response.data);
        setAppoint(response.data);
        console.log(appoint);
      } catch (error) {
        console.log(error);
      }
    };
    getSpeciality();
  }, []);

  const updateUser = (e) => {
    e.preventDefault();
    console.log(user);
    updateUserData(id, user);
    toast.success("Data Updated");
  };

  const updateUserData = (id, user) => {
    axios
      .put(`${baseurl}/api/editAppoint/${id}`, user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="modalTitle">
            <h2>Book Appointment</h2>
          </div>
          <div className="modalBody">
            <form>
              <div className="modal-details">
                <div className="modalinput-box">
                  <span className="modaldetails">Name</span>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    name="name"
                    id="name"
                    value={user.name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="modalinput-box">
                  <span className="modaldetails">Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="modalinput-box">
                  <span className="modaldetails">Speciality</span>
                  <select
                    name="speciality"
                    id="speciality"
                    className="selectSpecialityapp"
                    value={user.speciality}
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
                  </select>
                </div>
                <div className="modalinput-box">
                  <span className="modaldetails">Doctor Name</span>
                  <select
                    name="doctorname"
                    id="doctorname"
                    className="selectSpecialityapp"
                    value={user.doctorname}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="">--Select Doctor--</option>
                    {appoint.map((appointment) => (
                      <option key={appointment.id} value={appointment.id}>
                        {appointment.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="modalinput-box">
                  <span className="modaldetails">Time</span>
                  <input
                    type="time"
                    placeholder="Enter Time"
                    name="timeofapp"
                    id="timeofapp"
                    value={user.timeofapp}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="modalinput-box">
                  <span className="modaldetails">Date</span>
                  <input
                    type="date"
                    name="dateofapp"
                    id="dateofapp"
                    placeholder="Enter your date"
                    value={user.dateofapp}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="modalinput-box">
                  <span className="modaldetails">Problem</span>
                  <input
                    type="text"
                    name="patientProblem"
                    id="patientProblem"
                    placeholder="Enter your Problem"
                    value={user.patientProblem}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="modalFooter">
                <button type="reset">Clear</button>
                <button type="submit" onClick={updateUser}>
                  Update
                </button>
                <button onClick={handlePageChange}>Back</button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
};
