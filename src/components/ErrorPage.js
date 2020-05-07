import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import errorImg from "../images/404_page.jpg";

const ErrorPage = () => {
  return (
    <div id="custom">
      <div>
        <img className="error-image" src={errorImg} alt="avatar" />
      </div>
    </div>
  );
};

export default ErrorPage;
