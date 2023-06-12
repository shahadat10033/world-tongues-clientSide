import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import { useState } from "react";
import { Link } from "react-router-dom";

const MyCLasses = () => {
  const [myclasses, setMyClasses] = useState([]);
  const { user } = useContext(AuthContex);
  useEffect(() => {
    fetch(
      `https://world-tongues-serverside.vercel.app/myClasses?instructorEmail=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyClasses(data);
      });
  }, []);
  return (
    <div>
      <h1 className="fw-bold fs-1 text-center">My Classes</h1>

      <div className="row m-5 overflow-scroll " style={{ height: "20rem" }}>
        {myclasses &&
          myclasses.map((aClass) => (
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
                    Instructor Email : {aClass.instructorEmail}
                  </p>
                  <p className="fs-5 fw-semibold">
                    Available seats: {aClass.availableSeats}
                  </p>
                  <p className="fs-5 fw-semibold">Price: $ {aClass.price}</p>
                  <p className="fs-5 fw-semibold">Status : {aClass.status}</p>
                  <p className="fs-5 fw-semibold">
                    Enroll Student : {aClass.students}
                  </p>
                  {aClass.status == "denied" && (
                    <p className="fs-5 fw-semibold">
                      Feedback : {aClass.feedback}
                    </p>
                  )}
                  <Link to={`/dashboard/myClasses/update/${aClass._id}`}>
                    <button className="btn btn-warning">Update</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyCLasses;
