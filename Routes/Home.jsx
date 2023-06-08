import React from "react";
import Slider from "../Components/Slider";
import AnimSection from "../Components/animSection";
import PopularClasses from "../Components/PopularClasses";
import PopularInstructors from "../Components/PopularInstructors";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <AnimSection></AnimSection>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
