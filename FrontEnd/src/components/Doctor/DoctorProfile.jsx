import "./DoctorProfile.css";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

const DoctorProfile = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getAllDoctorsFromServer();
  }, []);

  const getAllDoctorsFromServer = () => {
    axios.get("http://localhost:8082/api/doctors").then(
      (response) => {
        console.log(response.data);
        setDoctors(response.data);
        const result = response.data;
        if (result !== []) {
          console.log("All Doctors Loaded");
        } else {
          console.log("No data present");
        }
      },
      (error) => {
        console.log(error);
        console.log("Error occured in server");
      }
    );
  };

  const renderCard = (doctors, index) => {
    return (
      <Card style={{ width: "15rem" }} key={index} className="alldoctorbox">
        <Card.Img
          variant="top"
          src="https://www.jupiterhospital.com/uploadedfiles/gallery/1584607002_male-dummy.jpg"
          alt=""
          className="doctorProfileImg"
        />
        <Card.Body className="doctorProfileBody">
          <Card.Title className="doctorProfileTitle">{doctors.name}</Card.Title>
          <Card.Text className="doctorProfileText">
            Speciality : {doctors.speciality}
          </Card.Text>
          <Card.Text className="doctorProfileText">
            Qualification: {doctors.qualification}
          </Card.Text>
          <Card.Text className="doctorProfileText">
            Experience: {doctors.experience} years
          </Card.Text>
          <Card.Text className="doctorProfileText">
            Doctor Availability: {doctors.arrivalTime} - {doctors.leavingTime}
          </Card.Text>
          {/* <Card.Text>{doctors.leavingTime}</Card.Text> */}
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{doctors.map(renderCard)}</div>;
};

export default DoctorProfile;
