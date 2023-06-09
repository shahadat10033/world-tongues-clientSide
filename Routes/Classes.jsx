import React from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContex } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";

const Classes = () => {
  //   ToDo:button have to disable if user role are admin or instructor
  const { user } = useContext(AuthContex);
  const handleSelect = () => {
    if (!user) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to log in first!",
      });
    }
  };
  async function fetchData() {
    const response = await fetch("http://localhost:5000/approvedClasses");
    const data = await response.json();
    return data;
  }
  const { data } = useQuery("approvedClasses", fetchData);
  console.log(data);

  useEffect(() => {}, []);

  return (
    <div>
      <h2 className="text-center fw-bold fs-1 mt-5 pt-3">
        All Approved Classes
      </h2>
      <div className="row">
        {data &&
          data.map((aClass) => (
            <div key={aClass._id} className="col-md-4">
              <div
                className={
                  aClass.availableSeats == 0
                    ? "border border-3 rounded-4 bg-danger text-light my-3"
                    : "border border-3 rounded-4 bg-info-subtle my-3"
                }
              >
                <div className="p-3 text-center">
                  <img
                    src={aClass.classImage}
                    alt=""
                    className="border border-3 img-fluid  "
                    style={{ height: "15rem", width: "28rem" }}
                  />
                  <p className="fs-5 fw-semibold">
                    Class Name: {aClass.className}
                  </p>
                  <p className="fs-5 fw-semibold">
                    Instructor Name: {aClass.instructorName}
                  </p>
                  <p className="fs-5 fw-semibold">
                    Available seats: {aClass.availableSeats}
                  </p>
                  <p className="fs-5 fw-semibold">Price: $ {aClass.price}</p>
                  <div>
                    <button className="btn btn-success" onClick={handleSelect}>
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Classes;
