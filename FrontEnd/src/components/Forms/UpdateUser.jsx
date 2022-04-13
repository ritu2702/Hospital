import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddUser.css";
import axios from "axios";
import { baseurl } from "../../api/service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  function allUserPage(e) {
    e.preventDefault();
    navigate("/allusers", { replace: true });
  }

  const [user, setUser] = useState({
    id: id,
    name: "",
    email: "",
    mobileNo: "",
    bloodGroup: "",
    age: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseurl}/api/getByUserid/${user.id}`
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateUser = (e) => {
    e.preventDefault();
    console.log(user);
    updateUserData(id, user);
    toast.success("Data Updated");
  };

  const updateUserData = (id, user) => {
    axios
      .put(`${baseurl}/api/editUser/${id}`, user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="adduserfullcontainer">
      <div className="adduserregister">
        <div className="addusercontainer">
          <div className="adduserregtitle">Update User</div>
          <form>
            <div className="adduser-details">
              <div className="adduserinput-box">
                <span className="adduserdetails">Name</span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                  id="name"
                  value={user.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="adduserinput-box">
                <span className="adduserdetails">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="adduserinput-box">
                <span className="adduserdetails">Mobile No</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  name="mobileNo"
                  id="mobileNo"
                  value={user.mobileNo}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="adduserinput-box">
                <span className="adduserdetails">Blood Group</span>
                <select
                  className="bloodGroupAddStyle"
                  name="bloodGroup"
                  id="bloodGroup"
                  value={user.bloodGroup}
                  onChange={(e) => handleChange(e)}
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
                <p className="errorMessagesUser"></p>
              </div>
              <div className="adduserinput-box">
                <span className="adduserdetails">Age</span>
                <input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Enter your age"
                  value={user.age}
                  onChange={(e) => handleChange(e)}
                />
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
                  value={user.address}
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
              <div className="adduserinput-box">
                <span className="adduserdetails">Password</span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  value={user.password}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="adduserinput-box">
                <span className="adduserdetails">Confirm Password</span>
                <input
                  type="password"
                  placeholder="Re-Enter Password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={user.confirmPassword}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="userbuttonadd">
              <input type="submit" value="Update User" onClick={updateUser} />
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
