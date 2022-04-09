import "./VideoCaro.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import vid1 from "../../video/vid1.mp4";
import vid2 from "../../video/vid2.mp4";
import vid3 from "../../video/vid3.mp4";
import ReactPlayer from "react-player";

const VideoCaro = () => {
  const videoProperties = [
    {
      id: 1,
      title: "Mrs. Jodi",
      src: vid1,
      credit: "(Breast Cancer Patient)",
    },
    {
      id: 2,
      title: "Mr. Rutwij Ghodke",
      src: vid2,
      credit: "(Orthopedic Surgery)",
    },
    {
      id: 3,
      title: "Mr. Kratika Sikarwar",
      src: vid3,
      credit: "(Maternity related)",
    },
  ];
  return (
    <div className="VideoCaro">
      <h3 className="VideoCaroHead">Testimonials</h3>
      <Carousel>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                className="VideoCaroVideo"
                url={videoObj.src}
                width="100%"
                pip={true}
                controls={false}
                playing={false}
                autoPlay={false}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoCaro;
