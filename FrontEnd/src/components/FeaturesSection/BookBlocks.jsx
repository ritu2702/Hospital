import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./BookBlocks.css";
import {
  faFlaskVial,
  faBedPulse,
  faFileMedical,
  faHouseMedical,
} from "@fortawesome/free-solid-svg-icons";

export const BookBlocks = () => {
  return (
    <div class="bookcontainer">
      <div>
        <h2 className="bookHead">Features</h2>
        <p className="bookPara">
          Largest network of the world's finest and brightest medical experts
          who provide compassionate care using outstanding expertise and
          advanced technology.
        </p>
      </div>
      <div class="bookbox">
        <div class="bookicon">
          <FontAwesomeIcon
            icon={faFlaskVial}
            size="3x"
            className="bookFontIcon"
          ></FontAwesomeIcon>
          <h3 className="bookText">Book Lab Test</h3>
          <button class="bookbtn">Select</button>
        </div>
      </div>
      <div class="bookbox">
        <div class="bookicon">
          <FontAwesomeIcon
            icon={faBedPulse}
            size="3x"
            className="bookFontIcon"
          ></FontAwesomeIcon>
          <h3 className="bookText">Book Health Packages</h3>
          <button class="bookbtn">Select</button>
        </div>
      </div>
      <div class="bookbox">
        <div class="bookicon">
          <FontAwesomeIcon
            icon={faFileMedical}
            size="3x"
            className="bookFontIcon"
          ></FontAwesomeIcon>
          <h3 className="bookText">Book an appointment</h3>
          <button class="bookbtn">Select</button>
        </div>
      </div>
      <div class="bookbox">
        <div class="bookicon">
          <FontAwesomeIcon
            icon={faHouseMedical}
            size="3x"
            className="bookFontIcon"
          ></FontAwesomeIcon>
          <h3 className="bookText">Book Health Services</h3>
          <button class="bookbtn">Select</button>
        </div>
      </div>
    </div>
  );
};
