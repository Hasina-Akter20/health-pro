import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { googleSignIn, error, facebookSignIn, setError } = useAuth();

  const auth = getAuth();

  // signin with email and password
  const handingPassword = (e) => {
    setPassword(e.target.value);
  };
  const handingEmail = (e) => {
    setEmail(e.target.value);
  };
  const emailPasswordSignIn = () => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result);
    });
  };

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/tips";
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        history.push(redirect_url);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="login-form ">
        <Form className="bg-dark p-4 mt-5 login-form-edit">
          <h2 className="text-white">Sign In</h2>
          <Form.Group className="" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onBlur={handingEmail}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onBlur={handingPassword}
            />
          </Form.Group>

          <Button
            onClick={emailPasswordSignIn}
            variant="warning w-100"
            type="submit"
          >
            Log In
          </Button>
        </Form>
        <p>{error}</p>
        <p className="text-center mt-4 mb-0">
          Don't have any account? &nbsp;
          <Link to="/register" className="text-primary login-text ">
            Create a new account
          </Link>
        </p>
        <div className="w-25 d-flex or-line mt-3">
          <div className="bg-dark line"></div> <p>or</p>{" "}
          <div className="bg-dark line"></div>
        </div>
      </div>
      <div className="login-button mt-4 mb-5">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-danger btn-gradient me-3 login-buttons"
        >
          <FontAwesomeIcon icon={faGoogle} />
          &nbsp; Google
        </button>

        <button
          onClick={facebookSignIn}
          className="btn btn-primary  btn-gradient login-buttons"
        >
          <FontAwesomeIcon className="icon-font-size" icon={faFacebook} />
          &nbsp; Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
