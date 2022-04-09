import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./AboutText.css";
import {
  faHandHoldingHeart,
  faPrescriptionBottle,
  faBriefcaseMedical,
  faCircleH,
} from "@fortawesome/free-solid-svg-icons";

export const AboutText = () => {
  return (
    <div>
      <div className="aboutcontainer">
        <h2 className="aboutheading"> - About Us - </h2>
        <Row>
          <Col>
            <p className="aboutText">
              Established by Dr Prathap C Reddy in 1983, Apollo Healthcare has a
              robust presence across the healthcare ecosystem. From routine
              wellness and preventive health care to innovative life-saving
              treatments and diagnostic services, Apollo Hospitals has touched
              more than 120 million lives from over 120 countries, offering the
              best clinical outcomes.
            </p>
          </Col>
        </Row>
        <div className="aboutrows">
          <Row>
            <Col className="aboutcolumn">
              <FontAwesomeIcon
                className="abouticon"
                size="4x"
                icon={faHandHoldingHeart}
              ></FontAwesomeIcon>
              <h2 className="rowheading">7,000+ Healing Hands</h2>
              <p className="rowpara">
                Largest network of the world's finest and brightest medical
                experts who provide compassionate care using outstanding
                expertise and advanced technology.
              </p>
            </Col>
            <Col>
              <FontAwesomeIcon
                className="abouticon"
                size="4x"
                icon={faPrescriptionBottle}
              ></FontAwesomeIcon>
              <h2 className="rowheading">4,000+ Pharmacies</h2>
              <p className="rowpara">
                Apollo Pharmacy is India's first, largest and most trusted
                branded pharmacy network, with over 4000 plus outlets covering
                the entire nation
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="aboutcolumn">
              <FontAwesomeIcon
                className="abouticon"
                size="4x"
                icon={faBriefcaseMedical}
              ></FontAwesomeIcon>
              <h2 className="rowheading">
                Most Advanced Healthcare Technology
              </h2>
              <p className="rowpara">
                Apollo Hospitals has been the pioneer in bringing
                ground-breaking healthcare technologies to India.
              </p>
            </Col>
            <Col>
              <FontAwesomeIcon
                className="abouticon"
                size="4x"
                icon={faCircleH}
              ></FontAwesomeIcon>
              <h2 className="rowheading">Best Clinical Outcomes</h2>
              <p className="rowpara">
                Leveraging its vast medical expertise and technological
                advantage, Apollo Hospitals has consistently delivered best in
                class clinical outcomes.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
