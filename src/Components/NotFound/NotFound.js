import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import notfound from "../../Images/404.png";
const NotFound = () => {
  return (
    <div className="">
      <img className="w-50" style={{ width: "100%" }} src={notfound} alt="" />

      <br />
      <Link to="/home">
        <Button variant="outline-dark mb-5">Go Back To Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
