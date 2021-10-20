import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import useFirebase from "../../hooks/authFirebase";
import "./Login.css";
const Login = () => {
  // const { user, signInUsingGoogle, logOut } = useFirebase();
  return (
    <div>
      <div className="login-form ">
        <Form className="bg-dark p-4 mt-5 login-form-edit">
          <h2 className="text-white">Sign In</h2>
          <Form.Group className="" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="warning w-100" type="submit">
            Log In
          </Button>
        </Form>
        <p className="text-center mt-4 mb-0">
          Don't have any account? &nbsp;
          {/* <Link to="" className="text-primary login-text ">
            Create a new account
          </Link> */}
        </p>
        <div className="w-25 d-flex or-line mt-3">
          <div className="bg-dark line"></div> <p>or</p>{" "}
          <div className="bg-dark line"></div>
        </div>
      </div>
      <div className="login-button mt-4 mb-5">
        <button className="btn btn-danger btn-gradient me-3 login-buttons">
          <i class="fab fa-google"></i>&nbsp; Google
        </button>
        <button className="btn btn-primary  btn-gradient login-buttons">
          <i class="fab fa-facebook"></i>&nbsp; Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
