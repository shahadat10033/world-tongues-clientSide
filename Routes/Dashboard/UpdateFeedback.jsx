import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFeedback = () => {
  const { _id, instructorName } = useLoaderData();
  console.log(instructorName);

  const handleFeedback = (e) => {
    e.preventDefault();
    const feedback = e.target.textArea.value;

    const updateInfo = { feedback };
    console.log(updateInfo);
    fetch(
      `https://world-tongues-serverside.vercel.app/allClasses/feedback/${_id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updateInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount) {
          e.target.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `feedback sent to ${instructorName} `,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="m-5 ">
      <h2 className="fw-bold fs-1 mb-4">{`Feedback to ${instructorName}`}</h2>
      <form className="text-center" onSubmit={handleFeedback}>
        <input
          type="text-area"
          placeholder="feedback"
          name="textArea"
          className="rounded-4 "
        />
        <br />
        <input
          type="submit"
          className="btn fs-5  rounded-3 btn-danger"
          value="send feedback"
        />
      </form>
    </div>
  );
};

export default UpdateFeedback;
