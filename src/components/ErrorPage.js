import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import errorImg from "../images/404_page.jpg";

const ErrorPage = () => {
  return (
    <body id="custom">
      <div>
        <img class="error-image" src={errorImg} alt="avatar" />
      </div>
    </body>
  );
};

export default ErrorPage;
