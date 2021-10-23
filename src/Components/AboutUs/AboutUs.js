import React from "react";
import "./AboutUs.css";
import aboutImg from "../../Images/about-us.jpg";
import { Button } from "react-bootstrap";
const AboutUs = () => {
  return (
    <div className="mb-5  container">
      <div>
        <h1 className="text-primary pt-5 pb-4">About Us</h1>
      </div>

      <div className="about-container d-flex">
        <div className="col-12 about-us-img col-lg-6">
          <img className="img-fluid" src={aboutImg} alt="" />
        </div>
        <div className="col-12 col-lg-6 about-text">
          <h1 className="text-primary pb-3">Welcome to Health PRO</h1>
          <p className="text-dark pb-3">
            When you come to counseling, we work with you, your situation /
            issue and together we find the best treatment for you. All the tools
            we will use, you will be able to apply later in life, without
            necessarily turning to the coach every time...
          </p>

          <Button variant="outline-dark">More Information</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
