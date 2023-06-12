import React from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContex } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Classes = () => {
  const [selectedClass, setSelectedClass] = useState({});

  const [userEmail, setUserEmail] = useState(null);
  const [users, setUsers] = useState([]);

  //   ToDo:button have to disable if user role are admin or instructor
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
        setUserEmail(users && users[0]?.email);
      });
  }, []);

  const handleSelect = (id) => {
    console.log(id);
    if (!user) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to log in first!",
      });
    }

    fetch(`https://world-tongues-serverside.vercel.app/singleClass/${id}`)
      .then((res) => res.json())
      .then((data) => {
        data.userEmail = userEmail;
        console.log(data);
        setSelectedClass(data && data);
        sendSelectedClass(data && data);
      });
    const sendSelectedClass = () => {
      fetch("https://world-tongues-serverside.vercel.app/selectedClass", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `class selected successfully `,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    };
  };
  async function fetchData() {
    const response = await fetch(
      "https://world-tongues-serverside.vercel.app/approvedClasses"
    );
    const data = await response.json();
    return data;
  }
  const { data } = useQuery("approvedClasses", fetchData);
  console.log(data);

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
                  <p className="fs-5 fw-semibold">
                    Enroll Students : {aClass.students}
                  </p>
                  <p className="fs-5 fw-semibold">Price: $ {aClass.price}</p>
                  <div>
                    <button
                      className={
                        aClass.availableSeats < 1
                          ? " btn btn-success disabled "
                          : "btn btn-success"
                      }
                      onClick={() => handleSelect(aClass._id)}
                    >
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
