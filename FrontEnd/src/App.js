import React from "react";
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

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="/services" element={<Services />} />{" "}
          <Route path="/contact" element={<Contact />} />{" "}
          <Route path="/signup" element={<Signup />} />{" "}
          <Route path="/modal" element={<Modal />} />{" "}
          <Route path="/registeruser" element={<UserRegistration />} />{" "}
          <Route path="/loginuser" element={<UserLogin />} />{" "}
          <Route path="/loginuser" element={<UserLogin />} />{" "}
          <Route path="/logindoctor" element={<DoctorLogin />} />{" "}
          <Route path="/loginadmin" element={<AdminLogin />} />{" "}
          <Route path="/registerdoctor" element={<DoctorRegistration />} />{" "}
          <Route path="/registeradmin" element={<AdminRegistration />} />{" "}
          <Route path="/adminmodal" element={<AdminModal />} />{" "}
          <Route path="/allusers" element={<AllUsers />} />{" "}
          <Route path="/alldoctors" element={<AllDoctors />} />{" "}
          <Route path="/adduser" element={<AddUser />} />{" "}
          <Route path="/adddoctor" element={<AddDoctor />} />{" "}
          <Route path="/bookappointment" element={<BookAppointment />} />{" "}
          <Route path="/users/updateUser/:id" element={<UpdateUser />} />{" "}
          <Route path="/doctors/updateDoctor/:id" element={<UpdateDoctor />} />{" "}
        </Routes>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
