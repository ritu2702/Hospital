import React from "react";
import { Col, Row } from "react-bootstrap";
import "./CoreMembers.css";
import member from "../../images/member.jpg";
import member2 from "../../images/member2.jpg";
import member3 from "../../images/member3.jpg";
import member4 from "../../images/member4.jpg";

export const CoreMembers = () => {
  return (
    <div>
      <div className="memberscontainer">
        <h3 className="membersheader">Core Members</h3>
        <Row>
          <Col className="memberscolumn">
            <img className="membersimg" src={member} alt="" />
            <h4 className="membername">Peter</h4>
            <p className="memberpara">CEO, XXX university, Flag Corp.</p>
          </Col>

          <Col className="memberscolumn">
            <img className="membersimg" src={member2} alt="" />
            <h4 className="membername">Mike</h4>
            <p className="memberpara">CTO, YYY university, Flag Corp.</p>
          </Col>

          <Col className="memberscolumn">
            <img className="membersimg" src={member3} alt="" />
            <h4 className="membername">Harrry</h4>
            <p className="memberpara">CEO, ZZZ university, Flag Corp.</p>
          </Col>

          <Col className="memberscolumn">
            <img className="membersimg" src={member4} alt="" />
            <h4 className="membername">Vihan</h4>
            <p className="memberpara">COO, AAA university, Flag Corp.</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
