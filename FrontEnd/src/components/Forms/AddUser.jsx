import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";
import axios from "axios";
import { baseurl } from "../../api/service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";

export const AddUser = () => {
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
    mobileNo: yup.string().phone("IN").required("Mobile Number required"),
    bloodGroup: yup.string().nullable().required("BloodGroup is required"),
    age: yup.number().required("Age required"),
    address: yup.string().required("Address required"),
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

  function allUserPage(e) {
    e.preventDefault();
    navigate("/allusers", { replace: true });
  }

  const onSubmit = (data) => {
    console.log(data);
    addDataToServer(data);
  };
  const addDataToServer = (data) => {
    //Add record
    axios.post(`${baseurl}/api/registerUsers`, data).then(
      (response) => {
        console.log(response);
        let result = response.data;
        if (result === 0) {
          console.log("Success");
          toast.success("User Added Succesfully!");
        }
        navigate("/allusers", { replace: true });
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="adduser-details">
              <div className="adduserinput-box">
                <span className="adduserdetails">Name</span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                  id="name"
                  {...register("name")}
                />
                <p className="errorMessagesUser">{errors.name?.message}</p>
              </div>
              <div className="adduserinput-box">
                <span className="adduserdetails">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  {...register("email")}
                />
                <p className="errorMessagesUser">{errors.email?.message}</p>
              </div>
              <div className="adduserinput-box">
                <span className="adduserdetails">Mobile No</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  name="mobileNo"
                  id="mobileNo"
                  {...register("mobileNo")}
                />
                <p className="errorMessagesUser">{errors.mobileNo?.message}</p>
              </div>
              <div className="adduserinput-box">
                <span className="adduserdetails">Blood Group</span>
                <select
                  className="bloodGroupAddStyle"
                  name="bloodGroup"
                  id="bloodGroup"
                  {...register("bloodGroup")}
                >
                  <option value="">--Select Your BloodGroup--</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
                <p className="errorMessagesUser">
                  {errors.bloodGroup?.message}
                </p>
              </div>
              <div className="adduserinput-box">
                <span className="adduserdetails">Age</span>
                <input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Enter your age"
                  {...register("age")}
                />
                <p className="errorMessagesUser">{errors.age?.message}</p>
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
                  {...register("address")}
                ></textarea>
                <p className="errorMessagesUser">{errors.address?.message}</p>
              </div>
              <div className="adduserinput-box">
                <span className="adduserdetails">Password</span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  {...register("password")}
                />
                <p className="errorMessagesUser">{errors.password?.message}</p>
              </div>
              <div className="adduserinput-box">
                <span className="adduserdetails">Confirm Password</span>
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
