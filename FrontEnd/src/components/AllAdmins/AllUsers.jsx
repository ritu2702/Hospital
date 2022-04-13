import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { baseurl } from "../../api/service";
import "./AllUsers.css";
import "react-toastify/dist/ReactToastify.css";

export const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsersFromServer();
  }, []);

  const getAllUsersFromServer = () => {
    axios.get(`${baseurl}/api/users`).then(
      (response) => {
        console.log(response.data);
        setUsers(response.data);
        const result = response.data;
        if (result !== []) {
          toast.success("All Users Loaded");
        } else {
          toast.dark("No data present");
        }
      },
      (error) => {
        console.log(error);
        toast.error("Error occured in Server");
      }
    );
  };

  const deleteUser = (id) => {
    axios.delete(`${baseurl}/api/deleteUser/${id}`).then(
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

  const navigate = useNavigate();

  function addUserPage() {
    navigate("/adduser", { replace: true });
  }
  function backModalPage() {
    navigate("/adminmodal", { replace: true });
  }

  return (
    <div>
      <div className="userbody">
        <div className="allusercontainer">
          <h3 className="userlist">List of Users</h3>
          <div className="backtable">
            <table className="usertable">
              <thead>
                <tr>
                  <th>User Id</th>

                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile No</th>
                  <th>Age</th>
                  <th>Blood Group</th>
                  <th>Address</th>
                  <th>Password</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((users) => (
                  <tr key={users.id}>
                    <td>{users.userId}</td>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.mobileNo}</td>
                    <td>{users.age}</td>
                    <td>{users.bloodGroup}</td>
                    <td>{users.address}</td>
                    <td>{users.password}</td>
                    <td>
                      <Link to={`/users/updateUser/${users.userId}`}>
                        <button className="btn btn-primary">Update</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteUser(users.userId);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              className="adduserbutton btn btn-info"
              onClick={addUserPage}
            >
              Add User
            </button>
            <button
              className="backuserbutton btn btn-dark"
              onClick={backModalPage}
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};
