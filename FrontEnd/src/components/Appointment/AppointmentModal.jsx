import React from "react";
import { useNavigate } from "react-router-dom";
import "./AppointmentModal.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { baseurl } from "../../api/service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const AppointmentModal = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(4, "Name should be more than 3 characters"),
    doctorname: yup
      .string()
      .required("Name is required")
      .min(4, "Name should be more than 3 characters"),
    email: yup
      .string()
      .email("Must be valid Email")
      .max(255)
      .required("Email is required"),
    speciality: yup.string().required("Speciality is required"),
    paymentStatus: yup
      .string()
      .nullable()
      .required("Payment Status is required"),
    timeofapp: yup.string().required("Time is required"),
    dateofapp: yup
      .date()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .required("Date is required"),
    patientProblem: yup.string().required("Problem is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    postDataToServer(data);
  };

  const postDataToServer = (data) => {
    console.log(data);
    axios
      .post(`${baseurl}/api/registerAppoint`, data)
      .then((response) => {
        console.log(response.data);
        let result = response.data;

        if (result === 0) {
          console.log("Success");
          toast.success("Appointment Booked!");
        }
        if (result === 1) {
          console.log("fail");
          toast.error("Please try again");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Enter unique Email-Id");
      });
    // navigate("/bookappointment", { replace: true });
  };

  const handlePageChange = (e) => {
    e.preventDefault();
    navigate("/bookappointment", { replace: true });
  };

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="modalTitle">
            <h2>Book Appointment</h2>
          </div>
          <div className="modalBody">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-details">
                <div className="modalinput-box">
                  <span className="modaldetails">Name</span>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    name="name"
                    id="name"
                    {...register("name")}
                  />
                  <p className="errorMessagesUser">{errors.name?.message}</p>
                </div>
                <div className="modalinput-box">
                  <span className="modaldetails">Doctor Name</span>
                  <input
                    type="text"
                    placeholder="Enter your Doctor name"
                    name="doctorname"
                    id="doctorname"
                    {...register("doctorname")}
                  />
                  <p className="errorMessagesUser">
                    {errors.doctorname?.message}
                  </p>
                </div>
                <div className="modalinput-box">
                  <span className="modaldetails">Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    {...register("email")}
                  />
                  <p className="errorMessagesUser">{errors.email?.message}</p>
                </div>
                <div className="modalinput-box">
                  <span className="modaldetails">Speciality</span>
                  <input
                    type="text"
                    placeholder="Enter speciality"
                    name="speciality"
                    id="speciality"
                    {...register("speciality")}
                  />
                  <p className="errorMessagesUser">
                    {errors.speciality?.message}
                  </p>
                </div>
                <div className="modalinput-box">
                  <span className="modaldetails">Time</span>
                  <input
                    type="time"
                    placeholder="Enter Time"
                    name="timeofapp"
                    id="timeofapp"
                    {...register("timeofapp")}
                  />
                  <p className="errorMessagesUser">
                    {errors.timeofapp?.message}
                  </p>
                </div>
                <div className="modalinput-box">
                  <span className="modaldetails">Date</span>
                  <input
                    type="date"
                    name="dateofapp"
                    id="dateofapp"
                    placeholder="Enter your date"
                    {...register("dateofapp")}
                  />
                  <p className="errorMessagesUser">
                    {errors.dateofapp?.message}
                  </p>
                </div>
                <div className="modalinput-box">
                  <span className="modaldetails">Problem</span>
                  <input
                    type="text"
                    name="patientProblem"
                    id="patientProblem"
                    placeholder="Enter your Problem"
                    {...register("patientProblem")}
                  />
                  <p className="errorMessagesUser">
                    {errors.patientProblem?.message}
                  </p>
                </div>
                <div className="modalinput-box">
                  <span className="modaldetails">Payment Status</span>
                  <select
                    name="paymentStatus"
                    id="paymentStatus"
                    className="selectPayment"
                    {...register("paymentStatus")}
                  >
                    <option value="">--Select Status--</option>
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                  </select>
                  <p className="errorMessagesUser">
                    {errors.paymentStatus?.message}
                  </p>
                </div>
              </div>
              <div className="modalFooter">
                <button type="reset">Clear</button>
                <button type="submit">Book</button>
                <button onClick={handlePageChange}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
};

export default AppointmentModal;
