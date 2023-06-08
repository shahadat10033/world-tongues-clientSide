import React from "react";
import { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const MenuBar = () => {
  const { user, loader, logOut } = useContext(AuthContex);
  if (loader) {
    <p className="fw-bold fs-1"> loading............</p>;
  }
  return (
    <div className="fixed-top ">
      <Navbar
        variant="dark"
        expand="lg"
        className=" px-5  "
        style={{ backgroundColor: "transparent" }}
      >
        <Navbar.Brand
          as={Link}
          to="/"
          className="text-dark d-flex justify-content-center fw-bold fs-2"
        >
          <img src="titleLogo.webp" alt="" style={{ width: 38, height: 38 }} />{" "}
          <span>WORLD TONGUES</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-dark text-dark"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? " text-decoration-none mt-3 text-primary ps-5"
                  : "ps-5 text-decoration-none mt-3 text-dark"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/instructors"
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? " text-decoration-none mt-3 text-primary ps-5"
                  : "ps-5 text-decoration-none mt-3 text-dark"
              }
            >
              Instructors
            </NavLink>
            <NavLink
              to="/classes"
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? " text-decoration-none mt-3 text-primary ps-5"
                  : "ps-5 text-decoration-none mt-3 text-dark"
              }
            >
              Classes
            </NavLink>
            {user && (
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? " text-decoration-none mt-3 text-primary ps-5"
                    : "ps-5 text-decoration-none mt-3 text-dark"
                }
              >
                Dashboard
              </NavLink>
            )}
            <span className="mt-2">
              {user ? (
                <span className="ms-5">
                  <span
                    className="me-3"
                    data-tooltip-id="my-tool"
                    data-tooltip-content={user?.displayName}
                  >
                    <img
                      src={user?.photoURL}
                      alt=""
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,

                        border: "2px solid black",
                      }}
                    />
                    <Tooltip id="my-tool" />
                  </span>

                  <button className="btn btn-light " onClick={logOut}>
                    Log out
                  </button>
                </span>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? " text-decoration-none  text-primary ms-5 btn  btn-primary text-light"
                      : "ms-5 text-decoration-none  text-light btn btn-light text-dark"
                  }
                >
                  log in
                </NavLink>
              )}
            </span>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MenuBar;
