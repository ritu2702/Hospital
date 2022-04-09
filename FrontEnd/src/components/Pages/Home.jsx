import React from "react";
import { Centers } from "../CentersOfExcellence/Centers";
import { Fetaures } from "../FeaturesSection/Fetaures";
import { Footer } from "../Footer/Footer";
import { Slider } from "../Slider/Slider";
import { Testimonial } from "../Testimonials/Testimonial";

export const Home = () => {
  return (
    <>
      <Slider />
      <Fetaures />
      <Centers />
      <Testimonial />
      <Footer />
    </>
  );
};
