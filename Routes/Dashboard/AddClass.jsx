import React from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContex } from "../../Provider/AuthProvider";

const AddClass = () => {
  const { user } = useContext(AuthContex);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const className = form.className.value;
    const classImage = form.classImage.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
    const instructorPhoto = form.instructorPhoto.value;
    const availableSeats = parseInt(form.availableSeats.value);
    const price = parseInt(form.price.value);
    const status = form.status.value;
    const feedback = "";
    const students = 0;
    const instructorInfo = {
      className,
      classImage,
      instructorName,
      instructorEmail,
      instructorPhoto,
      availableSeats,
      price,
      status,
      feedback,
      students,
    };
    console.log(instructorInfo);

    fetch("https://world-tongues-serverside.vercel.app/addClass", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(instructorInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.insertedId) {
          e.target.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `class added successfully `,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      {" "}
      <h2 className="text-center fw-bold fs-1">Add A Class</h2>
      <div className="m-auto mt-3 w-75 bg-black ">
        <form onSubmit={handleSubmit} className="row  ">
          <div className="form-group   col-md-6">
            <input
              type="text"
              className="form-control mt-4  "
              placeholder="Class name"
              name="className"
              required
            />
          </div>
          <div className="form-group   col-md-6">
            <input
              type="text"
              className="form-control mt-4"
              placeholder="Class Image"
              name="classImage"
              required
            />
          </div>
          <div className="form-group   col-md-6">
            <input
              type="text"
              className="form-control mt-4 "
              placeholder="Instructor Name"
              name="instructorName"
              defaultValue={user?.displayName}
              readOnly
              required
            />
          </div>
          <div className="form-group   col-md-6">
            <input
              type="text"
              className="form-control mt-4"
              placeholder="Instructor Email"
              name="instructorEmail"
              defaultValue={user?.email}
              readOnly
              required
            />
          </div>
          <div className="form-group   col-md-6">
            <input
              type="text"
              className="form-control mt-4  "
              placeholder="Instructor Photo"
              name="instructorPhoto"
              defaultValue={user?.photoURL}
              readOnly
              required
            />
          </div>
          <div className="form-group   col-md-6">
            <input
              type="number"
              className="form-control mt-4"
              placeholder="Available Seats"
              name="availableSeats"
              required
            />
          </div>
          <div className="form-group   col-md-6">
            <input
              type="number"
              className="form-control mt-4  "
              placeholder="Price"
              name="price"
              required
            />
          </div>
          <div className="form-group   col-md-6">
            <input
              type="text"
              className="form-control mt-4"
              placeholder="Status:pending"
              name="status"
              defaultValue="pending"
              readOnly
              required
            />
          </div>

          <button type="submit" className="btn btn-primary my-3 w-50 mx-auto">
            Add class
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
