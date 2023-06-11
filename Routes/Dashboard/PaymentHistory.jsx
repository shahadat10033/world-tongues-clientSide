import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";

const PaymentHistory = () => {
  const [data, setdata] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/payments")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center fs-1 fw-bold">Payment History</h2>

      <div
        className="m-5 overflow-scroll"
        style={{ height: "25rem", width: "100rem" }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Role</th>
            </tr>
          </thead>
          {data &&
            data.map((user, index) => (
              <tbody className=" fs-5 fw-semibold" key={user._id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              </tbody>
            ))}
        </Table>
      </div>
    </div>
  );
};

export default PaymentHistory;
