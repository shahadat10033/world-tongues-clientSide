import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Nav } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
// TODO Icon letter
// import {
//   FaLayerGroupe,
//   FaBookBookmark,
//   FaMoneyBill1Wave,
// } from "react-icons/fa6";

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
        <div className="d-flex" style={{ height: "95vh" }}>
          <div className="bg-danger-subtle" style={{ width: "20%" }}>
            <div className="d-flex flex-column h-100 justify-content-center">
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Item className="my-2">
                  <NavLink
                    to="/dashboard/manageUsers"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-3 text-primary  "
                        : "  text-decoration-none mt-3 text-dark"
                    }
                  >
                    Manage Users
                  </NavLink>
                </Nav.Item>
                <Nav.Item className="my-2">
                  <NavLink
                    to="/dashboard/manageClasses"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-5 text-primary  "
                        : "  text-decoration-none mt-5  text-dark"
                    }
                  >
                    Manage Classes
                  </NavLink>
                </Nav.Item>
              </Nav>
            </div>
          </div>

          <div className="flex-grow-1 mt-5 pt-5  text-center fw-bold fs-1">
            welcome to <span className="text-danger">{users[0]?.role} </span>{" "}
            Dashboard
            <Outlet></Outlet>
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
                    to="/dashboard/addAClass"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-3 text-primary  "
                        : "  text-decoration-none mt-3 text-dark"
                    }
                  >
                    Add A Class
                  </NavLink>
                </Nav.Item>
                <Nav.Item className="my-2">
                  <NavLink
                    to="/dashboard/myClasses"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-5 text-primary  "
                        : "  text-decoration-none mt-5  text-dark"
                    }
                  >
                    My Classes
                  </NavLink>
                </Nav.Item>
              </Nav>
            </div>
          </div>

          <div className="flex-grow-1 mt-5 pt-5  text-center fw-bold fs-1">
            welcome to <span className="text-danger">{users[0]?.role} </span>{" "}
            Dashboard
            <Outlet></Outlet>
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
                    to="/dashboard/selectedClasses"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-3 text-primary  "
                        : "  text-decoration-none mt-3 text-dark"
                    }
                  >
                    Selected Classes
                  </NavLink>
                </Nav.Item>
                <Nav.Item className="my-2">
                  <NavLink
                    to="/dashboard/enrolledClasses"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-3 text-primary  "
                        : "  text-decoration-none mt-3 text-dark"
                    }
                  >
                    Enrolled Classes
                  </NavLink>
                </Nav.Item>
                <Nav.Item className="my-2">
                  <NavLink
                    to="/dashboard/paymentHistory"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-5 text-primary  "
                        : "  text-decoration-none mt-5  text-dark"
                    }
                  >
                    Payment History
                  </NavLink>
                </Nav.Item>
              </Nav>
            </div>
          </div>

          <div className="flex-grow-1 mt-5 pt-5  text-center fw-bold fs-1">
            welcome to <span className="text-danger">{users[0]?.role} </span>{" "}
            Dashboard
            <Outlet></Outlet>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
