import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";
import axios from "axios";
import { baseurl } from "../../api/service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddUser = () => {
  const navigate = useNavigate();

  function allUserPage(e) {
    e.preventDefault();
    navigate("/allusers", { replace: true });
  }

  const [info, setInfo] = useState({});

  const handleForm = (e) => {
    console.log(info);
    addDataToServer(info);
    e.preventDefault();
  };

  const addDataToServer = (data) => {
    //Add record
    axios.post(`${baseurl}/api/registerUsers`, data).then(
      (response) => {
        console.log(response);
        console.log("Success");
        toast.success("User Added Succesfully!");
      },
      (error) => {
        console.log(error);
        toast.error("Please try again", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
    );
  };

  return (
    <div className="adduserfullcontainer">
      <div className="adduserregister">
        <div className="addusercontainer">
          <div className="adduserregtitle">Register New User</div>
          <form onSubmit={handleForm}>
            <div className="adduser-details">
              <div className="adduserinput-box">
                <span className="adduserdetails">Name</span>
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
              <div className="adduserinput-box">
                <span className="adduserdetails">Email</span>
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
              <div className="adduserinput-box">
                <span className="adduserdetails">Mobile No</span>
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
              <div className="adduserinput-box">
                <span className="adduserdetails">Blood Group</span>
                <input
                  type="text"
                  placeholder="Enter your blood group"
                  name="bloodGroup"
                  id="bloodGroup"
                  onChange={(e) => {
                    setInfo({ ...info, bloodGroup: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="adduserinput-box">
                <span className="adduserdetails">Age</span>
                <input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Enter your age"
                  onChange={(e) => {
                    setInfo({ ...info, age: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="adduserinput-box">
                <span className="adduserdetails">Address</span>
                <textarea
                  className="adduseraddressbox"
                  placeholder="Enter your valid Address"
                  name="address"
                  id="address"
                  cols="30"
                  rows="1"
                  onChange={(e) => {
                    setInfo({ ...info, address: e.target.value });
                  }}
                ></textarea>
              </div>
              <div className="adduserinput-box">
                <span className="adduserdetails">Password</span>
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
              <div className="adduserinput-box">
                <span className="adduserdetails">Confirm Password</span>
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
            <div className="userbuttonadd">
              <input type="submit" value="Add User" />
            </div>
            <div className="userbuttonadd">
              <input type="submit" value="User List" onClick={allUserPage} />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
