import React from "react";
import Lottie from "lottie-react";
import learningAnimation from "../public/98349-teacher-in-classroom.json";
const AnimSection = () => {
  return (
    <div className="row">
      <div className="col-md-6"></div>
      <div className="col-md-6">
        <Lottie
          animationData={learningAnimation}
          loop={true}
          height={400}
          width={400}
        />
      </div>
    </div>
  );
};

export default AnimSection;
