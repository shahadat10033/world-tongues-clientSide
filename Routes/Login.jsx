import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Lottie from "lottie-react";
import loginAnimation from "../public/login.json";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import GoogleLogin from "../Shared/GoogleLogin";
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const handleShowPassword = () => {
    setShowPass(!showPass);
  };
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { loginUser } = useContext(AuthContex);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;

    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "log in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
        reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "login unsuccefull.try again!",
        });
        reset();
      });
  };
  return (
    <div className="row m-5 p-5">
      <div className="col-md-6 h-100  ">
        <Lottie
          className=""
          animationData={loginAnimation}
          loop={true}
          height={400}
          width={400}
        />
      </div>
      <div className="col-md-6 h-100 my-auto  border border-2 rounded-4 bg-dark text-light  p-5">
        <Form className="" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center">Login Form</h3>
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
              type={showPass ? "text" : "password"}
              {...register("password")}
              placeholder="Password"
              required
            />

            <button
              className="mt-2 btn btn-light"
              type="button"
              onClick={handleShowPassword}
            >
              {showPass ? <BsEyeFill /> : <BsEyeSlashFill />}
            </button>
            <Form.Text className="">{}</Form.Text>
          </Form.Group>

          <button className="btn btn-primary" type="submit">
            Login
          </button>
          <br />

          <br />
        </Form>
        <div className="text-light">
          New to world tongues?
          <Link to="/register">
            <span className="underline "> Register </span>
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

export default Login;
