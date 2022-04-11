import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpg";
import img7 from "../../images/img7.jpg";
import img8 from "../../images/img8.jpg";

export const Slider = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img height="750px" width="100%" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img height="750px" width="100%" src={img2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img height="750px" width="100%" src={img3} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img height="750px" width="100%" src={img4} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img height="750px" width="100%" src={img5} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img height="750px" width="100%" src={img6} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img height="750px" width="100%" src={img7} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img height="750px" width="100%" src={img8} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
