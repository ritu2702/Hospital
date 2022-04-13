import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminRegistration.css";
import axios from "axios";
import { baseurl } from "../../api/service";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const AdminRegistration = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(4, "Name should be more than 3 characters"),
    email: yup
      .string()
      .email("Must be valid Email")
      .max(255)
      .required("Email is required"),
    password: yup
      .string()
      .required("Password required")
      .min(4, "Minimum 4 characters required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handlePageChange(e) {
    e.preventDefault();
    navigate("/loginadmin", { replace: true });
  }

  const onSubmit = (data) => {
    console.log(data);
    postDataToServer(data);
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Name</span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                  id="name"
                  {...register("name")}
                />
                <p className="errorMessagesUser">{errors.name?.message}</p>
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  {...register("email")}
                />
                <p className="errorMessagesUser">{errors.email?.message}</p>
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  {...register("password")}
                />
                <p className="errorMessagesUser">{errors.password?.message}</p>
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="password"
                  placeholder="Re-Enter Password"
                  name="confirmPassword"
                  id="confirmPassword"
                  {...register("confirmPassword")}
                />
                <p className="errorMessagesUser">
                  {errors.confirmPassword?.message}
                </p>
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
