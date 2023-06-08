import React from "react";
import { useQuery } from "react-query";

const Instructors = () => {
  async function fetchData() {
    const response = await fetch("http://localhost:5000/instructors");
    const data = await response.json();
    return data;
  }
  const { data } = useQuery("instructors", fetchData);
  console.log(data);
  return (
    <div>
      <h2 className="text-center fw-bold fs-1 mt-5 pt-3">All Instructors</h2>
      <div className="row">
        {data &&
          data.map((inst) => (
            <div key={inst._id} className="col-md-4">
              <div className="border border-3 rounded-4 bg-info-subtle my-3">
                <div className="p-3 text-center">
                  <img
                    src={inst.instructorPhoto}
                    alt=""
                    className="border border-3 img-fluid  "
                    style={{ height: "15rem", width: "28rem" }}
                  />
                  <p className="fs-5 fw-semibold">
                    Name: {inst.instructorName}
                  </p>
                  <p className="fs-5 fw-semibold">
                    Email: {inst.instructorEmail}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Instructors;
