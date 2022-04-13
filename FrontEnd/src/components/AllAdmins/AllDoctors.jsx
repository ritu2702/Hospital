import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { baseurl } from "../../api/service";
import "./AllDoctors.css";
import "react-toastify/dist/ReactToastify.css";

export const AllDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getAllDoctorsFromServer();
  }, []);

  const getAllDoctorsFromServer = () => {
    axios.get(`${baseurl}/api/doctors`).then(
      (response) => {
        console.log(response.data);
        setDoctors(response.data);
        const result = response.data;
        if (result !== []) {
          toast.success("All Doctors Loaded");
        } else {
          toast.dark("No data present");
        }
      },
      (error) => {
        console.log(error);
        toast.error("Error occured in server");
      }
    );
  };

  const deleteDoctors = (id) => {
    axios.delete(`${baseurl}/api/deleteDoctor/${id}`).then(
      (response) => {
        console.log(id);
        console.log(response);
        getAllDoctorsFromServer();
        toast.success("Entry Deleted");
      },
      (error) => {
        console.log(error);
        toast.error("Error occured in Server");
      }
    );
  };

  const navigate = useNavigate();

  const addDoctorPage = (e) => {
    e.preventDefault();
    navigate("/adddoctor", { replace: true });
  };
  const backModalPage = (e) => {
    e.preventDefault();
    navigate("/adminmodal", { replace: true });
  };

  return (
    <div>
      <div className="doctorbody">
        <div className="alldoctorcontainer">
          <h3 className="doctorlist">List of Doctors</h3>
          <div className="backdoctortable">
            <table className="doctortable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile No</th>
                  <th>Speciality</th>
                  <th>Qualification</th>
                  <th>Experience</th>
                  <th>Arrival Time</th>
                  <th>Leaving Time</th>
                  <th>Password</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctors) => (
                  <tr key={doctors.id}>
                    <td>{doctors.name}</td>
                    <td>{doctors.email}</td>
                    <td>{doctors.mobileNo}</td>
                    <td>{doctors.speciality}</td>
                    <td>{doctors.qualification}</td>
                    <td>{doctors.experience}</td>
                    <td>{doctors.arrivalTime}</td>
                    <td>{doctors.leavingTime}</td>
                    <td>{doctors.password}</td>
                    <td>
                      <Link to={`/doctors/updateDoctor/${doctors.doctorId}`}>
                        <button className="btn btn-primary">Update</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteDoctors(doctors.doctorId);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="adddoctor">
        <button className="btn btn-info" onClick={addDoctorPage}>
          Add Doctor
        </button>
        <button className="btn btn-dark ml-3" onClick={backModalPage}>
          Back
        </button>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};
