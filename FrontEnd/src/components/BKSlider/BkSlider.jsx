import React, { useState } from "react";
import "./BkSlider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

export const BkSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="bkcontainer-slider">
      <div>
        <h2 className="bkslidehead">Featured Doctors</h2>
        <p className="bkslidesubhead">
          Instant Online Appointment Booking With Top CliniCo Doctors
        </p>
      </div>
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1 ? "bkslide bkactive-anim" : "bkslide"
            }
          >
            <div className="bknew">
              <img className="bkimg" src={obj.img} alt="img" />
              <p className="bktitle">{obj.title}</p>
              <p className="bksubtitle">{obj.subTitle}</p>
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <div className="bkcontainer-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "bkdot bkactive" : "bkdot"}
          ></div>
        ))}
      </div>
    </div>
  );
};
