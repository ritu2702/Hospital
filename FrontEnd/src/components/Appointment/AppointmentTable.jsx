import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "../../api/service";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "./AppointmentTable.css";

export const AppointmentTable = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsersFromServer();
  }, []);

  const getAllUsersFromServer = () => {
    axios.get(`${baseurl}/api/appoint`).then(
      (response) => {
        console.log(response.data);
        setUsers(response.data);
        const result = response.data;
        if (result !== []) {
          toast.success("All Appointments Loaded");
        }
        if (result === []) {
          toast.dark("No Data Present");
        }
      },
      (error) => {
        console.log(error);
        toast.error("Error occured in Server");
      }
    );
  };

  const deleteAppointment = (id) => {
    axios.delete(`${baseurl}/api/deleteAppoint/${id}`).then(
      (response) => {
        console.log(id);
        console.log(response);
        getAllUsersFromServer();
        const result = response;
        if (result === 0) {
          toast.success("Entry Deleted");
        }
      },
      (error) => {
        console.log(error);
        toast.error("Error occured in Server");
      }
    );
  };

  const approveAppointment = (id, data) => {
    axios.put(`${baseurl}/api/approved/${id}`, data).then((response) => {
      console.log(id, data);
      console.log(response.data);
      let result = response.data;
      if (result === 0) {
        console.log(result);
        toast.success("Mail Sent Successfully");
      }
      if (result === 1) {
        console.log(result);
        toast.error("Error While Sending Mail");
      }
    });
  };

  const handlePageChange = (e) => {
    e.preventDefault();
    navigate("/adminmodal", { replace: true });
  };
  const handlePageChangeRefresh = (e) => {
    e.preventDefault();
    navigate("/appointmentTable", { replace: true });
  };
  return (
    <div>
      <div className="appointbody">
        <div className="allappointcontainer">
          <h3 className="appointlist">List of Appointment</h3>
          <div className="appointtable">
            <table className="appointtable">
              <thead>
                <tr>
                  <th>User Id</th>
                  <th>Name</th>
                  <th>Doctor Name</th>
                  <th>Email</th>
                  <th>Speciality</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Problem</th>
                  <th>Update</th>
                  <th>Delete</th>
                  <th>Approve</th>
                </tr>
              </thead>
              <tbody>
                {users.map((users) => (
                  <tr key={users.id}>
                    <td>{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.doctorname}</td>
                    <td>{users.email}</td>
                    <td>{users.speciality}</td>
                    <td>{users.timeofapp}</td>
                    <td>{users.dateofapp}</td>
                    <td>{users.patientProblem}</td>
                    <td>
                      <Link to={`/updateappoint/${users.id}`}>
                        <button className="btn btn-primary">Update</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteAppointment(users.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() => {
                          approveAppointment(users.id, users);
                        }}
                      >
                        Approve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="appointmentbutton">
              <button className=" btn btn-dark" onClick={handlePageChange}>
                Back
              </button>
              <button
                className="btn btn-dark ml-3"
                onClick={handlePageChangeRefresh}
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};
