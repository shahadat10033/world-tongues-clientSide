import React from "react";
import { useContext } from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContex } from "../../Provider/AuthProvider";

const SelectedClasses = () => {
  const { user } = useContext(AuthContex);
  // const [data, setData] = useState(null);
  async function fetchData() {
    const response = await fetch(
      `https://world-tongues-serverside.vercel.app/selectedClasses/${user?.email}`
    );
    const data = await response.json();
    return data;
  }
  const { data, refetch } = useQuery("selectedClasses", fetchData);
  console.log(data);
  // useEffect(() => {
  //   fetch("https://world-tongues-serverside.vercel.app/selectedClasses")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://world-tongues-serverside.vercel.app/selectedClasses/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "deleted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <p className="text-center fs-1 fw-bold ">My Selected Class</p>

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

              <th>InstructorEmail</th>
              <th>Price</th>

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
                    <img
                      src={singleClass.classImage}
                      style={{ width: 150, height: 100 }}
                      alt=""
                    />
                  </td>
                  <td>{singleClass.className}</td>
                  <td>{singleClass.instructorName}</td>

                  <td>{singleClass.instructorEmail}</td>
                  <td>{singleClass.price} $</td>
                  <td>
                    <Link to={`/dashboard/payment/${singleClass._id}`}>
                      <button className="btn btn-info">pay</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(singleClass._id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default SelectedClasses;
