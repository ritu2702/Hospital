import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { Avatar } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "grey", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "grey", fontSize: "45px" }} />
    </div>
  );
};

export const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 className="sliderheading">TESTIMONIALS</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
          <Card img="https://media.istockphoto.com/photos/portrait-of-happy-senior-woman-looking-at-camera-with-smile-picture-id1370275964?k=20&m=1370275964&s=612x612&w=0&h=Rp7XLTH2NTBXGqaRppMfau1r7mVXnaKW0VwJdIh5wCI=" />
          <Card img="https://media.istockphoto.com/photos/portrait-of-a-beautiful-young-indian-woman-picture-id917499044?k=20&m=917499044&s=612x612&w=0&h=B3VtoXuQsup7ZK1C_DlvMB96vQvGYpKF8FJ5RG1upTg=" />
          <Card img="https://media.istockphoto.com/photos/portrait-of-an-aged-bengali-woman-in-building-rooftop-picture-id1357235524?k=20&m=1357235524&s=612x612&w=0&h=cm-fb8GDl74UV3Y6DUdrJXaTqAKCy-oeWNhweVnw5aI=" />
          <Card img="https://media.istockphoto.com/photos/outdoor-waist-up-portrait-of-a-beautiful-woman-with-crossed-arms-picture-id1292137633?k=20&m=1292137633&s=612x612&w=0&h=lRZnh2aTbcxikrIM3Qzy5XczviGJajMw_cW0CisIXsM=" />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid grey",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>
        I come from a family of doctors and I was suffering from morbid obesity
        with co-morbidities like diabetes, hypertension, and sleep apnoea. It
        was becoming increasingly difficult for me to concentrate on my practice
        and continue my day today life. I've been consulted…
      </p>
      <p style={{ fontStyle: "italic" }}>
        <span style={{ fontWeight: 700, color: "greenyellow", marginTop: 25 }}>
          Dr. Rama Devi
        </span>
      </p>
    </div>
  );
};
