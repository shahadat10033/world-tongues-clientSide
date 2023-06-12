import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOutForm = ({
  price,
  classImage,
  className,
  _id,
  availableSeats,
  students,
  instructorName,
  instructorEmail,
}) => {
  const { user } = useContext(AuthContex);
  const [cardErr, setCardErr] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch("https://world-tongues-serverside.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardErr(error.message);
    } else {
      setCardErr("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName || "anonymous",
            email: user.email || "unknown",
          },
        },
      });

    if (confirmError) {
      setCardErr(confirmError.message);
    }
    console.log(paymentIntent);
    setProcessing(false);
    if (paymentIntent.status == "succeeded") {
      fetch(
        `https://world-tongues-serverside.vercel.app/selectedClasses/${_id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.deletedCount > 0) {
            console.log("deleted  successfully");
          }
        });

      setTransactionId(paymentIntent.id);
      const payment = {
        name: user?.displayName,
        userEmail: user?.email,
        transactionId: paymentIntent.id,
        price,
        className,
        date: new Date(),
      };

      fetch("https://world-tongues-serverside.vercel.app/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            const enrollInfo = {
              price,
              classImage,
              className,
              _id,
              students,
              availableSeats,
              instructorName,
              instructorEmail,
              userEmail: user.email,
            };
            fetch("https://world-tongues-serverside.vercel.app/enrollClass", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(enrollInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });

            const updatedClass = { availableSeats, students };
            fetch(
              `https://world-tongues-serverside.vercel.app/singleClasses/${_id}`,
              {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedClass),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "stored in database successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div className="mx-auto">
      <form
        onSubmit={handleSubmit}
        className="w-50 m-5 p-2 border border-4 rounded-4 bg-black"
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#ffffff",
                "::placeholder": {
                  color: "#ffffff",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardErr && <p className="m-2 text-danger fs-3 fw-semibold">{cardErr}</p>}
      {transactionId && (
        <p className="m-2 text-success fs-3 fw-semibold">
          trnsaction complete with transactionId: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckOutForm;
