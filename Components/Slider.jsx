import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Slider = () => {
  return (
    <AwesomeSlider className="mb-5">
      <div data-src="banner2.jpg">
        <div className="slider-overlay">
          <div className="contain ">
            <h2 className="display-2">Explore Languages</h2>
            <p className="">
              world of language learning with World Tongue for comprehensive
              language training programs worldwide
            </p>
          </div>
        </div>
      </div>
      <div data-src="banner3.jpg">
        <div className="slider-overlay">
          <div className="contain  ">
            <h2 className="display-2">Unlock Proficiency</h2>
            <p className="">
              Discover a diverse range of courses to help you achieve fluency in
              languages.
            </p>
          </div>
        </div>
      </div>
      <div data-src="banner4.jpg">
        <div className="slider-overlay">
          <div className="contain ">
            <h2 className="display-2">Connect Cultures</h2>
            <p className="">
              Embark on a journey that goes words and fostering understanding
              language education.
            </p>
          </div>
        </div>
      </div>
    </AwesomeSlider>
  );
};

export default Slider;
