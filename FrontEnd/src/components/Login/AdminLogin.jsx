import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import welcome from "../../images/welcome.jpg";
import axios from "axios";
import { baseurl } from "../../api/service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../context/context";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const AdminLogin = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(UserContext);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Must be valid Email")
      .max(255)
      .required("Email is required"),
    password: yup
      .string()
      .required("Password required")
      .max(4, "Maximum 4 characters required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handlePageChange = (e) => {
    e.preventDefault();
    navigate("/registeradmin", { replace: true });
  };

  const onSubmit = (data) => {
    console.log(data);
    postDataToServer(data);
  };

  const postDataToServer = (data) => {
    if (data !== null) {
      axios.post(`${baseurl}/api/adminLogin`, data).then((response) => {
        console.log(response.data);

        let result = response.data;

        if (result === 0) {
          console.log("Success");
          toast.success("Succcesful Login!", {
            position: toast.POSITION.TOP_CENTER,
          });
          navigate("/adminmodal", { replace: true });
        }
        if (result === 1) {
          console.log("Fail");
          toast.error("Please Enter Valid Email-id password", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
    }
    dispatch({ type: "USER", payload: true });
  };
  return (
    <div className="main-login">
      <div className="login-contain">
        <div className="left-side">
          <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("email")}
            />
            <p className="errorMessagesUser">{errors.email?.message}</p>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              {...register("password")}
            />
            <p className="errorMessagesUser">{errors.password?.message}</p>
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
