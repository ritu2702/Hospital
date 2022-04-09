import React from "react";
import { BookSlider } from "../BookDoctorSlider/BookSlider";
import { BookBlocks } from "../FeaturesSection/BookBlocks";
import { BookDoctorSlider } from "../BookDoctorSlider/BookDoctorSlider";
import { BkSlider } from "../BKSlider/BkSlider";
import VideoCaro from "../BookVideo/VideoCaro";
import { Footer } from "../Footer/Footer";

export const BookAppointment = () => {
  return (
    <div>
      <BookSlider />
      <BookBlocks />
      <BookDoctorSlider />
      <BkSlider />
      <VideoCaro />
      <Footer />
    </div>
  );
};
