import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import { AuthContex } from "../../Provider/AuthProvider";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const { user } = useContext(AuthContex);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/loggedInUsers?email=${user?.email}`)
      .then((response) => {
        console.log(response.data);
        const loggedUser = response.data;
        setUsers(loggedUser);
      });
  }, []);

  return (
    <div>
      {users[0]?.role == "admin" && (
        <div className="d-flex" style={{ height: "100vh" }}>
          <div className="bg-danger-subtle" style={{ width: "20%" }}>
            <div className="d-flex flex-column h-100 justify-content-center">
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Item className="my-2">
                  <NavLink
                    to="/home"
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
                </Nav.Item>
                <Nav.Item className="my-2">
                  <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-3 text-primary ps-5"
                        : "ps-5 text-decoration-none mt-3 text-dark"
                    }
                  >
                    About
                  </NavLink>
                </Nav.Item>
                <Nav.Item className="my-2">
                  <NavLink
                    to="/services"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-5 text-primary ps-5"
                        : "ps-5 text-decoration-none mt-5  text-dark"
                    }
                  >
                    Services
                  </NavLink>
                </Nav.Item>
              </Nav>
            </div>
          </div>
          <div className="flex-grow-1 mt-5 pt-5 text-center fw-bold fs-1">
            welcome to <span className="text-danger">{users[0]?.role} </span>{" "}
            Dashboard
          </div>
        </div>
      )}
      {users[0]?.role == "instructor" && (
        <div className="d-flex" style={{ height: "100vh" }}>
          <div className="bg-danger-subtle" style={{ width: "20%" }}>
            <div className="d-flex flex-column h-100 justify-content-center">
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Item className="my-2">
                  <NavLink
                    to="/home"
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
                </Nav.Item>
                <Nav.Item className="my-2">
                  <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-3 text-primary ps-5"
                        : "ps-5 text-decoration-none mt-3 text-dark"
                    }
                  >
                    About
                  </NavLink>
                </Nav.Item>
                <Nav.Item className="my-2">
                  <NavLink
                    to="/services"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-5 text-primary ps-5"
                        : "ps-5 text-decoration-none mt-5  text-dark"
                    }
                  >
                    Services
                  </NavLink>
                </Nav.Item>
              </Nav>
            </div>
          </div>
          <div className="flex-grow-1 mt-5 pt-5 text-center fw-bold fs-1">
            welcome to <span className="text-danger">{users[0]?.role} </span>{" "}
            Dashboard
          </div>
        </div>
      )}
      {users[0]?.role == "student" && (
        <div className="d-flex" style={{ height: "100vh" }}>
          <div className="bg-danger-subtle" style={{ width: "20%" }}>
            <div className="d-flex flex-column h-100 justify-content-center">
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Item className="my-2">
                  <NavLink
                    to="/home"
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
                </Nav.Item>
                <Nav.Item className="my-2">
                  <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-3 text-primary ps-5"
                        : "ps-5 text-decoration-none mt-3 text-dark"
                    }
                  >
                    About
                  </NavLink>
                </Nav.Item>
                <Nav.Item className="my-2">
                  <NavLink
                    to="/services"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-5 text-primary ps-5"
                        : "ps-5 text-decoration-none mt-5  text-dark"
                    }
                  >
                    Services
                  </NavLink>
                </Nav.Item>
              </Nav>
            </div>
          </div>
          <div className="flex-grow-1 mt-5 pt-5 text-center fw-bold fs-1">
            welcome to <span className="text-danger">{users[0]?.role} </span>{" "}
            Dashboard
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
