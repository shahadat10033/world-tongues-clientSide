import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import registerAnimation from "../public/register.json";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import GoogleLogin from "../Shared/GoogleLogin";

const Register = () => {
  const { registerEmail, userUpdate } = useContext(AuthContex);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, photoURL, email, password, confirmPassword } = data;
    console.log(data);

    if (password !== confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password does not match.try again!",
      });
    }

    registerEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        userUpdate(name, photoURL);
      })
      .catch((error) => {
        const errorMessage = error.message;
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };

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
      <div className="col-md-6 h-100 my-auto  border border-2 rounded-4 bg-dark text-light mb-5 p-5 ">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center">Register Form</h3>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              {...register("name")}
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Your Photo</Form.Label>
            <Form.Control
              type="text"
              {...register("photoURL")}
              placeholder="Your Photo URL"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              {...register("email")}
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...register("password", {
                minLength: 6,
                pattern:
                  /^(?=.*[!@#$%^&*()\-=_+{}[\]:;"'<>,.?\\/])(?=.*[A-Z]).+$/,
              })}
              placeholder="Password"
              required
            />
            {errors.password?.type === "minLength" && (
              <p className="">Password must be 6 character</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="">
                Password must have a special character and a uppercase letter
              </p>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...register("confirmPassword")}
              placeholder="Confirm Your Password"
              required
            />

            <Form.Text className="">{}</Form.Text>
          </Form.Group>

          <button className="btn btn-primary" type="submit">
            Registration
          </button>
          <br />

          <br />
        </Form>
        <div className="text-light">
          Already have an account?
          <Link to="/login">
            <span className="underline "> Log In</span>
          </Link>
          <hr />
          <div className="text-center">
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
