import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Slider = () => {
  return (
    <AwesomeSlider className="mb-5">
      <div data-src="banner2.jpg" />
      <div data-src="banner3.jpg" />
      <div data-src="banner4.jpg" />
    </AwesomeSlider>
  );
};

export default Slider;
