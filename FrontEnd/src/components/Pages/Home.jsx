import React, { useContext } from "react";
import { Centers } from "../CentersOfExcellence/Centers";
import { Fetaures } from "../FeaturesSection/Fetaures";
import { Footer } from "../Footer/Footer";
import { Slider } from "../Slider/Slider";
import { Testimonial } from "../Testimonials/Testimonial";
import { UserContext } from "../../context/context";

export const Home = () => {
  const { state, dispatch } = useContext(UserContext);
  dispatch({ type: "USER", payload: false });
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
