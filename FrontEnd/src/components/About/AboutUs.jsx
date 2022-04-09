import React from "react";
import { AboutText } from "./AboutText";
import { Advisors } from "./Advisors";
import { CoreMembers } from "./CoreMembers";
// import { Partners } from "./Partners";

export const AboutUs = () => {
  return (
    <>
      <AboutText />
      <CoreMembers />
      <Advisors />
    </>
  );
};
