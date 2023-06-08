import React from "react";
import Slider from "../Components/Slider";
import AnimSection from "../Components/animSection";
import PopularClasses from "../Components/PopularClasses";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <AnimSection></AnimSection>
    </div>
  );
};

export default Home;
