import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Lottie from "lottie-react";
import loginAnimation from "../public/login.json";
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="row m-5 p-5">
      <div className="col-md-6 h-100 my-auto ">
        <Lottie
          className=""
          animationData={loginAnimation}
          loop={true}
          height={400}
          width={400}
        />
      </div>
      <div className="col-md-6 h-100 my-auto ">
        <Form
          className=" border border-2 rounded-4 bg-dark text-light mb-5 p-5"
          onSubmit={handleLogin}
        >
          <h3 className="text-center">Login Form</h3>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
            />

            <button className="mt-2 btn btn-light" onClick={handleShowPassword}>
              {showPass ? <BsEyeFill /> : <BsEyeSlashFill />}
            </button>
            <Form.Text className="">{}</Form.Text>
          </Form.Group>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
          <br />
          <Form.Text className="text-light">
            New to world tongues?
            <Link to="/register">
              <span className="underline "> Register </span>
            </Link>
          </Form.Text>
          <br />
        </Form>
      </div>
    </div>
  );
};

export default Login;
