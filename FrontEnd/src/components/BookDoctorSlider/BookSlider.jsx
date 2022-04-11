import React from "react";
import { Carousel } from "react-bootstrap";
import bookimg1 from "../../images/bookimg4.jpg";
import bookimg2 from "../../images/bookimg2.jpg";
import bookimg3 from "../../images/bookimg1.jpg";
import bookimg4 from "../../images/bookimg.jpg";

export const BookSlider = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img height="730px" width="100%" src={bookimg1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img height="730px" width="100%" src={bookimg2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img height="730px" width="100%" src={bookimg3} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img height="730px" width="100%" src={bookimg4} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
