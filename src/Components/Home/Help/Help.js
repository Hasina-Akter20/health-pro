import React from "react";
import "./Help.css";
import logo from "../../../Images/heart-fav.png";
import { Button } from "react-bootstrap";

const Help = () => {
  return (
    <div className="container rounded-3 help-box mt-5 mb-5 text-color ">
      <div className="help-div">
        <div className="help-img-div">
          <img className="img-fluid" src={logo} alt="" />
        </div>
        <div className="padding">
          <h2>Questions? We’re here to help.</h2>
        </div>
        <div className="mt-3 ">
          <Button variant="outline-dark" className="mb-4">
            Send Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Help;
