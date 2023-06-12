import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Nav } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import { AuthContex } from "../../Provider/AuthProvider";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const { user } = useContext(AuthContex);
  useEffect(() => {
    axios
      .get(
        `https://world-tongues-serverside.vercel.app/loggedInUsers?email=${user?.email}`
      )
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-people-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </svg>{" "}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-house-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                      <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-house-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                      <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-house-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z" />
                      <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z" />
                    </svg>{" "}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-house-up-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 1 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.707l1.5-1.5a.5.5 0 0 1 .708 0Z" />
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                      <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                    </svg>{" "}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-house-slash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                      <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                      <path d="M13.879 10.414a2.5 2.5 0 0 0-3.465 3.465l3.465-3.465Zm.707.707-3.465 3.465a2.501 2.501 0 0 0 3.465-3.465Zm-4.56-1.096a3.5 3.5 0 1 1 4.949 4.95 3.5 3.5 0 0 1-4.95-4.95Z" />
                    </svg>{" "}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cash-coin"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
                      />
                      <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                      <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                      <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                    </svg>{" "}
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
