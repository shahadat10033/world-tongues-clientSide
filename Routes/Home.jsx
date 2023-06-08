import React from "react";
import Slider from "../Components/Slider";
import AnimSection from "../Components/animSection";
import PopularClasses from "../Components/PopularClasses";
import PopularInstructors from "../Components/PopularInstructors";
import { Form } from "react-bootstrap";
import { useState } from "react";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      <Slider></Slider>
      <div className="d-flex justify-content-end">
        <Form>
          <Form.Switch
            id="dark-mode-switch"
            label={darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
            checked={darkMode}
            className="fw-bold fs-3 "
            onChange={toggleDarkMode}
          />
        </Form>
      </div>
      <PopularClasses></PopularClasses>
      <AnimSection></AnimSection>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
