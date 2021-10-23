import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import notfound from "../../Images/404.png";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className=" container">
      <div className="notfound-container">
        <div className="">
          <img className=" img-fluid" src={notfound} alt="" />
        </div>
        <Link to="/home">
          <Button variant="outline-dark notfound-button mb-5">
            Go Back To Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
