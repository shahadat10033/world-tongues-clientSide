import React from "react";
import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleSignUp } = useContext(AuthContex);

  return (
    <button
      className="btn btn-dark rounded-5"
      onClick={() => {
        googleSignUp();
      }}
    >
      <img
        src="google.svg"
        alt=""
        style={{ width: 35, height: 35, borderRadius: "50%" }}
        className="rounded-5"
      ></img>
    </button>
  );
};

export default GoogleLogin;
