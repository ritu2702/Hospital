import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  faUser,
  faUserDoctor,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

export const Modal = () => {
  const navigate = useNavigate();

  const handlePageChangeUser = (e) => {
    e.preventDefault();
    navigate("/registeruser", { replace: true });
  };
  const handlePageChangeDoctor = (e) => {
    e.preventDefault();
    navigate("/registerdoctor", { replace: true });
  };
  const handlePageChangeAdmin = (e) => {
    e.preventDefault();
    navigate("/registeradmin", { replace: true });
  };

  return (
    <div>
      <div className="box">
        <h4>Register/ Login </h4>
        <Row>
          <Col className="insidebox">
            <FontAwesomeIcon
              icon={faUser}
              size="6x"
              className="user-icon"
            ></FontAwesomeIcon>
            <div onClick={handlePageChangeUser}>
              <h3 className="user-title">User</h3>
            </div>
          </Col>
          <Col className="insidebox">
            <FontAwesomeIcon
              className="doctor-icon"
              icon={faUserDoctor}
              size="6x"
            ></FontAwesomeIcon>
            <div onClick={handlePageChangeDoctor}>
              <h3 className="user-title">Doctor</h3>
            </div>
          </Col>
          <Col className="insidebox">
            <FontAwesomeIcon
              className="admin-icon"
              icon={faUserTie}
              size="6x"
            ></FontAwesomeIcon>
            <div onClick={handlePageChangeAdmin}>
              <h3 className="user-title">Admin</h3>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
