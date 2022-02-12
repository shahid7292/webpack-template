/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useCallback } from "react";
import { Button, Row, Col, Label, FormGroup, Input } from "reactstrap";
import "./ResgisterStyle.scss";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);

  const togglePasswordVisiblity = useCallback(
    (e) => {
      e.stopPropagation();
      setPasswordShow(!passwordShow);
    },
    [setPasswordShow, passwordShow]
  );

  return (
    <>
      <div className="mainbg-img">
        <Row className="main-style">
          <div>
            <h3 className="title">Create New Account</h3>
            <hr />
            <div>
              <p className="para">
                Enter your email and create a password to get started!
              </p>
            </div>
          </div>

          <Col>
            <div className="reg-box">
              <FormGroup row>
                <Label for="email" sm={3} className="label-size">
                  Email:
                </Label>
                <Col sm={9}>
                  <Input
                    placeholder="something@xyz.com"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name={"email"}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="password" sm={3} className="label-size">
                  Password:
                </Label>
                <Col sm={9}>
                  <input
                    name={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type={passwordShow ? "text" : "password"}
                  />
                  <span
                    onClick={(e) => togglePasswordVisiblity(e)}
                    className="eye-icon"
                  >
                    {passwordShow ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </Col>
              </FormGroup>
              <div>
                <h6 className="link-login">
                  Already a member?
                  <Link to="/login">{"Log In"}</Link>
                </h6>
              </div>
              <Button color="secondary" size="sm" block>
                Create Account
              </Button>
            </div>
          </Col>
          <Col className="side-img">
            <div></div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Register;
