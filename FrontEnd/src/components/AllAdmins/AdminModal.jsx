import React from "react";
import "./AdminModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
import { faUser, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const AdminModal = () => {
  const navigate = useNavigate();

  const handlePageChangeUser = (e) => {
    e.preventDefault();
    navigate("/allusers", { replace: true });
  };
  const handlePageChangeDoctor = (e) => {
    e.preventDefault();
    navigate("/alldoctors", { replace: true });
  };
  const handlePageChangeAppointments = (e) => {
    e.preventDefault();
    navigate("/appointmentTable", { replace: true });
  };

  return (
    <div>
      <div className="adminmodalbox">
        <h4>Which type of data to see?</h4>
        <Row>
          <Col className="adminmodalinsidebox">
            <FontAwesomeIcon
              icon={faUser}
              size="6x"
              className="adminmodaluser-icon"
            ></FontAwesomeIcon>
            <div onClick={handlePageChangeUser}>
              <h3 className="adminmodaluser-title">User</h3>
            </div>
          </Col>
          <Col className="adminmodalinsidebox">
            <FontAwesomeIcon
              className="adminmodaldoctor-icon"
              icon={faUserDoctor}
              size="6x"
            ></FontAwesomeIcon>
            <div onClick={handlePageChangeDoctor}>
              <h3 className="adminmodaluser-title">Doctor</h3>
            </div>
          </Col>
          <Col className="adminmodalinsidebox">
            <FontAwesomeIcon
              className="adminmodaldoctor-icon"
              icon={faUserDoctor}
              size="6x"
            ></FontAwesomeIcon>
            <div onClick={handlePageChangeAppointments}>
              <h3 className="adminmodaluser-title">Appointments</h3>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
