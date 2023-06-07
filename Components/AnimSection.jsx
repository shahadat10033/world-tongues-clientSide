import React from "react";
import Lottie from "lottie-react";
import learningAnimation from "../public/98349-teacher-in-classroom.json";
const AnimSection = () => {
  return (
    <div className=" d-md-flex   justify-content-center align-items-center">
      <div className="w-50 text-justify mx-auto  ">
        <h2>Start Your Education Career with World Tongues</h2>
        <p>
          At World Tongues, we believe in the power of education and the immense
          impact it can have on individuals and communities. If you are
          passionate about teaching and dedicated to making a difference in the
          lives of students, we invite you to embark on an exciting journey with
          us.As an education-focused organization, World Tongues is committed to
          providing quality language education to learners of all ages and
          backgrounds. We offer a diverse range of language courses, including
          English, Spanish, French, Mandarin, and more. Our innovative teaching
          methods, interactive curriculum, and supportive learning environment
          create a conducive space for students to thrive.
        </p>
      </div>
      <div className="w-50 mx-auto ">
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
