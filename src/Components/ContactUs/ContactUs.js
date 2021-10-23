import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import img from "../../Images/contact.svg";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-primary pb-4">Contact Us</h1>
      <p className="pb-4 text-color">
        If you have comments, concerns, questions, or other feedback you would
        like to give us, feel free to contact us through any of the methods
        listed below.
      </p>

      <div className="row">
        {/* contact icon and details   */}
        <div className="contact-us-all-div col-12 col-lg-6">
          <div>
            <div className="contact-div mb-4">
              <div className="loc-div d-flex  justify-content-center me-4">
                <FontAwesomeIcon className="loc-icon" icon={faMapMarkerAlt} />
              </div>
              <div className="contact-div-text text-color">
                <h3 className="p-0 m-0 ">Location</h3>
                <p className="p-0 m-0">2108-267 Road Quadra,Toronto</p>
                <p className="p-0 m-0 "> Victiria Canada</p>
              </div>
            </div>

            <div className="contact-div mb-4 text-color">
              <div className="me-4">
                <FontAwesomeIcon className="phn-icon" icon={faEnvelope} />
              </div>
              <div className="contact-div-text text-color">
                <h3 className="p-0 m-0">Email</h3>
                <p className="p-0 m-0">healthpro@gmail.com</p>
                <p className="p-0 m-0"> health34pro@yahoo.com</p>
              </div>
            </div>

            <div className="contact-div">
              <div className="me-4">
                <FontAwesomeIcon className="phn-icon" icon={faPhone} />
              </div>
              <div className="contact-div-text text-color">
                <h3 className="p-0 m-0">Phone</h3>
                <p>
                  +07 5554 3332 322 <br />
                  +07 5554 3332 322
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* img div   */}
        <div className="col-12 col-lg-6">
          <img className="img-fluid" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
