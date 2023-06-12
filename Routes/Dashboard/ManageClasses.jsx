import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageClasses = () => {
  async function fetchData() {
    const response = await fetch(
      "https://world-tongues-serverside.vercel.app/allClasses"
    );
    const data = await response.json();
    return data;
  }
  const { data, refetch } = useQuery("allClasses", fetchData);
  console.log(data);

  const handleApproved = (id, singleClass) => {
    fetch(
      `https://world-tongues-serverside.vercel.app/allClasses/approved/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${singleClass.className} is Approved`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDenied = (id, singleClass) => {
    fetch(
      `https://world-tongues-serverside.vercel.app/allClasses/denied/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${singleClass.className} is Denied`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-center fw-bold fs-1 mt-5 pt-3">All Classes</h2>

      <div
        className="m-5 overflow-scroll"
        style={{ height: "25rem", width: "100rem" }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((singleClass, index) => (
                <tr className="fw-normal fs-5" key={singleClass._id}>
                  <td>{index + 1}</td>
                  <td>
                    {" "}
                    <img
                      src={singleClass.classImage}
                      style={{ width: 150, height: 100 }}
                      alt=""
                    />
                  </td>
                  <td>{singleClass.className}</td>
                  <td>{singleClass.instructorName}</td>
                  <td>{singleClass.instructorEmail}</td>
                  <td>{singleClass.availableSeats}</td>
                  <td>{singleClass.price} $</td>
                  <td>{singleClass.status}</td>
                  <td>
                    <button
                      disabled={singleClass.status == "pending" ? false : true}
                      className="btn btn-success"
                      onClick={() =>
                        handleApproved(singleClass._id, singleClass)
                      }
                    >
                      Approve
                    </button>
                  </td>
                  <td>
                    <button
                      disabled={singleClass.status == "pending" ? false : true}
                      className="btn btn-danger"
                      onClick={() => handleDenied(singleClass._id, singleClass)}
                    >
                      Deny
                    </button>
                  </td>
                  <td>
                    <Link
                      to={`/dashboard/manageClasses/feedback/${singleClass._id}`}
                    >
                      <button
                        disabled={
                          singleClass.status == "pending" ? true : false
                        }
                        className="btn btn-warning"
                      >
                        Feedback
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageClasses;
