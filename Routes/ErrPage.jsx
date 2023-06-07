import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center">
        <p className="text-danger">{error?.message}</p>
      </div>
      <div>
        <img src="404.jpg" alt="" className="img-fluid rounded-4" />
        <div className="mt-4 text-center">
          <Link to="/">
            <button className="btn btn-primary btn-lg">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrPage;
