import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import welcome from "../../images/welcome.jpg";
import axios from "axios";
import { baseurl } from "../../api/service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DoctorLogin = () => {
  const navigate = useNavigate();

  const handlePageChange = (e) => {
    e.preventDefault();
    navigate("/registerdoctor", { replace: true });
  };

  const [user, setUser] = useState({});

  const handleDoctorForm = (e) => {
    console.log(user);
    postDataToServer(user);
    e.preventDefault();
  };

  const postDataToServer = (data) => {
    axios.post(`${baseurl}/api/doctorLogin`, data).then(
      (response) => {
        console.log(response);
        console.log("Success");
        toast.success("Succcesful Login!");
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
    <div className="main-login">
      <div className="login-contain">
        <div className="left-side">
          <form onSubmit={handleDoctorForm}>
            <FontAwesomeIcon
              icon={faUserGroup}
              size="3x"
              className="icon-logo"
            ></FontAwesomeIcon>
            {console.log("User", user)}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
            <button type="submit" id="btn">
              Login
            </button>
          </form>
          <div className="loginfooter">
            <div className="logintext">Or</div>
            <button type="submit" id="btn" onClick={handlePageChange}>
              Register
            </button>
          </div>
        </div>
        <div className="right-side">
          <div className="welcomeNote">
            <h3>Welcome Back!</h3>
          </div>
          <div className="welcomeImg">
            <img src={welcome} id="wel-img" alt="welcome" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
