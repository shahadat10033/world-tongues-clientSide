import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import registerAnimation from "../public/register.json";

const Register = () => {
  const handleRegister = () => {};
  return (
    <div className="row m-5 p-5">
      <div className="col-md-6 h-100 my-auto ">
        <Lottie
          className=""
          animationData={registerAnimation}
          loop={true}
          height={400}
          width={400}
        />
      </div>
      <div className="col-md-6 h-100 my-auto ">
        <Form
          className=" border border-2 rounded-4 bg-dark text-light mb-5 p-5"
          onSubmit={handleRegister}
        >
          <h3 className="text-center">Register Form</h3>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Your Photo</Form.Label>
            <Form.Control
              type="text"
              name="photoURL"
              placeholder="Your Photo URL"
              required
            />
          </Form.Group>
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
              type="password"
              name="password"
              placeholder="Password"
              required
            />

            <Form.Text className="">{}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="ConfirmPassword"
              placeholder="Confirm Your Password"
              required
            />

            <Form.Text className="">{}</Form.Text>
          </Form.Group>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
          <br />
          <Form.Text className="text-light">
            Already have an account?
            <Link to="/login">
              <span className="underline "> Log In</span>
            </Link>
          </Form.Text>
          <br />
        </Form>
      </div>
    </div>
  );
};

export default Register;
