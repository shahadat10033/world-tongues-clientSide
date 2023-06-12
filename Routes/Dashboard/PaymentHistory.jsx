import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { AuthContex } from "../../Provider/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContex);
  const [data, setdata] = useState(null);
  useEffect(() => {
    fetch(`https://world-tongues-serverside.vercel.app/payments/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
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
              <th>date</th>
              <th>Student Name</th>
              <th>Student Email</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          {data &&
            data.map((sData, index) => (
              <tbody className=" fs-5 fw-semibold" key={sData._id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{sData.date}</td>
                  <td>{sData.name}</td>
                  <td>{sData.userEmail}</td>
                  <td>{sData.className}</td>
                  <td>{sData.price} $</td>
                  <td>{sData.transactionId}</td>
                </tr>
              </tbody>
            ))}
        </Table>
      </div>
    </div>
  );
};

export default PaymentHistory;
