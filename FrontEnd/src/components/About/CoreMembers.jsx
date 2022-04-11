import React from "react";
import { Col, Row } from "react-bootstrap";
import "./CoreMembers.css";
import member from "../../images/prathap.jpg";
import member2 from "../../images/Prretha.jpg";
import member3 from "../../images/Sunita.jpg";
import member4 from "../../images/shobhna.jpg";

export const CoreMembers = () => {
  return (
    <div>
      <div className="memberscontainer">
        <h3 className="membersheader">Core Members</h3>
        <Row>
          <Col className="memberscolumn">
            <img className="membersimg" src={member} alt="" />
            <h4 className="membername">Dr. Prathap Reddy</h4>
            <p className="memberpara">Chairman, CliniCo Hospitals Pvt Lmtd</p>
          </Col>

          <Col className="memberscolumn">
            <img className="membersimg" src={member2} alt="" />
            <h4 className="membername">Dr. Preetha Reddy</h4>
            <p className="memberpara">
              Vice Chairman, CliniCo Hospitals Pvt Lmtd
            </p>
          </Col>

          <Col className="memberscolumn">
            <img className="membersimg" src={member3} alt="" />
            <h4 className="membername">Dr. Shobhna Kamenini</h4>
            <p className="memberpara">Executive, CliniCo Hospitals Pvt Lmtd.</p>
          </Col>

          <Col className="memberscolumn">
            <img className="membersimg" src={member4} alt="" />
            <h4 className="membername">Ms. Sunita Reddy</h4>
            <p className="memberpara">Director, CliniCo Hospitals Pvt Lmtd</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
