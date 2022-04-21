import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserRegistration.css";
import axios from "axios";
import { baseurl } from "../../api/service";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";

export const DoctorRegistration = () => {
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
    speciality: yup.string().nullable().required("Speciality is required"),
    qualification: yup.string().required("Qualification required"),
    experience: yup.number().required("Experience required"),
    arrivalTime: yup.string().required("Arrival Time required"),
    leavingTime: yup.string().required("Leaving Time required"),
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
    navigate("/logindoctor", { replace: true });
  }

  const onSubmit = (data) => {
    console.log(data);
    postDataToServer(data);
  };

  const postDataToServer = (data) => {
    axios.post(`${baseurl}/api/registerDoctors`, data).then(
      (response) => {
        console.log(response.data);
        console.log("Success");
        toast.success("Succesful Registration!");
      },
      (error) => {
        console.log(error);
        toast.error("Please try again");
      }
    );
  };

  return (
    <div className="userfullcontainer">
      <div className="userregister">
        <div className="usercontainer">
          <div className="userregtitle">Registration</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="user-details">
              <div className="userinput-box">
                <span className="userdetails">Name</span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                  id="name"
                  {...register("name")}
                />
                <p className="errorMessagesDoctor">{errors.name?.message}</p>
              </div>
              <div className="userinput-box">
                <span className="userdetails">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  {...register("email")}
                />
                <p className="errorMessagesDoctor"> {errors.email?.message}</p>
              </div>
              <div className="userinput-box">
                <span className="userdetails">Phone</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  name="mobileNo"
                  id="mobileNo"
                  {...register("mobileNo")}
                />
                <p className="errorMessagesDoctor">
                  {" "}
                  {errors.mobileNo?.message}
                </p>
              </div>
              <div className="userinput-box">
                <span className="userdetails">Speciality</span>
                <select
                  name="speciality"
                  id="speciality"
                  {...register("speciality")}
                  className="bloodGroupStyle"
                >
                  <option value="">--Select Speciality--</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Oncology">Oncology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Gastroenterology">Gastroenterology</option>
                  <option value="Gynaecology">Gynaecology</option>
                  <option value="Orthopaedics">Orthopaedics</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Diabetology">Diabetology</option>
                  <option value="Endocrinology">Endocrinology</option>
                  <option value="Ent">Ent</option>
                  <option value="General Physician">General Physician</option>
                  <option value="General Surgery">General Surgery</option>
                  <option value="Nephrology">Nephrology</option>
                  <option value="Neurosurgery">Neurosurgery</option>
                  <option value="Urology">Urologuy</option>
                  <option value="Opthamology">Opthamology</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Psychiatry">Psychaitry</option>
                  <option value="Pulmonology">Pulmonology</option>
                </select>
                <p className="errorMessagesDoctor">
                  {errors.speciality?.message}
                </p>
              </div>
              <div className="userinput-box">
                <span className="userdetails">Qualification</span>
                <input
                  type="text"
                  name="qualification"
                  id="qualification"
                  placeholder="Enter your qualification"
                  {...register("qualification")}
                />
                <p className="errorMessagesDoctor">
                  {" "}
                  {errors.qualification?.message}
                </p>
              </div>
              <div className="userinput-box">
                <span className="userdetails">Experience</span>
                <input
                  type="number"
                  name="experience"
                  id="experience"
                  placeholder="Enter your Experience"
                  {...register("experience")}
                />
                <p className="errorMessagesDoctor">
                  {errors.experience?.message}
                </p>
              </div>
              <div className="userinput-box">
                <span className="userdetails">Arrival Time</span>
                <input
                  type="time"
                  name="=arrivalTime"
                  id="arrivalTime"
                  {...register("arrivalTime")}
                />
                <p className="errorMessagesDoctor">
                  {errors.arrivalTime?.message}
                </p>
              </div>
              <div className="userinput-box">
                <span className="userdetails">Leaving Time</span>
                <input
                  type="time"
                  name="leavingTime"
                  id="leavingTime"
                  {...register("leavingTime")}
                />
                <p className="errorMessagesDoctor">
                  {" "}
                  {errors.leavingTime?.message}
                </p>
              </div>
              <div className="userinput-box">
                <span className="userdetails">Password</span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  {...register("password")}
                />
                <p className="errorMessagesDoctor">
                  {errors.password?.message}
                </p>
              </div>
              <div className="userinput-box">
                <span className="userdetails">Confirm Password</span>
                <input
                  type="password"
                  placeholder="Re-Enter Password"
                  name="confirmPassword"
                  id="confirmPassword"
                  {...register("confirmPassword")}
                />
                <p className="errorMessagesDoctor">
                  {errors.confirmPassword?.message}
                </p>
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
      <ToastContainer autoClose={1000} />
    </div>
  );
};
