import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserRegistration.css";
import axios from "axios";
import { baseurl } from "../../api/service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserRegistration = () => {
  const navigate = useNavigate();

  function handlePageChange(e) {
    e.preventDefault();
    navigate("/loginuser", { replace: true });
  }

  const [info, setInfo] = useState({});

  const handleForm = (e) => {
    console.log(info);
    postDataToServer(info);
    e.preventDefault();
  };

  const postDataToServer = (data) => {
    axios.post(`${baseurl}/api/registerUsers`, data).then(
      (response) => {
        console.log(response.data);
        let result = response.data;

        if (result === 0) {
          console.log("Success");
          toast.success("Succcesful Registration!");
        }
        navigate("/loginuser", { replace: true });
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
    <div className="userfullcontainer">
      <div className="userregister">
        <div className="usercontainer">
          <div className="userregtitle">Registration</div>
          <form onSubmit={handleForm}>
            <div className="user-details">
              <div className="userinput-box">
                <span className="userdetails">Name</span>
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
              <div className="userinput-box">
                <span className="userdetails">Email</span>
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
              <div className="userinput-box">
                <span className="userdetails">Mobile No</span>
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
              <div className="userinput-box">
                <span className="userdetails">Blood Group</span>
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
              <div className="userinput-box">
                <span className="userdetails">Age</span>
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
              <div className="userinput-box">
                <span className="userdetails">Address</span>
                <textarea
                  className="useraddressbox"
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
              <div className="userinput-box">
                <span className="userdetails">Password</span>
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
              <div className="userinput-box">
                <span className="userdetails">Confirm Password</span>
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
            <div className="userbutton">
              <input type="submit" value="Register" />
            </div>
            <div className="userintext">Or</div>
            <div className="userbutton">
              <input type="submit" value="Login" onClick={handlePageChange} />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
