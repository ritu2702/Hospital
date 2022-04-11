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
import { UserContext } from "../../context/context";
import { useContext } from "react";

export const UserLogin = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handlePageChange = (e) => {
    e.preventDefault();
    navigate("/registeruser", { replace: true });
  };

  const handleUserForm = (e) => {
    e.preventDefault();
    postDataToServer(user);
  };
  const postDataToServer = (data) => {
    console.log(data);
    if (data !== null) {
      axios.post(`${baseurl}/api/login`, data).then((response) => {
        console.log(response.data);
        let result = response.data;

        if (result === 0) {
          console.log("Success");
          toast.success("Succcesful Login!");
          navigate("/bookappointment", { replace: true });
        } else {
          toast.error("Enter Valid Email-Id or Password", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        dispatch({ type: "USER", payload: true });
      });
    }
  };

  return (
    <div className="main-login">
      <div className="login-contain">
        <div className="left-side">
          <form onSubmit={handleUserForm}>
            <FontAwesomeIcon
              icon={faUserGroup}
              size="3x"
              className="icon-logo"
            ></FontAwesomeIcon>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
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
      <ToastContainer autoClose={1000} />
    </div>
  );
};
