import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminRegistration.css";
import axios from "axios";
import { baseurl } from "../../api/service";

export const AdminRegistration = () => {
  const navigate = useNavigate();

  function handlePageChange(e) {
    e.preventDefault();
    navigate("/loginadmin", { replace: true });
  }

  const [info, setInfo] = useState({});

  const handleForm = (e) => {
    console.log(info);
    postDataToServer(info);
    e.preventDefault();
  };

  const postDataToServer = (data) => {
    axios.post(`${baseurl}/api/registerAdmins`, data).then(
      (response) => {
        console.log(response);
        console.log("Success");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="fullcontainer">
      <div className="register">
        <div className="container">
          <div className="regtitle">Registration</div>
          <form onSubmit={handleForm}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Name</span>
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
              <div className="input-box">
                <span className="details">Email</span>
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
              <div className="input-box">
                <span className="details">Password</span>
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
              <div className="input-box">
                <span className="details">Confirm Password</span>
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
            <div className="button">
              <input type="submit" value="Register" />
            </div>
            <div className="intext">Or</div>
            <div className="button">
              <input type="submit" value="Login" onClick={handlePageChange} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
