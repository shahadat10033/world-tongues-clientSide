import React from "react";
import { useQuery } from "react-query";
import { Fade } from "react-awesome-reveal";

const PopularInstructors = () => {
  async function fetchData() {
    const response = await fetch("http://localhost:5000/popularClasses");
    const data = await response.json();
    return data;
  }
  const { data } = useQuery("popularInstructors", fetchData);
  console.log(data);
  return (
    <div>
      <h2 className="text-center fw-bold fs-1">Popular Instructors</h2>
      <div className="row">
        {data &&
          data.map((pClass) => (
            <Fade key={pClass._id} className="col-md-4" duration="10000">
              <div>
                <div className="p-5">
                  <img
                    src={pClass.instructorPhoto}
                    alt=""
                    className="border border-3 "
                    style={{ height: "15rem", width: "28rem" }}
                  />
                </div>
              </div>
            </Fade>
          ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
