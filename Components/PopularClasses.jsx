import React from "react";
import { useQuery } from "react-query";
import { Bounce } from "react-awesome-reveal";

const PopularClasses = () => {
  async function fetchData() {
    const response = await fetch("http://localhost:5000/popularClasses");
    const data = await response.json();
    return data;
  }
  const { data } = useQuery("popularClasses", fetchData);
  console.log(data);
  return (
    <div>
      <h2 className="text-center fw-bold fs-1">Popular classes</h2>
      <div className="row">
        {data &&
          data.map((pClass) => (
            <Bounce key={pClass._id} className="col-md-4" duration="10000">
              <div>
                <div className="p-5">
                  <img
                    src={pClass.classImage}
                    alt=""
                    className="border border-3 img-fluid"
                    style={{ height: "15rem" }}
                  />
                </div>
              </div>
            </Bounce>
          ))}
      </div>
    </div>
  );
};

export default PopularClasses;
