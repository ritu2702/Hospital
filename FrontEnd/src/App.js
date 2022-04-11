import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Services } from "./components/Pages/Services";
import { Contact } from "./components/Pages/Contact";
import { Signup } from "./components/Pages/Signup";
import { Modal } from "./components/Modal Box/Modal";
import { UserRegistration } from "./components/Registration/UserRegistration";
import { UserLogin } from "./components/Login/UserLogin";
import { DoctorRegistration } from "./components/Registration/DoctorRegistration";
import { AdminRegistration } from "./components/Registration/AdminRegistration";
import { DoctorLogin } from "./components/Login/DoctorLogin";
import { AdminLogin } from "./components/Login/AdminLogin";
import { AdminModal } from "./components/AllAdmins/AdminModal";
import { AllUsers } from "./components/AllAdmins/AllUsers";
import { AllDoctors } from "./components/AllAdmins/AllDoctors";
import { AddUser } from "./components/Forms/AddUser";
import { AddDoctor } from "./components/Forms/AddDoctor";
import { BookAppointment } from "./components/BookAppointment/BookAppointment";
import { UpdateUser } from "./components/Forms/UpdateUser";
import { UpdateDoctor } from "./components/Forms/UpdateDoctor";
import { Logout } from "./components/Logout/Logout";
import { UserContext } from "./context/context";
import { initialState, reducer } from "./reducer/UseReducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Router>
        <UserContext.Provider value={{ state, dispatch }}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />{" "}
            <Route exact path="/about" element={<About />} />{" "}
            <Route exact path="/services" element={<Services />} />{" "}
            <Route exact path="/contact" element={<Contact />} />{" "}
            <Route exact path="/signup" element={<Signup />} />{" "}
            <Route exact path="/modal" element={<Modal />} />{" "}
            <Route exact path="/registeruser" element={<UserRegistration />} />{" "}
            <Route exact path="/loginuser" element={<UserLogin />} />{" "}
            <Route exact path="/logindoctor" element={<DoctorLogin />} />{" "}
            <Route exact path="/loginadmin" element={<AdminLogin />} />{" "}
            <Route
              exact
              path="/registerdoctor"
              element={<DoctorRegistration />}
            />{" "}
            <Route
              exact
              path="/registeradmin"
              element={<AdminRegistration />}
            />{" "}
            <Route exact path="/adminmodal" element={<AdminModal />} />{" "}
            <Route exact path="/allusers" element={<AllUsers />} />{" "}
            <Route exact path="/alldoctors" element={<AllDoctors />} />{" "}
            <Route exact path="/adduser" element={<AddUser />} />{" "}
            <Route exact path="/adddoctor" element={<AddDoctor />} />{" "}
            <Route
              exact
              path="/bookappointment"
              element={<BookAppointment />}
            />{" "}
            <Route
              exact
              path="/users/updateUser/:id"
              element={<UpdateUser />}
            />{" "}
            <Route
              exact
              path="/doctors/updateDoctor/:id"
              element={<UpdateDoctor />}
            />{" "}
            <Route exact path="/" element={<Logout />} />{" "}
          </Routes>{" "}
        </UserContext.Provider>
      </Router>{" "}
    </div>
  );
};

export default App;
