import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import notfound from "../../Images/404.png";
const NotFound = () => {
  return (
    <div className="">
      <img className="w-50" style={{ width: "100%" }} src={notfound} alt="" />
      {/* <Link to="/"><button>Go Back</button> */}
      {/* </Link> */}
      <br />
      <Button variant="outline-dark mb-5">Go Back To Home</Button>
    </div>
  );
};

export default NotFound;
