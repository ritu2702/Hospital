import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserRegistration.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "./useForm";
import validateInfo from "./validateInfo";

export const UserRegistration = (submitForm) => {
  const { handleChange, values, postData, errors } = useForm(
    validateInfo,
    submitForm
  );
  const navigate = useNavigate();

  function handlePageChange(e) {
    e.preventDefault();
    navigate("/loginuser", { replace: true });
  }

  return (
    <div className="userfullcontainer">
      <div className="userregister">
        <div className="usercontainer">
          <div className="userregtitle">Registration</div>
          <form onSubmit={postData}>
            <div className="user-details">
              <div className="userinput-box">
                <span className="userdetails">Name</span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="erroruserpara">{errors.name}</p>}
              </div>
              <div className="userinput-box">
                <span className="userdetails">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="erroruserpara">{errors.email}</p>
                )}
              </div>
              <div className="userinput-box">
                <span className="userdetails">Mobile No</span>
                <input
                  type="tel"
                  placeholder="+91- 7499031115"
                  name="mobileNo"
                  id="mobileNo"
                  value={values.mobileNo}
                  onChange={handleChange}
                />
                {errors.mobileNo && (
                  <p className="erroruserpara">{errors.mobileNo}</p>
                )}
              </div>
              <div className="userinput-box">
                <span className="userdetails">Blood Group</span>
                <select
                  className="bloodGroupStyle"
                  name="bloodGroup"
                  id="bloodGroup"
                  value={values.bloodGroup}
                  onChange={handleChange}
                >
                  <option>Select Your BloodGroup</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
                {errors.bloodGroup && (
                  <p className="erroruserpara">{errors.bloodGroup}</p>
                )}
              </div>
              <div className="userinput-box">
                <span className="userdetails">Age</span>
                <input
                  type="number"
                  name="age"
                  id="age"
                  value={values.age}
                  onChange={handleChange}
                />
                {errors.age && <p className="erroruserpara">{errors.age}</p>}
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
                  value={values.address}
                  onChange={handleChange}
                ></textarea>
                {errors.address && (
                  <p className="erroruserpara">{errors.address}</p>
                )}
              </div>
              <div className="userinput-box">
                <span className="userdetails">Password</span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="erroruserpara">{errors.password}</p>
                )}
              </div>
              <div className="userinput-box">
                <span className="userdetails">Confirm Password</span>
                <input
                  type="password"
                  placeholder="Re-Enter Password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <p className="erroruserpara">{errors.confirmPassword}</p>
                )}
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
