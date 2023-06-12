import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Table } from "react-bootstrap";
import { AuthContex } from "../../Provider/AuthProvider";

const EnrolledClasses = () => {
  const [data, setData] = useState(null);
  const { user } = useContext(AuthContex);

  useEffect(() => {
    fetch(
      `https://world-tongues-serverside.vercel.app/enrollClass/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      <p className="text-center fs-1 fw-bold ">My Enrolled Class</p>

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
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
