import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const PaymentPage = () => {
  const { _id, price, availableSeats, students, className } = useLoaderData();
  console.log(_id, price, availableSeats, students);

  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Pk);
  return (
    <div>
      <h1 className="fs-1 fw-bold text-center">Payment Page</h1>
      <Elements stripe={stripePromise}>
        <CheckOutForm price={price} className={className}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default PaymentPage;
