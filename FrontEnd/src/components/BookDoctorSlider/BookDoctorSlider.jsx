import React from "react";
import "./bookDoctorSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import imgbook from "../../images/imgbook1.webp";
import imgbook1 from "../../images/imgbook2.webp";
import imgbook2 from "../../images/imgbook3.webp";
import imgbook3 from "../../images/imgbook4.webp";
import imgbook4 from "../../images/imgbook5.webp";
import imgbook5 from "../../images/imgbook6.webp";

const data = [
  {
    id: 1,
    username: "Neurology",
    img: imgbook,
    testimonial:
      " Our doctor who specializes in evaluating, diagnosing, and treating diseases that affect body.",
  },
  {
    id: 2,
    username: "Psychiatrist",
    img: imgbook1,
    testimonial:
      "We focus on the diagnosis, treatment and prevention of mental, emotional and behavioral disorders.",
  },
  {
    id: 3,
    username: "Orthopadics",
    img: imgbook2,
    testimonial:
      "We provide treatment of the musculoskeletal system. This includes bones,ligaments and muscles.",
  },
  {
    id: 4,
    username: "Dermitologist",
    img: imgbook3,
    testimonial:
      "Our doctor that specializes in treating skin, hair, nail, and mucous membrane disorders and diseases.",
  },
  {
    id: 5,
    username: "Pulmonology",
    img: imgbook4,
    testimonial:
      "The tests measure lung volume, capacity. This information can help your healthcare provider diagnose",
  },
  {
    id: 6,
    username: "Cardiology",
    img: imgbook5,
    testimonial:
      "Our doctor with special training in diagnosing, treating, preventing the diseases of heart and blood vessels.",
  },
];

export const BookDoctorSlider = () => {
  return (
    <div className="doctorslider">
      <h2 className="doctorhead">
        Consult Top Doctors By Speciality For Any Health Concern
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        slidesPerView={3}
        spaceBetween={-110}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((user) => (
          <SwiperSlide key={user.id} className="doctorslide">
            <div className="doctorslide-content">
              <div className="doctoruser-image">
                <img src={user.img} alt="img" />
                <div className="doctornew1">
                  <h4>{user.username}</h4>
                </div>
                {/* <p className='user-testimonial'><ul>{user.testimonial}</ul></p> */}
                <button className="doctorsliderbtnn">Book Appointment</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  );
};
