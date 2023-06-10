import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {
  async function fetchData() {
    const response = await fetch("http://localhost:5000/loggedInUsers");
    const data = await response.json();
    return data;
  }
  const { data, refetch } = useQuery("LoggedUsers", fetchData);
  console.log(data);

  const handleAdmin = (id, user) => {
    fetch(`http://localhost:5000/loggedInUsers/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} turns into instructor`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleInstructor = (id, user) => {
    fetch(`http://localhost:5000/loggedInUsers/instructor/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} turns into instructor`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <p className="fw-bold fs-1 mt-3">All User</p>
      <div
        className="m-5 overflow-scroll"
        style={{ height: "25rem", width: "100rem" }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Role</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          {data &&
            data.map((user, index) => (
              <tbody className=" fs-5 fw-semibold" key={user._id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      disabled={user.role == "admin" ? true : false}
                      className="btn btn-success rounded-4"
                      onClick={() => handleAdmin(user._id, user)}
                    >
                      make admin
                    </button>
                  </td>
                  <td>
                    <button
                      disabled={user.role == "instructor" ? true : false}
                      className="btn btn-info rounded-4"
                      onClick={() => handleInstructor(user._id, user)}
                    >
                      make instructor
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageUsers;
