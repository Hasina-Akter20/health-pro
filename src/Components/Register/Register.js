import Button from "react-bootstrap/Button";
import React from "react";
import { Form } from "react-bootstrap";
import "./Register.css";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = () => {
  return (
    <div>
      <div className="login-form ">
        <Form className="bg-dark p-4 mt-5 login-form-edit">
          <h3 className="txt-color">Creat a new account</h3>
          <Form.Group className="" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="warning w-100 mt-4" type="submit">
            Register
          </Button>
        </Form>
        <p className="text-center mt-4">
          Already have an account? &nbsp;
          {/* <Link to="/login" className="text-primary login-text">
            Log In
          </Link> */}
        </p>
        <div className="w-25 d-flex or-line mt-3">
          <div className="bg-dark line"></div> <p>or</p>{" "}
          <div className="bg-dark line"></div>
        </div>
      </div>

      <div className="login-button mt-4 mb-5">
        <button className="btn btn-danger btn-gradient me-3 login-buttons">
          <FontAwesomeIcon icon={faGoogle} />
          &nbsp; Google
        </button>
        <button className="btn btn-primary  btn-gradient login-buttons">
          <FontAwesomeIcon className="icon-font-size" icon={faFacebook} />
          &nbsp; Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;
