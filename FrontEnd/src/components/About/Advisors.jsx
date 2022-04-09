import React from "react";
import "./Advisors.css";
import { Col, Row } from "react-bootstrap";
import advisor from "../../images/advisor.avif";
import advisor2 from "../../images/advisor2.avif";
import advisorgirl from "../../images/advisorgirl.jpg";
import advisorgirl2 from "../../images/advisorgirl2.jpg";

export const Advisors = () => {
  return (
    <div>
      <div className="advisorscontainer">
        <h3 className="advisorsheading">Advisors</h3>
        <Row>
          <Col>
            <img className="advisorimg" src={advisor} alt="img" />
            <h4 className="advisorname">Smith</h4>
            <p className="advisorpara">Super University</p>
          </Col>
          <Col>
            <img className="advisorimg" src={advisor2} alt="img" />
            <h4 className="advisorname">Jones</h4>
            <p className="advisorpara">Super University</p>
          </Col>
          <Col>
            <img className="advisorimg" src={advisorgirl} alt="img" />
            <h4 className="advisorname">Ashley</h4>
            <p className="advisorpara">Super University</p>
          </Col>
          <Col>
            <img className="advisorimg" src={advisorgirl2} alt="img" />
            <h4 className="advisorname">Evans</h4>
            <p className="advisorpara">Super University</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
